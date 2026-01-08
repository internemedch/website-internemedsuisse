import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://interne-medecine-suisse.com'),
  title: 'Guide Complet 2026 - Devenir Interne de Médecine en Suisse | Interne Médecine Suisse',
  description: 'Guide pratique pour obtenir un poste d\'interne en Suisse. Retour d\'expérience d\'un médecin : de l\'internat en médecine générale en France à la radiologie à Genève. + de 40 pages de conseils pratiques.',
  keywords: [
    'devenir interne médecine suisse',
    'obtenir poste interne suisse',
    'internat médecine suisse étranger',
    'médecine générale vers radiologie suisse',
    'internat radiologie genève',
    'candidature interne hôpitaux suisses',
    'reconnaissance diplôme médecin france suisse',
    'visa travail médecin suisse',
    'expérience interne genève',
    'transition médecine france suisse',
    'guide médecin étranger suisse',
    'démarches administratives médecin suisse'
  ].join(', '),
  authors: [{ name: 'Dr. Thomas', url: 'https://interne-medecine-suisse.com' }],
  creator: 'Dr. Thomas - Radiologue à Genève, ex-interne en France',
  category: 'Medical Education',
  
  // Open Graph / Social Media
  openGraph: {
    title: 'Guide Complet - Devenir Interne de Médecine en Suisse',
    description: 'De l\'internat en médecine générale en France à la radiologie à Genève : mon parcours et mes conseils pour réussir votre transition.',
    url: 'https://interne-medecine-suisse.com',
    siteName: 'Interne Médecine Suisse',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/guide.png',
        width: 1200,
        height: 630,
        alt: 'Guide Complet - Devenir Interne de Médecine en Suisse',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Guide Complet - Devenir Interne de Médecine en Suisse',
    description: 'Retour d\'expérience : de l\'internat en France à la radiologie à Genève. Guide pratique pour médecins étrangers.',
    images: ['/guide.png'],
  },
  
  // Favicon and icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/favicon.ico',
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Additional metadata for better SEO
  other: {
    'theme-color': '#dc2626',
    'color-scheme': 'light',
    'format-detection': 'telephone=no',
    'viewport': 'width=device-width, initial-scale=1',
    'og:type': 'website',
    'og:locale': 'fr_FR',
    'og:site_name': 'Interne Médecine Suisse',
    'twitter:site': '@internemedsuisse',
    'apple-mobile-web-app-capable': 'yes',
    'application-name': 'Interne Médecine Suisse',
    'apple-mobile-web-app-title': 'Interne Médecine Suisse',
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://interne-medecine-suisse.com" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1LG6RVDYKT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1LG6RVDYKT');
            `,
          }}
        />
        
        {/* Application meta */}
        <meta name="application-name" content="Interne Medecine Suisse" />
        
        {/* Preload important resources */}
        <link rel="preload" href="/guide.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://checkout.stripe.com" />
        
        {/* Schema.org structured data for Organization and Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Interne Médecine Suisse",
              "url": "https://interne-medecine-suisse.com",
              "logo": "https://interne-medecine-suisse.com/guide.png",
              "description": "Guide pratique pour obtenir un poste d'interne en Suisse - Expérience d'un médecin passé de l'internat en France à la radiologie à Genève",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Dr. Thomas",
                "jobTitle": "Radiologue",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Hôpital de Genève"
                },
                "description": "Radiologue à Genève, ex-interne en médecine générale en France"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "French",
                "email": "interne-medecine-suisse@proton.me"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Interne Médecine Suisse",
              "alternateName": "Interne Médecine Suisse",
              "url": "https://interne-medecine-suisse.com",
              "description": "Guide pratique pour obtenir un poste d'interne en Suisse - Retour d'expérience d'un médecin passé de l'internat en France à la radiologie à Genève",
              "inLanguage": "fr-FR",
              "publisher": {
                "@type": "Organization",
                "name": "Interne Médecine Suisse",
                "legalName": "Interne Médecine Suisse"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://interne-medecine-suisse.com?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <SpeedInsights />
        
        {/* Analytics placeholder */}
        <noscript>
          <div style={{ display: 'none' }}>
            Ce site nécessite JavaScript pour fonctionner correctement.
          </div>
        </noscript>
      </body>
    </html>
  )
}
