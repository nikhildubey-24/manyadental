import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const baseUrl = 'https://manyadentalbilaspur.in'

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | Manya Dental Bilaspur',
    default: 'Manya Dental - Best Dentist in Bilaspur | Dr. Swati Raj - Associate Professor at Triveni Dental College, Bilaspur',
  },
  description: 'Advanced dental care in Bilaspur with cutting-edge technology under Dr. Swati Raj (Associate Professor at Triveni Dental College, Bilaspur). Book your appointment today for root canal, implants, cosmetic dentistry & more.',
  keywords: ['dentist in Bilaspur', 'dental clinic Bilaspur', 'Dr. Swati Raj', 'Associate Professor Triveni Dental College Bilaspur', 'root canal Bilaspur', 'dental implants Bilaspur', 'cosmetic dentistry Bilaspur', 'teeth whitening Bilaspur', 'Manya Dental'],
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Manya Dental - Best Dentist in Bilaspur | Dr. Swati Raj - Associate Professor at Triveni Dental College, Bilaspur',
    description: 'Advanced dental care with modern technology and compassionate service under Dr. Swati Raj (Associate Professor at Triveni Dental College, Bilaspur). Root canal, implants, cosmetic dentistry & more.',
    url: baseUrl,
    siteName: 'Manya Dental',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manya Dental - Best Dentist in Bilaspur',
    description: 'Advanced dental care with modern technology and compassionate service.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DentalClinic',
  name: 'Manya Dental',
  description: 'Advanced dental care in Bilaspur with cutting-edge technology and compassionate service under Dr. Swati Raj, Associate Professor at Triveni Dental College, Bilaspur.',
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  telephone: '+919131053337',
  email: 'info@manyadental.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R.K. Plaza, Link Road',
    addressLocality: 'Bilaspur',
    addressRegion: 'Chhattisgarh',
    postalCode: '495001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '22.0743408',
    longitude: '82.1502122',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '00:00', closes: '00:00' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Dr. Swati Raj',
    jobTitle: 'Associate Professor at Triveni Dental College, Bilaspur',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen">
            <Navbar />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
            <Toaster position="bottom-right" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
