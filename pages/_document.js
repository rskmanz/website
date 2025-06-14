import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* SEO Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          
          {/* Preconnect for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          
          {/* Schema.org structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Bayond LLC",
                "url": "https://bayond.tech",
                "logo": "https://bayond.tech/logo.png",
                "description": "AI-powered digital transformation and SaaS development company based in San Francisco",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2443 Fillmore St",
                  "addressLocality": "San Francisco",
                  "addressRegion": "CA",
                  "postalCode": "94115",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "r.ogata@bayond.tech",
                  "contactType": "Customer Service"
                },
                "founder": {
                  "@type": "Person",
                  "name": "Ryosuke Ogata"
                },
                "foundingDate": "2024",
                "sameAs": [
                  "https://linkedin.com/company/bayond-llc"
                ],
                "serviceArea": {
                  "@type": "Place",
                  "name": "Global"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "AI Solutions and SaaS Development Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "name": "Myond AI Workspace",
                      "description": "AI-powered workspace for thought organization and productivity"
                    },
                    {
                      "@type": "Offer", 
                      "name": "AI Solutions Development",
                      "description": "Custom AI agents, LLM integration, and RAG systems"
                    },
                    {
                      "@type": "Offer",
                      "name": "SaaS Development",
                      "description": "Full-stack SaaS development and startup acceleration"
                    },
                    {
                      "@type": "Offer",
                      "name": "Digital Transformation",
                      "description": "Enterprise digital transformation and data analytics"
                    }
                  ]
                }
              })
            }}
          />
        </Head>
        <body style={{ fontFamily: 'Inter, sans-serif' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument