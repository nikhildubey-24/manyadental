import Link from 'next/link'
import { Heart, MapPin, Phone, Mail } from 'lucide-react'

const footerLinks = {
  Services: ['Preventive Care', 'Restorative Dentistry', 'Advanced Care', 'Cosmetic Dentistry', 'Periodontal Care'],
  Company: ['About Us', 'Our Team', 'Contact'],
  Support: ['Book Appointment', 'Emergency Care', 'Privacy Policy'],
}

const linkHref = {
  'Preventive Care': '/services?category=Preventive+Care',
  'Restorative Dentistry': '/services?category=Restorative+Dentistry',
  'Advanced Care': '/services?category=Advanced+Care',
  'Cosmetic Dentistry': '/services?category=Cosmetic+Dentistry',
  'Periodontal Care': '/services?category=Periodontal+%26+Specialized+Care',
  'About Us': '/about',
  'Our Team': '/about',
  'Contact': '/contact',
  'Book Appointment': '/contact',
  'Emergency Care': '/contact',
  'Privacy Policy': '/',
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="size-6 sm:size-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-[10px] sm:text-xs">
                MD
              </div>
              <span className="text-xs sm:text-sm font-semibold">Manya Dental</span>
            </Link>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs mb-3">
              Advanced dental care with cutting-edge technology and compassionate service under Dr. Swati Raj.
            </p>
            <div className="space-y-1.5">
              <p className="flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
                <MapPin className="size-3 shrink-0" />
                R.K. Plaza, Link Road, Bilaspur, C.G.
              </p>
              <p className="flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
                <Phone className="size-3 shrink-0" />
                07752 403073 | 9131053337
              </p>
              <p className="flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
                <Mail className="size-3 shrink-0" />
                info@manyadental.in
              </p>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] sm:text-xs md:text-sm font-semibold text-foreground uppercase tracking-wider mb-2 sm:mb-3">{title}</h4>
              <ul className="space-y-1 sm:space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href={linkHref[link] || '/'}
                      className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} Manya Dental. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground flex items-center gap-1">
            Made with <Heart className="size-2.5 sm:size-3 text-accent fill-accent" /> for your smile
          </p>
        </div>
      </div>
    </footer>
  )
}
