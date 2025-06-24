import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy', {
  apiVersion: '2025-05-28.basil',
})

export async function POST(request: NextRequest) {
  try {
    const { origin } = new URL(request.url)
    
    // Créer une session de paiement Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: '📚 Guide Complet - Devenir Interne de Médecine en Suisse',
              description: '🎯 LE guide de référence écrit par un interne à Genève\n\n✅ Plus de 40 pages d\'expertise pratique\n📋 Toutes les démarches détaillées pas à pas\n🏥 Retour d\'expérience authentique d\'un médecin en poste\n💡 Conseils exclusifs pour maximiser vos chances\n\n📧 LIVRAISON IMMÉDIATE par email après paiement\n🔒 Accès instantané à votre guide PDF',
              images: [`${origin}/guide.png`],
            },
            unit_amount: 4999, // 49.99€ en centimes
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      metadata: {
        product: 'guide-interne-medecine-suisse',
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Erreur lors de la création de la session Stripe:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création de la session de paiement' },
      { status: 500 }
    )
  }
} 