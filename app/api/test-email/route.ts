import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

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

  const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 604800 })
  return signedUrl
}

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Test des variables d\'environnement...')
    
    // Vérifier les variables d'environnement
    const vars = {
      RESEND_API_KEY: process.env.RESEND_API_KEY ? '✅ Configuré' : '❌ Manquant',
      AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID ? '✅ Configuré' : '❌ Manquant',
      AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY ? '✅ Configuré' : '❌ Manquant',
      AWS_REGION: process.env.AWS_REGION || 'us-east-1 (par défaut)',
      AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME || 'guide-interne-suisse (par défaut)',
    }
    
    console.log('Variables d\'environnement:', vars)
    
    // Test 1: Générer le lien S3
    let downloadUrl = 'Test S3 échoué'
    try {
      downloadUrl = await generateSignedUrl(
        process.env.AWS_S3_BUCKET_NAME || 'guide-interne-suisse',
        'guide-interne-suisse.pdf'
      )
      console.log('✅ Lien S3 généré avec succès')
    } catch (error: any) {
      console.error('❌ Erreur génération lien S3:', error.message)
      downloadUrl = `Erreur S3: ${error.message}`
    }
    
    // Test 2: Envoyer un email de test
    let emailResult = 'Test email échoué'
    try {
      const result = await resend.emails.send({
        from: 'Dr. Thomas <noreply@interne-medecine-suisse.com>',
        to: ['test@example.com'], // Remplacer par votre email de test
        subject: '🧪 Test - Configuration Email',
        html: `
          <h1>Test de configuration</h1>
          <p>Si vous recevez cet email, la configuration Resend fonctionne !</p>
          <p><strong>Lien S3 généré:</strong> ${downloadUrl.substring(0, 100)}...</p>
        `,
      })
      
      emailResult = `✅ Email envoyé - ID: ${result.data?.id}`
      console.log('✅ Email de test envoyé:', result.data?.id)
    } catch (error: any) {
      console.error('❌ Erreur envoi email:', error.message)
      emailResult = `Erreur email: ${error.message}`
    }
    
    return NextResponse.json({
      status: 'Test terminé',
      variables: vars,
      s3Test: downloadUrl.substring(0, 100) + '...',
      emailTest: emailResult,
      message: 'Vérifiez les logs de la console pour plus de détails'
    })
    
  } catch (error: any) {
    console.error('❌ Erreur générale:', error)
    return NextResponse.json({ 
      error: 'Test échoué', 
      details: error.message 
    }, { status: 500 })
  }
} 