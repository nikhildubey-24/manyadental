import ServicesPage from './page-content'

export const metadata = {
  title: 'Dental Services - Root Canal, Implants, Braces & More in Bilaspur',
  description: 'Comprehensive dental services in Bilaspur by Dr. Swati Raj (Associate Professor at Triveni Dental College, Bilaspur): preventive care, root canals, dental implants, teeth whitening, braces, crowns, bridges, periodontal surgery & more at Manya Dental.',
  openGraph: {
    title: 'Dental Services - Manya Dental Bilaspur',
    description: 'From routine cleanings to advanced surgical procedures. Full-service dental clinic in Bilaspur offering root canals, implants, cosmetic dentistry & more.',
    url: 'https://manyadentalbilaspur.in/services',
  },
  alternates: {
    canonical: 'https://manyadentalbilaspur.in/services',
  },
}

export default function Page() {
  return <ServicesPage />
}
