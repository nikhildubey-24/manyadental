'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Award, GraduationCap, CalendarClock, Star, Phone, Quote } from 'lucide-react'
import doctorImg from '@/assets/images/swati.jpeg'
import clinicImg from '@/assets/images/dental_chair.jpeg'

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

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center mb-16 sm:mb-20 md:mb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.div variants={revealMask}>
              <Badge variant="outline" className="mb-3 sm:mb-4 border-primary/30 text-primary bg-primary/10 text-xs sm:text-sm md:text-base">
                About Us
              </Badge>
            </motion.div>
            <motion.h1
              variants={revealMask}
              transition={{ delay: 0.15 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Where Technology{' '}
              <span className="text-primary">Meets Compassion</span>
            </motion.h1>
            <motion.p
              variants={fadeSlide}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              At Manya Dental, Dr. Swati Raj blends clinical expertise with the latest technology 
              to deliver exceptional care in a warm, welcoming environment.
            </motion.p>
            <motion.p
              variants={fadeSlide}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Our clinic at Manya Imaging and Diagnostic Point features state-of-the-art equipment 
              and a team dedicated to your comfort and satisfaction from the moment you walk in.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardReveal}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <img
              src={clinicImg.src}
              alt="Manya Dental Clinic"
              className="relative rounded-2xl shadow-lg object-cover w-full h-[300px] md:h-[400px]"
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-border/60"
        >
          <div className="absolute top-0 right-0 -z-0 size-[300px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 -z-0 size-[250px] bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          <div className="relative z-10 p-6 sm:p-8 md:p-12">
            <motion.div variants={fadeSlide} className="text-center mb-8 sm:mb-10">
              <Badge variant="outline" className="mb-3 sm:mb-4 border-primary/30 text-primary bg-primary/10 text-xs sm:text-sm md:text-base">
                Our Team
              </Badge>
              <motion.h2
                variants={revealMask}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
              >
                <span className="text-primary">Meet</span> the Doctor
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
              <motion.div
                variants={cardReveal}
                className="md:col-span-2 relative"
              >
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={doctorImg.src}
                    alt="Dr. Swati Raj"
                    className="w-full h-[350px] sm:h-[400px] md:h-[450px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 sm:p-6">
                    <h3 className="text-white font-bold text-lg sm:text-xl">Dr. Swati Raj</h3>
                    <p className="text-white/80 text-sm">MDS (Periodontist) | Oral Implant Specialist</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={stagger}
                className="md:col-span-3 space-y-5"
              >
                <motion.div variants={fadeSlide}>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="size-4 sm:size-5 text-primary" />
                    <h4 className="font-semibold text-base sm:text-lg">Qualifications & Expertise</h4>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Dr. Swati Raj is an MDS (Periodontist) specializing in gums, pyorrhoea, 
                    cosmetic surgery, and oral implants. She is committed to providing comprehensive 
                    oral care with a gentle touch and personalized treatment approach tailored to 
                    each patient's unique needs.
                  </p>
                </motion.div>

                <motion.div variants={fadeSlide} className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: GraduationCap, label: 'Qualification', value: 'MDS (Periodontist)' },
                    { icon: CalendarClock, label: 'Experience', value: '10+ Years in Practice' },
                    { icon: Star, label: 'Patients Treated', value: '5000+ Happy Smiles' },
                    { icon: Award, label: 'Specialization', value: 'Gums, Pyorrhoea, Cosmetic Surgery & Oral Implants' },
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-center gap-2 sm:gap-3 rounded-xl bg-secondary/50 p-3 sm:p-4">
                        <div className="size-8 sm:size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="size-3.5 sm:size-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider truncate">{item.label}</p>
                          <p className="text-xs sm:text-sm font-semibold truncate">{item.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </motion.div>

                <motion.div
                  variants={cardReveal}
                  className="relative rounded-xl bg-primary/5 border border-primary/10 p-4 sm:p-5"
                >
                  <Quote className="size-5 sm:size-6 text-primary/30 absolute top-3 sm:top-4 left-3 sm:left-4" />
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-7 sm:pl-8 italic">
                    My goal is to make every patient feel comfortable and confident. 
                    I believe in treating each person with the care and respect they deserve, 
                    delivering the highest quality dental treatment in a warm and welcoming environment.
                  </p>
                  <p className="text-xs sm:text-sm font-medium mt-2 pl-7 sm:pl-8">— Dr. Swati Raj</p>
                </motion.div>

                <motion.div variants={fadeSlide} className="flex flex-wrap gap-3">
                  <Link href="/contact">
                    <Button className="text-xs sm:text-sm">
                      Book Appointment
                    </Button>
                  </Link>
                  <a href="tel:9131053337">
                    <Button variant="outline" className="text-xs sm:text-sm">
                      <Phone className="size-3.5 mr-1.5" /> Call 9131053337
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
