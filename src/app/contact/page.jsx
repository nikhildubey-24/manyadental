'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import clinicImg from '@/assets/images/clinic-exterior.jpg'

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

const contactInfo = [
  { icon: MapPin, label: 'Visit Us', value: 'Manya Imaging and Diagnostic Point, R.K. Plaza, Link Road, Bilaspur, Chhattisgarh, India' },
  { icon: Phone, label: 'Call Us', value: '07752 403073 | 9131053337' },
  { icon: Mail, label: 'Email Us', value: 'info@manyadental.in' },
  { icon: Clock, label: 'Working Hours', value: 'Mon-Sat 9AM-6PM • Sun Closed' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="pb-16 md:pb-24">
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-16 mb-6 sm:mb-8">
        <div className="absolute inset-0">
          <img
            src={clinicImg.src}
            alt=""
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="absolute top-0 right-0 -z-0 size-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={revealMask}>
              <Badge variant="outline" className="mb-3 sm:mb-4 border-primary/30 text-primary bg-primary/10 text-xs sm:text-sm md:text-base">
                Get in Touch
              </Badge>
            </motion.div>
            <motion.h1
              variants={revealMask}
              transition={{ delay: 0.15 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Let's Talk{' '}
              <span className="text-primary">About Your Smile</span>
            </motion.h1>
            <motion.p
              variants={fadeSlide}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2 sm:mt-3 max-w-lg mx-auto"
            >
              Ready to transform your smile? Fill out the form and we'll get back to you within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-4 sm:space-y-6"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={i} variants={fadeSlide} className="flex items-start gap-2 sm:gap-3">
                  <div className="size-8 sm:size-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="size-3.5 sm:size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-xs sm:text-sm md:text-base font-medium">{item.value}</p>
                  </div>
                </motion.div>
              )
            })}

            <motion.div variants={cardReveal} className="rounded-xl bg-secondary/50 p-4 sm:p-5 mt-4 sm:mt-8">
              <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2">Emergency?</h4>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">
                For dental emergencies, please call us immediately at{' '}
                <span className="text-primary font-medium">9131053337</span>. 
                We prioritize urgent cases.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardReveal}
            transition={{ delay: 0.35 }}
            className="md:col-span-3"
          >
            <Card className="border-border/60 shadow-sm">
              <CardContent className="p-4 sm:p-5 md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 sm:py-12"
                  >
                    <div className="size-10 sm:size-12 md:size-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <CheckCircle2 className="size-5 sm:size-6 md:size-7 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">Thank You!</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-1">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1 sm:space-y-1.5">
                        <label className="text-xs sm:text-sm md:text-base font-medium">Name</label>
                        <Input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <label className="text-xs sm:text-sm md:text-base font-medium">Email</label>
                        <Input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="text-xs sm:text-sm md:text-base font-medium">Phone</label>
                      <Input type="tel" name="phone" placeholder="(555) 123-4567" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="text-xs sm:text-sm md:text-base font-medium">Message</label>
                      <Textarea name="message" placeholder="How can we help you?" rows={4} value={form.message} onChange={handleChange} required />
                    </div>
                    {error && (
                      <p className="text-xs sm:text-sm text-destructive text-center">Something went wrong. Please try again or call us directly.</p>
                    )}
                    <Button type="submit" disabled={sending} className="w-full text-sm sm:text-base">
                      {sending ? (
                        <>Sending...</>
                      ) : (
                        <><Send className="mr-2 size-3.5 sm:size-4" /> Send Message</>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardReveal}
          className="mt-8 sm:mt-12 rounded-xl overflow-hidden border border-border/60 shadow-sm"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.892206642503!2d82.1502122!3d22.0743408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b15fddf23b9%3A0xc52ef3fb4d5d9e23!2sManya%20Imaging%20and%20Diagnostic%20Point!5e0!3m2!1sen!2sin!4v1737470000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Manya Dental Clinic Location"
            className="rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  )
}
