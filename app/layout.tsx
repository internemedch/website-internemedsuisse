import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://interne-medecine-suisse.com'),
  title: 'Guide Complet 2025 - Devenir Interne de Médecine en Suisse | Interne Médecine Suisse',
  description: 'Le guide pratique de référence pour réussir son internat de médecine en Suisse. + de 40 pages d\'expérience d\'un interne à Genève. Démarches, visa, logement, candidature aux hôpitaux.',
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
  authors: [{ name: 'Dr. Thomas', url: 'https://interne-medecine-suisse.com' }],
  creator: 'Dr. Thomas - Interne HUG',
  category: 'Medical Education',
  
  // Open Graph / Social Media
  openGraph: {
    title: 'Guide Complet - Devenir Interne de Médecine en Suisse',
    description: 'Le guide que j\'aurais aimé avoir pour réussir mon internat en Suisse. + de 40 pages d\'expérience en Suisse.',
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
    description: 'Le guide pratique pour réussir son internat de médecine en Suisse',
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
    'twitter:site': '@internemedsuisse',
    'apple-mobile-web-app-capable': 'yes',
  },
  
  // Géolocalisation pour le SEO local
  verification: {
    google: 'your-google-verification-code',
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
              "description": "Guide spécialisé pour les médecins souhaitant devenir internes en Suisse",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Dr. Thomas",
                "jobTitle": "Médecin Interne",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Hôpitaux Universitaires de Genève"
                }
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "French"
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
              "url": "https://interne-medecine-suisse.com",
              "description": "Guide complet pour devenir interne de médecine en Suisse",
              "inLanguage": "fr-FR",
              "publisher": {
                "@type": "Organization",
                "name": "Interne Médecine Suisse"
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
