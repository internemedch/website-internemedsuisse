'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Home, Hospital, CreditCard, MapPin, CheckCircle, Star, ChevronDown, Mail } from "lucide-react"
import { loadStripe } from '@stripe/stripe-js'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'

// Initialiser Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export default function InterneMedecineSuisse() {
  const [isLoading, setIsLoading] = useState(false)

  // Données structurées pour le produit
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Guide Complet - Devenir Interne de Médecine en Suisse",
    "description": "Guide pratique pour obtenir un poste d'interne en Suisse. Retour d'expérience d'un médecin : de l'internat en médecine générale en France à la radiologie à Genève. Plus de 40 pages de conseils pratiques.",
    "image": [
      "https://interne-medecine-suisse.com/guide.png",
      "https://interne-medecine-suisse.com/guide-internesuisse.png"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Interne Médecine Suisse"
    },
    "author": {
      "@type": "Person",
      "name": "Dr. Thomas",
      "jobTitle": "Radiologue",
      "worksFor": {
        "@type": "Organization",
        "name": "Hôpital de Genève"
      },
      "description": "Radiologue à Genève, ex-interne en médecine générale en France"
    },
    "offers": {
      "@type": "Offer",
      "price": "49.99",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": "https://interne-medecine-suisse.com",
      "priceValidUntil": "2025-12-31",
      "seller": {
        "@type": "Organization",
        "name": "Interne Médecine Suisse",
        "url": "https://interne-medecine-suisse.com"
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "FR",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
        "merchantReturnDays": 0,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn",
        "returnPolicySeasonalOverride": false
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0.00",
          "currency": "EUR"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 0,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 0,
            "unitCode": "DAY"
          }
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "category": "Éducation médicale",
    "sku": "GUIDE-INTERNE-SUISSE-2025",
    "mpn": "GUIDE-INTERNE-SUISSE-2025",
    "productID": "guide-interne-medecine-suisse-2025",
    "additionalType": "https://schema.org/DigitalDocument",
    "format": "PDF",
    "numberOfPages": "40+",
    "inLanguage": "fr-FR"
  }

  useEffect(() => {
    // Injecter les données structurées dans le head
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    // Ajouter les données structurées pour les avis
    const reviewsData = {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Product",
        "name": "Guide Complet - Devenir Interne de Médecine en Suisse"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "name": "Un guide indispensable pour obtenir un poste d'interne en Suisse",
      "author": {
        "@type": "Person",
        "name": "Marie L."
      },
      "reviewBody": "Ce guide m'a aidé à décrocher mon poste d'interne à Genève. L'expérience partagée par Dr. Thomas est authentique et les démarches sont expliquées étape par étape. J'ai évité plusieurs erreurs coûteuses grâce à ses conseils pratiques.",
      "datePublished": "2025-05-15"
    }

    const reviewScript = document.createElement('script')
    reviewScript.type = 'application/ld+json'
    reviewScript.text = JSON.stringify(reviewsData)
    document.head.appendChild(reviewScript)

    // Ajouter les métadonnées Open Graph pour un meilleur affichage
    const metaTags = [
      { property: 'og:title', content: 'Guide Complet - Devenir Interne de Médecine en Suisse' },
      { property: 'og:description', content: 'Retour d\'expérience : de l\'internat en médecine générale en France à la radiologie à Genève. Guide pratique pour obtenir un poste d\'interne en Suisse.' },
      { property: 'og:image', content: 'https://interne-medecine-suisse.com/guide.png' },
      { property: 'og:url', content: 'https://interne-medecine-suisse.com' },
      { property: 'og:type', content: 'product' },
      { property: 'product:price:amount', content: '49.99' },
      { property: 'product:price:currency', content: 'EUR' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://interne-medecine-suisse.com/guide.png' }
    ]

    metaTags.forEach(tag => {
      const meta = document.createElement('meta')
      if (tag.property) meta.setAttribute('property', tag.property)
      if (tag.name) meta.setAttribute('name', tag.name)
      meta.setAttribute('content', tag.content)
      document.head.appendChild(meta)
    })

    return () => {
      // Nettoyer les éléments lors du démontage
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
      existingScripts.forEach(script => {
        if (script.textContent?.includes('Product') || script.textContent?.includes('Review')) {
          document.head.removeChild(script)
        }
      })
      
      // Nettoyer les meta tags ajoutés
      const addedMetas = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[property^="product:"]')
      addedMetas.forEach(meta => document.head.removeChild(meta))
    }
  }, [])

  const handleBuyGuide = async () => {
    try {
      setIsLoading(true)
      
      // Créer une session de paiement
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Erreur lors de la création de la session')
      }

      const { sessionId } = await response.json()
      
      // Rediriger vers Stripe Checkout
      const stripe = await stripePromise
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: sessionId,
        })
        
        if (error) {
          console.error('Erreur Stripe:', error)
          alert('Une erreur est survenue. Veuillez réessayer.')
        }
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <div className="w-4 h-1 bg-white absolute"></div>
                <div className="w-1 h-4 bg-white absolute"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Interne Médecine Suisse</span>
            </div>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={handleBuyGuide}
              disabled={isLoading}
            >
              {isLoading ? 'Chargement...' : 'Acheter le Guide'}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-300 to-transparent transform rotate-1"></div>
          <div className="absolute bottom-8 left-1/4 w-48 h-24 bg-gray-200 rounded-full transform -rotate-12"></div>
          <div className="absolute bottom-12 right-1/4 w-32 h-16 bg-gray-300 rounded-full transform rotate-6"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contenu textuel */}
              <div className="text-center lg:text-left">
                <Badge className="mb-6 bg-red-100 text-red-800 hover:bg-red-100">Guide Exclusif 2025</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Devenir Interne de Médecine en Suisse : <span className="text-red-600">Le Guide Complet</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  Retour d'expérience : de l'internat en médecine générale en France à la radiologie à Genève
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
                    onClick={handleBuyGuide}
                    disabled={isLoading}
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    {isLoading ? 'Chargement...' : 'Acheter le Guide'}
                  </Button>
                  <p className="text-sm text-gray-500">✓ Accès immédiat • ✓ Format PDF • ✓ +de 40 pages</p>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>4.9/5 (127 avis)</span>
                  </div>
                  <div>+ de 500 médecins aidés</div>
                </div>
              </div>

              {/* Image du guide */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Effet d'ombre et de brillance */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg blur opacity-20 animate-pulse"></div>
                  <div className="relative bg-white p-2 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/guide.png"
                      alt="Guide Complet - Devenir Interne de Médecine en Suisse"
                      width={400}
                      height={600}
                      className="rounded-lg shadow-lg"
                      priority
                      quality={95}
                    />
                    {/* Badge de prix sur l'image */}
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      49.99€
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Pourquoi ce guide va changer votre parcours
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Évitez les erreurs coûteuses et maximisez vos chances d'obtenir un poste d'interne en Suisse
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Démarches Simplifiées</h3>
                  <p className="text-gray-600">
                    Toutes les étapes administratives expliquées pas à pas, avec les documents exacts à fournir
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Astuces d'Expatrié</h3>
                  <p className="text-gray-600">
                    Logement, banque, assurance : tous les conseils pratiques pour s'installer sereinement
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Hospital className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Retour d'Expérience</h3>
                  <p className="text-gray-600">
                    Mon parcours : de l'internat en médecine générale en France à la radiologie à Genève
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Erreurs à Éviter</h3>
                  <p className="text-gray-600">
                    Les 10 erreurs les plus courantes qui peuvent compromettre votre candidature
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Images Carousel - Preuve Sociale */}
      <section className="py-20 bg-red-600 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ce que disent nos lecteurs
              </h2>
              <p className="text-red-100 text-xl">
                Plus de 500 médecins nous font confiance
              </p>
            </div>

            {/* Carousel d'images qui défile - pause sur hover */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex animate-scroll-left animate-pause space-x-8">
                  {/* Image 1 - Stella */}
                  <div className="flex-shrink-0">
                    <div className="relative bg-white/10 backdrop-blur border-white/20 rounded-lg p-3 shadow-2xl">
                      <Image
                        src="/1.PNG"
                        alt="Témoignage client Stella - Guide Interne Médecine Suisse"
                        width={350}
                        height={600}
                        className="rounded-lg shadow-lg max-h-96 object-cover"
                        quality={95}
                      />
                    </div>
                  </div>

                  {/* Image 2 - Tom */}
                  <div className="flex-shrink-0">
                    <div className="relative bg-white/10 backdrop-blur border-white/20 rounded-lg p-3 shadow-2xl">
                      <Image
                        src="/2.PNG"
                        alt="Témoignage client Tom - Guide Interne Médecine Suisse"
                        width={350}
                        height={600}
                        className="rounded-lg shadow-lg max-h-96 object-cover"
                        quality={95}
                      />
                    </div>
                  </div>

                  {/* Image 3 - Emma */}
                  <div className="flex-shrink-0">
                    <div className="relative bg-white/10 backdrop-blur border-white/20 rounded-lg p-3 shadow-2xl">
                      <Image
                        src="/3.PNG"
                        alt="Témoignage client Emma - Guide Interne Médecine Suisse"
                        width={350}
                        height={600}
                        className="rounded-lg shadow-lg max-h-96 object-cover"
                        quality={95}
                      />
                    </div>
                  </div>

                  {/* Duplication pour l'effet de boucle infinie */}
                  <div className="flex-shrink-0">
                    <div className="relative bg-white/10 backdrop-blur border-white/20 rounded-lg p-3 shadow-2xl">
                      <Image
                        src="/1.PNG"
                        alt="Témoignage client Stella - Guide Interne Médecine Suisse"
                        width={350}
                        height={600}
                        className="rounded-lg shadow-lg max-h-96 object-cover"
                        quality={95}
                      />
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="relative bg-white/10 backdrop-blur border-white/20 rounded-lg p-3 shadow-2xl">
                      <Image
                        src="/2.PNG"
                        alt="Témoignage client Tom - Guide Interne Médecine Suisse"
                        width={350}
                        height={600}
                        className="rounded-lg shadow-lg max-h-96 object-cover"
                        quality={95}
                      />
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="relative bg-white/10 backdrop-blur border-white/20 rounded-lg p-3 shadow-2xl">
                      <Image
                        src="/3.PNG"
                        alt="Témoignage client Emma - Guide Interne Médecine Suisse"
                        width={350}
                        height={600}
                        className="rounded-lg shadow-lg max-h-96 object-cover"
                        quality={95}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Gradient overlay pour un meilleur effet visuel */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-red-600 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-red-600 to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Ce que vous allez apprendre
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Un guide complet de A à Z pour obtenir votre poste d'interne en Suisse
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Reconnaissance de diplôme</h3>
                  <p className="text-gray-600">
                    Procédure complète pour faire reconnaître votre diplôme français/belge
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Visa et permis de travail</h3>
                  <p className="text-gray-600">Toutes les démarches administratives pour obtenir votre autorisation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Logement à Genève</h3>
                  <p className="text-gray-600">Où chercher, combien prévoir, les quartiers à privilégier</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Hospital className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Candidature aux hôpitaux</h3>
                  <p className="text-gray-600">CV suisse, lettre de motivation, entretiens : tous les secrets</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Aspects financiers</h3>
                  <p className="text-gray-600">Salaires, charges, budget mensuel, optimisation fiscale</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Intégration culturelle</h3>
                  <p className="text-gray-600">Codes sociaux, langue, vie quotidienne en Suisse romande</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Questions fréquentes</h2>

            <div className="space-y-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Combien de temps prennent les démarches ?</h3>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mt-3">
                    En moyenne 6 à 12 mois selon votre situation. Le guide vous donne un planning précis pour optimiser
                    ce délai.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Quel est le coût total des démarches ?</h3>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mt-3">
                    Entre 850 et 4000 CHF selon les cas. Le guide détaille tous les frais pour éviter les mauvaises
                    surprises.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Faut-il parler allemand pour travailler en Suisse Romande (Genève, Lausanne, Neuchâtel, Sion, ...) ?</h3>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mt-3">
                    Non, le français suffit à Genève. Cependant, quelques notions d'allemand peuvent être un plus pour
                    certains postes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Puis-je faire mon internat directement après mes études ?</h3>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mt-3">
                    Oui, c'est possible ! Le guide explique la procédure spécifique pour les nouveaux diplômés.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hospital className="h-12 w-12 text-red-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Qui suis-je ?</h2>
            </div>

            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Je suis Dr. Thomas, radiologue à Genève depuis 2024. Diplômé de la faculté de médecine de Lyon, 
                j'étais interne en médecine générale en France avant d'obtenir un poste d'interne en radiologie à Genève.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                En 2023, j'ai passé des mois à chercher des informations éparpillées sur internet, à contacter des
                dizaines de personnes, à naviguer dans les démarches administratives complexes. J'ai fait des erreurs 
                coûteuses qui ont retardé mon projet et perdu un temps précieux dans ce parcours du combattant.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Aujourd'hui installé et épanoui dans ma pratique à Genève, j'ai décidé de compiler toute cette
                expérience dans un guide pratique. Mon objectif : vous faire gagner des mois de recherches et vous
                éviter les pièges que j'ai rencontrés lors de ma transition.
              </p>
              <p className="text-lg leading-relaxed font-medium text-gray-900">
                Ce guide, c'est le raccourci que j'aurais aimé avoir. Il contient mon parcours concret, les contacts utiles, 
                et surtout, la méthode qui fonctionne pour obtenir un poste d'interne en Suisse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à concrétiser votre projet ?</h2>
            <p className="text-xl text-red-100 mb-8">Rejoignez les +de 500 médecins qui ont déjà téléchargé le guide</p>
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={handleBuyGuide}
              disabled={isLoading}
            >
              <FileText className="mr-2 h-5 w-5" />
              {isLoading ? 'Chargement...' : 'Acheter le Guide Maintenant'}
            </Button>
            <p className="text-red-100 text-sm mt-4">Accès immédiat</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                  <div className="w-4 h-1 bg-white absolute"></div>
                  <div className="w-1 h-4 bg-white absolute"></div>
                </div>
                <span className="text-lg font-bold">Interne Médecine Suisse</span>
              </div>
              <p className="text-gray-400 text-sm">Le guide de référence pour obtenir un poste d'interne de médecine en Suisse.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  interne-medecine-suisse@proton.me
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>
                  <a href="#" className="hover:text-white">
                    Mentions légales
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Politique de confidentialité
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    CGV
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Disclaimer</h4>
              <p className="text-xs text-gray-400">
                Ce guide est basé sur une expérience personnelle et des informations disponibles en 2025. Les procédures
                peuvent évoluer. Vérifiez toujours les informations officielles.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Interne Médecine Suisse. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
