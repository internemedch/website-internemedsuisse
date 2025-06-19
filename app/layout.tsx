import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guide Complet 2025 - Devenir Interne de Médecine en Suisse | Interne Médecine Suisse',
  description: 'Le guide pratique de référence pour réussir son internat de médecine en Suisse. 40+ pages d\'expérience d\'un interne à Genève. Démarches, visa, logement, candidature aux hôpitaux.',
  keywords: [
    'internat médecine suisse',
    'résidanat suisse',
    'médecine interne genève',
    'guide médecin suisse',
    'diplôme médecine reconnaissance suisse',
    'visa médecin suisse',
    'hôpitaux universitaires genève',
    'étudiant médecine france suisse',
    'spécialisation médecine suisse',
    'expatriation médecin suisse'
  ].join(', '),
  authors: [{ name: 'Dr. Thomas', url: 'https://internemedecinesuisse.ch' }],
  creator: 'Dr. Thomas - Interne HUG',
  category: 'Medical Education',
  
  // Open Graph / Social Media
  openGraph: {
    title: 'Guide Complet - Devenir Interne de Médecine en Suisse',
    description: 'Le guide que j\'aurais aimé avoir pour réussir mon internat en Suisse. 40+ pages d\'expérience pratique.',
    url: 'https://internemedecinesuisse.ch',
    siteName: 'Interne Médecine Suisse',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/guide-interne-suisse.jpg',
        width: 1200,
        height: 630,
        alt: 'Guide Interne Médecine Suisse',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Guide Complet - Devenir Interne de Médecine en Suisse',
    description: 'Le guide pratique pour réussir son internat de médecine en Suisse',
    images: ['/guide-interne-suisse.jpg'],
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
        <link rel="canonical" href="https://internemedecinesuisse.ch" />
        
        {/* Preload important resources */}
        <link rel="preload" href="/fonts" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Schema.org structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Guide Complet - Devenir Interne de Médecine en Suisse",
              "description": "Guide pratique pour réussir son internat de médecine en Suisse",
              "brand": {
                "@type": "Brand",
                "name": "Interne Médecine Suisse"
              },
              "author": {
                "@type": "Person",
                "name": "Dr. Thomas",
                "jobTitle": "Médecin Interne",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Hôpitaux Universitaires de Genève"
                }
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "CHF"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        
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
