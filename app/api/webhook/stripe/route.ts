import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy', {
  apiVersion: '2025-05-28.basil',
})

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key')

// Configuration AWS S3
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

// Fonction pour générer un lien signé AWS S3
async function generateSignedUrl(bucketName: string, objectKey: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: objectKey,
  })

  // Lien valide pendant 7 jours (604800 secondes)
  const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 604800 })
  return signedUrl
}

// Template email HTML
const emailTemplate = (customerName: string, downloadUrl: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Votre Guide Interne Médecine Suisse</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">🎉 Merci pour votre achat !</h1>
        <p style="color: #fecaca; margin: 10px 0 0 0; font-size: 16px;">Votre guide est prêt à télécharger</p>
    </div>
    
    <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
        <p style="font-size: 18px; margin-bottom: 20px;">Bonjour ${customerName},</p>
        
        <p>Félicitations ! Votre paiement a été confirmé avec succès. Vous pouvez maintenant télécharger votre guide complet :</p>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
            <h2 style="color: #dc2626; margin: 0 0 15px 0; font-size: 20px;">📚 Guide Complet - Devenir Interne de Médecine en Suisse</h2>
            <p style="margin: 10px 0; color: #6b7280;">Plus de 40 pages • Expérience d'un interne radiologue à Genève • Format PDF • Accès immédiat</p>
            
            <a href="${downloadUrl}" 
               style="display: inline-block; background: #dc2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; margin: 20px 0;">
                📥 Télécharger le Guide
            </a>
            
            <p style="font-size: 12px; color: #9ca3af; margin-top: 15px;">
                ⏰ Ce lien est valide pendant 7 jours
            </p>
        </div>
        
        <div style="background: #ecfdf5; border: 1px solid #d1fae5; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #059669; margin: 0 0 10px 0; font-size: 16px;">✅ Ce que vous allez découvrir :</h3>
            <ul style="margin: 10px 0; padding-left: 20px; color: #065f46;">
                <li>Comment obtenir un poste d'interne en Suisse (démarches complètes)</li>
                <li>Reconnaissance de diplôme et équivalences pour médecins étrangers</li>
                <li>Procédures visa et permis de travail spécifiques</li>
                <li>Stratégies de candidature aux hôpitaux suisses</li>
                <li>Installation à Genève : logement, coût de la vie, fiscalité</li>
                <li>Mon parcours personnel : de l'internat français à la radiologie à Genève</li>
                <li>Conseils pratiques et pièges à éviter</li>
                <li>Contacts utiles et ressources indispensables</li>
            </ul>
        </div>
        
        <div style="background: #fef3c7; border: 1px solid #fcd34d; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">👨‍⚕️ L'expérience qui fait la différence :</h3>
            <p style="margin: 0; color: #78350f; font-size: 14px; font-style: italic;">
                "J'étais interne en medecine générale en France et j'ai réussi à décrocher un poste d'interne en radiologie à Genève. 
                Ce guide partage mon expérience concrète, les obstacles rencontrés et les solutions que j'ai trouvées. 
                Un retour d'expérience authentique pour vous faire gagner du temps et éviter les erreurs que j'ai commises."
            </p>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
                <strong>Besoin d'aide ?</strong><br>
                N'hésitez pas à me contacter à : <a href="mailto:interne-medecine-suisse@proton.me" style="color: #dc2626;">interne-medecine-suisse@proton.me</a>
            </p>
            
            <p style="margin: 15px 0 0 0; color: #6b7280; font-size: 14px;">
                Bonne chance dans votre projet d'intégrer l'internat en Suisse ! 🇨🇭✨<br>
                <em>Dr. Thomas - Radiologue à  Genève, ex-interne en France</em>
            </p>
        </div>
    </div>
    
    <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
        <p>© 2026 Interne Médecine Suisse - Guide pratique pour intégrer l'internat en Suisse</p>
    </div>
</body>
</html>
`

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json({ error: 'No signature' }, { status: 400 })
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      )
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Traiter uniquement les paiements réussis
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      // Récupérer les informations du client
      const customerEmail = session.customer_details?.email
      const customerName = session.customer_details?.name || 'Cher(e) futur(e) interne'

      if (!customerEmail) {
        console.error('No customer email found in session')
        return NextResponse.json({ error: 'No customer email' }, { status: 400 })
      }

      try {
        console.log('🔄 Generating AWS S3 signed URL for customer:', customerEmail)
        
        // Générer le lien signé AWS S3
        const downloadUrl = await generateSignedUrl(
          process.env.AWS_S3_BUCKET_NAME || 'guide-interne-suisse',
          'guide-interne-suisse.pdf' // Nom de votre fichier PDF dans S3
        )

        console.log('✅ AWS S3 signed URL generated successfully')
        console.log('📧 Sending email to:', customerEmail)

        // Envoyer l'email avec Resend
        const emailResult = await resend.emails.send({
          from: 'Dr. Thomas <noreply@interne-medecine-suisse.com>',
          to: [customerEmail],
          subject: '🎉 Votre Guide pour Devenir Interne en Suisse est prêt !',
          html: emailTemplate(customerName, downloadUrl),
        })

        console.log('✅ Email sent successfully:', emailResult.data?.id)

        return NextResponse.json({ 
          success: true, 
          message: 'Email sent successfully',
          emailId: emailResult.data?.id,
          customerEmail: customerEmail
        })

      } catch (error: any) {
        console.error('❌ Error in webhook processing:', error)
        
        // Distinguer les erreurs AWS vs Resend
        if (error?.name === 'NoSuchBucket' || error?.name === 'AccessDenied') {
          console.error('🚨 AWS S3 Error - Check your bucket name and permissions')
          return NextResponse.json({ 
            error: 'AWS S3 configuration error', 
            details: 'Check bucket name and permissions'
          }, { status: 500 })
        }
        
        if (error?.message?.includes('resend') || error?.message?.includes('email')) {
          console.error('🚨 Resend Email Error - Check your API key and domain')
          return NextResponse.json({ 
            error: 'Email sending failed', 
            details: 'Check Resend configuration'
          }, { status: 500 })
        }
        
        return NextResponse.json({ 
          error: 'Webhook processing failed', 
          details: error?.message || 'Unknown error'
        }, { status: 500 })
      }
    }

    return NextResponse.json({ received: true })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ 
      error: 'Webhook processing failed', 
      details: error 
    }, { status: 500 })
  }
}