'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, Sun, Moon, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'

const links = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

const serviceCategories = [
  { path: '/services', label: 'All Services' },
  { path: '/services?category=Preventive+Care', label: 'Preventive Care' },
  { path: '/services?category=Restorative+Dentistry', label: 'Restorative Dentistry' },
  { path: '/services?category=Advanced+Care', label: 'Advanced Care' },
  { path: '/services?category=Cosmetic+Dentistry', label: 'Cosmetic Dentistry' },
  { path: '/services?category=Periodontal+%26+Specialized+Care', label: 'Periodontal Care' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  const isActive = (path) => {
    if (path === '/') return pathname === path
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-background/90 backdrop-blur-md border-b border-border shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5">
            <img src="/logo.png" alt="Manya Dental Clinic" className="h-48 sm:h-54 md:h-60 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              if (link.path === '/services') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.path}
                      className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                        isActive(link.path)
                          ? 'text-primary bg-primary/5'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`size-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-border bg-popover shadow-lg p-1.5">
                        {serviceCategories.map((cat) => (
                          <Link
                            key={cat.label}
                            href={cat.path}
                            className={`block px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                              pathname === '/services'
                                ? 'bg-primary/10 text-primary'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                          >
                            {cat.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/5'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="ml-2 flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
                {mounted && theme === 'dark' ? <Sun className="size-3.5 sm:size-4" /> : <Moon className="size-3.5 sm:size-4" />}
              </Button>
              <Button onClick={() => router.push('/contact')} className="px-3 sm:px-5 text-xs sm:text-sm">
                Book Now
              </Button>
            </div>
          </nav>

          <div className="flex md:hidden items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
              {mounted && theme === 'dark' ? <Sun className="size-3.5 sm:size-4" /> : <Moon className="size-3.5 sm:size-4" />}
            </Button>
            <Sheet>
              <SheetTrigger
                render={
                  <button className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-8 sm:size-9")}>
                    <Menu className="size-4 sm:size-5" />
                  </button>
                }
              />
              <SheetContent side="right" className="w-56 sm:w-64 p-4 sm:p-6">
                <nav className="flex flex-col gap-1 sm:gap-2 mt-6 sm:mt-8">
                  {links.map((link) => {
                    if (link.path === '/services') {
                      return (
                        <div key={link.path}>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className={`flex items-center justify-between w-full px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                              isActive(link.path)
                                ? 'bg-primary/10 text-primary'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                          >
                            {link.label}
                            <ChevronDown className={`size-3 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {mobileServicesOpen && (
                            <div className="ml-3 mt-1 space-y-0.5">
                              {serviceCategories.map((cat) => (
                                <SheetClose
                                  key={cat.label}
                                  nativeButton={false}
                                  render={
                                    <Link
                                      href={cat.path}
                                      className={`block px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-colors ${
                                        pathname === '/services'
                                          ? 'bg-primary/10 text-primary'
                                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                      }`}
                                    />
                                  }
                                >
                                  {cat.label}
                                </SheetClose>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    }
                    return (
                      <SheetClose
                        key={link.path}
                        nativeButton={false}
                        render={
                          <Link
                            href={link.path}
                            className={`px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                              isActive(link.path)
                                ? 'bg-primary/10 text-primary'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                          />
                        }
                      >
                        {link.label}
                      </SheetClose>
                    )
                  })}
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
                    <Button onClick={() => router.push('/contact')} className="w-full text-xs sm:text-sm">
                      Book Appointment
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
