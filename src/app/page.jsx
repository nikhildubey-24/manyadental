'use client'
import { useRouter } from 'next/navigation'
import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Scan, Heart, Smile, Shield, Clock, Users } from 'lucide-react'
import heroImg from '@/assets/images/dental_chair.jpeg'
import smilePatient from '@/assets/images/smile-patient.jpg'
import dentalTreatment from '@/assets/images/dental-treatment.jpg'

const revealMask = {
  hidden: { clipPath: 'inset(0 50% 0 50%)' },
  visible: {
    clipPath: 'inset(0 0% 0 0%)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const cardReveal = {
  hidden: { opacity: 0, rotateX: 12, y: 24 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

const fadeSlide = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState('0')
  const num = parseInt(value)

  useEffect(() => {
    if (!inView) return
    if (isNaN(num)) { setCount(value); return }
    const controls = animate(0, num, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCount(Math.round(v).toString()),
    })
    return () => controls.stop()
  }, [inView, num, value])

  return <span ref={ref}>{count}{suffix}</span>
}

const features = [
  { icon: Sparkles, title: 'Digital Imaging', desc: 'Precision 3D scans for accurate diagnosis and treatment planning.' },
  { icon: Scan, title: 'Laser Technology', desc: 'Minimally invasive procedures with faster recovery and less discomfort.' },
  { icon: Heart, title: 'Comfort First', desc: 'Sedation options and a calming environment for stress-free visits.' },
  { icon: Smile, title: 'Cosmetic Excellence', desc: 'Advanced aesthetic treatments for your perfect smile makeover.' },
  { icon: Shield, title: 'Sterile Environment', desc: 'Hospital-grade sterilization protocols for your complete safety.' },
  { icon: Clock, title: 'Flexible Hours', desc: 'Early morning, evening, and weekend appointments available.' },
]

export default function HomePage() {
  const router = useRouter()
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-28 md:pt-32 pb-16 md:pb-20">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 -z-0 size-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/3"
        />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 -z-0 size-[400px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/3"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/3 -z-0 size-[300px] bg-primary/10 rounded-full blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={revealMask}
              >
                <Badge variant="outline" className="mb-4 sm:mb-6 border-primary/30 text-primary bg-primary/10 text-xs sm:text-sm md:text-base">
                  Welcome to Manya Dental
                </Badge>
              </motion.div>
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={revealMask}
                transition={{ delay: 0.15 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
              >
                Your Smile,{' '}
                <span className="text-primary">Our Passion</span>
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeSlide}
                transition={{ delay: 0.3 }}
                className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                Experience modern dentistry where cutting-edge technology meets compassionate care under Dr. Swati Raj. 
                We make every visit comfortable and every smile beautiful.
              </motion.p>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeSlide}
                transition={{ delay: 0.45 }}
                className="mt-6 sm:mt-8 flex flex-wrap gap-3"
              >
                <Button size="lg" onClick={() => router.push('/contact')} className="px-6 sm:px-8 text-sm sm:text-base">
                  Book Appointment 
                </Button>
                <Button variant="outline" size="lg" onClick={() => router.push('/services')} className="px-6 sm:px-8 text-sm sm:text-base">
                  Our Services
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardReveal}
              transition={{ delay: 0.5 }}
              className="hidden md:block"
            >
              <motion.div className="relative" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"
                />
                <img
                  src={heroImg.src}
                  alt="Manya Dental Clinic"
                  className="relative rounded-2xl shadow-lg object-cover w-full h-[400px] lg:h-[500px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-background to-primary/[0.03]" />
        <div className="absolute top-0 left-1/4 -z-0 size-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 -z-0 size-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
          >
            {[
              { value: '10', suffix: '+', label: 'Years Experience', icon: Clock },
              { value: '5', suffix: 'K+', label: 'Happy Patients', icon: Users },
              { value: '98', suffix: '%', label: 'Satisfaction', icon: Heart },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  variants={cardReveal}
                  className="group relative rounded-2xl bg-background/80 backdrop-blur-sm border border-border/60 p-6 sm:p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 size-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="size-5 text-primary-foreground" />
                  </div>
                  <div className="mt-6">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm sm:text-base text-muted-foreground mt-2 font-medium tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <motion.div variants={revealMask}>
              <Badge variant="outline" className="mb-3 sm:mb-4 border-primary/30 text-primary bg-primary/10 text-xs sm:text-sm md:text-base">
                Why Choose Us
              </Badge>
            </motion.div>
            <motion.h2
              variants={revealMask}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Modern Technology,{' '}
              <span className="text-primary">Gentle Care</span>
            </motion.h2>
            <motion.p
              variants={fadeSlide}
              className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2 sm:mt-3 max-w-lg mx-auto"
            >
              We combine expertise with innovation to deliver the best dental experience.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardReveal}
              className="order-2 md:order-1 relative"
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 blur-xl"
              />
              <img
                src={dentalTreatment.src}
                alt="Dental treatment"
                className="relative rounded-2xl shadow-lg object-cover w-full h-[300px] md:h-[400px]"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 md:order-2"
            >
              {features.slice(0, 4).map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={i}
                    variants={cardReveal}
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border/60 hover:border-primary/30">
                      <CardContent className="p-4 sm:p-5 md:p-6">
                        <div className="size-9 sm:size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                          <Icon className="size-4 sm:size-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-1.5">{f.title}</h3>
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{f.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-4 md:gap-6"
          >
            {features.slice(4).map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={i}
                  variants={cardReveal}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border/60 hover:border-primary/30">
                    <CardContent className="p-4 sm:p-5 md:p-6">
                      <div className="size-9 sm:size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-4 sm:size-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-1.5">{f.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{f.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>



      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-6 sm:p-8 md:p-12 text-center"
          >
            <div className="absolute inset-0">
              <img
                src={smilePatient.src}
                alt=""
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            <motion.div
              animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-20 -right-20 size-64 rounded-full bg-white/10 blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -10, 0], y: [0, 15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-20 -left-20 size-64 rounded-full bg-accent/20 blur-3xl"
            />
            <motion.div variants={revealMask} className="relative">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Ready for a Healthier Smile?
              </h2>
              <motion.p
                variants={fadeSlide}
                className="text-sm sm:text-base md:text-lg text-white/80 mt-2 sm:mt-3 max-w-md mx-auto"
              >
                Schedule your consultation today and take the first step toward perfect dental health.
              </motion.p>
              <motion.div
                variants={fadeSlide}
                className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3"
              >
                <Button size="lg" variant="secondary" onClick={() => router.push('/contact')} className="px-6 sm:px-8 text-sm sm:text-base">
                  Book Now
                </Button>
                <Button size="lg" variant="outline" className="px-6 sm:px-8 text-sm sm:text-base border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
                  <a href="tel:9131053337">Call Us</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
