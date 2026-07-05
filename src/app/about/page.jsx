import AboutPage from './page-content'

export const metadata = {
  title: 'About Dr. Swati Raj - Periodontist & Implant Specialist in Bilaspur',
  description: 'Meet Dr. Swati Raj, MDS Periodontist at Manya Dental Bilaspur. 15+ years experience in dental implants, cosmetic dentistry, root canal, and advanced periodontal care in Bilaspur, Chhattisgarh.',
  openGraph: {
    title: 'About Dr. Swati Raj - Manya Dental Bilaspur',
    description: 'Meet Dr. Swati Raj, MDS Periodontist with 15+ years experience. Expert in dental implants, cosmetic dentistry, and advanced periodontal care.',
    url: 'https://manyadentalbilaspur.in/about',
  },
  alternates: {
    canonical: 'https://manyadentalbilaspur.in/about',
  },
}

export default function Page() {
  return <AboutPage />
}
