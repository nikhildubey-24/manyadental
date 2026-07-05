'use client'
import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import dentalTreatment from '@/assets/images/dental-treatment.jpg'
import catPreventive from '@/assets/images/cat-preventive.jpg'
import catRestorative from '@/assets/images/cat-restorative.jpg'
import catAdvanced from '@/assets/images/cat-advanced.jpg'
import catCosmetic from '@/assets/images/cat-cosmetic.jpg'
import catPeriodontal from '@/assets/images/cat-periodontal.jpg'
import svcExam from '@/assets/images/svc-exam.jpg'
import svcXray from '@/assets/images/svc-xray.jpg'
import svcCleaning from '@/assets/images/svc-cleaning.jpg'
import svcFluoro from '@/assets/images/svc-fluoro.jpg'
import svcSealants from '@/assets/images/svc-sealants.jpg'
import svcFillings from '@/assets/images/svc-fillings.jpg'
import svcCrowns from '@/assets/images/svc-crowns.jpg'
import svcImplants from '@/assets/images/svc-implants.jpg'
import svcDentures from '@/assets/images/svc-dentures.jpg'
import svcRootcanal from '@/assets/images/svc-rootcanal.jpg'
import svcSurgery from '@/assets/images/svc-surgery.jpg'
import svcNightguard from '@/assets/images/svc-nightguard.jpg'
import svcWhitening from '@/assets/images/svc-whitening.jpg'
import svcVeneers from '@/assets/images/svc-veneers.jpg'
import svcBraces from '@/assets/images/svc-braces.jpg'
import svcBridges from '@/assets/images/svc-bridges.jpg'
import svcExtractions from '@/assets/images/svc-extractions.jpg'
import svcWisdom from '@/assets/images/svc-wisdom.jpg'
import svcContouring from '@/assets/images/svc-contouring.jpg'
import svcFrenectomy from '@/assets/images/svc-frenectomy.jpg'
import svcFrenuloplasty from '@/assets/images/svc-frenuloplasty.jpg'
import svcGingivectomy from '@/assets/images/svc-gingivectomy.jpg'
import svcGingivoplasty from '@/assets/images/svc-gingivoplasty.jpg'
import svcOsteoplasty from '@/assets/images/svc-osteoplasty.jpg'
import svcOstectomy from '@/assets/images/svc-ostectomy.jpg'
import svcBonegraft from '@/assets/images/svc-bonegraft.jpg'
import svcGtr from '@/assets/images/svc-gtr.jpg'
import svcBiologics from '@/assets/images/svc-biologics.jpg'
import svcSofttissuegraft from '@/assets/images/svc-softtissuegraft.jpg'
import svcCrownlengthening from '@/assets/images/svc-crownlengthening.jpg'
import svcLipreposition from '@/assets/images/svc-lipreposition.jpg'
import svcDepigmentation from '@/assets/images/svc-depigmentation.jpg'
import svcFurcation from '@/assets/images/svc-furcation.jpg'
import svcHemisection from '@/assets/images/svc-hemisection.jpg'
import svcRootresection from '@/assets/images/svc-rootresection.jpg'

const categoryImages = {
  'Preventive Care': catPreventive,
  'Restorative Dentistry': catRestorative,
  'Advanced Care': catAdvanced,
  'Cosmetic Dentistry': catCosmetic,
  'Periodontal & Specialized Care': catPeriodontal,
}

const serviceImages = {
  'Dental Exams': svcExam,
  'X-Rays': svcXray,
  'Routine Cleanings': svcCleaning,
  'Fluoride Treatments': svcFluoro,
  'Dental Sealants': svcSealants,
  'Fillings': svcFillings,
  'Crowns': svcCrowns,
  'Bridges': svcBridges,
  'Implants': svcImplants,
  'Dentures': svcDentures,
  'Root Canals': svcRootcanal,
  'Extractions': svcExtractions,
  'Wisdom Teeth Removal': svcWisdom,
  'Nightguards': svcNightguard,
  'Teeth Whitening': svcWhitening,
  'Veneers': svcVeneers,
  'Braces': svcBraces,
  'Scaling & Root Planing': svcCleaning,
  'Gingival Flap Surgery': svcSurgery,
  'Gum Contouring': svcContouring,
  'Frenectomy': svcFrenectomy,
  'Frenuloplasty': svcFrenuloplasty,
  'Gingivectomy': svcGingivectomy,
  'Gingivoplasty': svcGingivoplasty,
  'Osteoplasty': svcOsteoplasty,
  'Ostectomy': svcOstectomy,
  'Bone Grafting': svcBonegraft,
  'Guided Tissue Regeneration (GTR)': svcGtr,
  'Biologics Application': svcBiologics,
  'Soft Tissue Grafting': svcSofttissuegraft,
  'Esthetic Crown Lengthening': svcCrownlengthening,
  'Lip Repositioning': svcLipreposition,
  'Gums Depigmentation': svcDepigmentation,
  'Management of Furcation Involvements': svcFurcation,
  'Hemisection': svcHemisection,
  'Root Resection (Amputation)': svcRootresection,
}

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
  visible: { transition: { staggerChildren: 0.05 } },
}

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'Preventive Care', label: 'Preventive Care' },
  { id: 'Restorative Dentistry', label: 'Restorative Dentistry' },
  { id: 'Advanced Care', label: 'Advanced Care' },
  { id: 'Cosmetic Dentistry', label: 'Cosmetic Dentistry' },
  { id: 'Periodontal & Specialized Care', label: 'Periodontal Care' },
]

const services = [
  {
    category: 'Preventive Care',
    title: 'Dental Exams',
    desc: 'Checking teeth, gums, and mouth for early signs of disease.',
    features: ['Thorough oral examination', 'Oral cancer screening', 'Gum disease assessment', 'Early problem detection'],
  },
  {
    category: 'Preventive Care',
    title: 'X-Rays',
    desc: 'Capturing internal images to detect hidden cavities and bone loss.',
    features: ['Low radiation digital X-rays', 'Hidden cavity detection', 'Bone loss evaluation', 'Comprehensive diagnosis'],
  },
  {
    category: 'Preventive Care',
    title: 'Routine Cleanings',
    desc: 'Removing plaque, tartar, and surface stains from teeth.',
    features: ['Plaque and tartar removal', 'Surface stain polishing', 'Fresh breath treatment', 'Custom oral hygiene tips'],
  },
  {
    category: 'Preventive Care',
    title: 'Fluoride Treatments',
    desc: 'Applying a protective mineral to strengthen enamel and prevent decay.',
    features: ['Enamel strengthening', 'Cavity prevention', 'Quick painless application', 'Ideal for all ages'],
  },
  {
    category: 'Preventive Care',
    title: 'Dental Sealants',
    desc: 'Coating chewing surfaces of molars to block out food and bacteria.',
    features: ['BPA-free sealants', 'Long-lasting protection', 'Painless application', 'Ideal for children and adults'],
  },
  {
    category: 'Restorative Dentistry',
    title: 'Fillings',
    desc: 'Repairing cavities using tooth-colored composite resin or silver amalgam.',
    features: ['Tooth-colored composite', 'Durable silver amalgam', 'Natural appearance', 'Same-day service'],
  },
  {
    category: 'Restorative Dentistry',
    title: 'Crowns',
    desc: 'Placing custom caps over damaged teeth to restore shape and strength.',
    features: ['Porcelain or ceramic', 'Natural tooth matching', 'Full coverage protection', 'Long-lasting durability'],
  },
  {
    category: 'Restorative Dentistry',
    title: 'Bridges',
    desc: 'Anchoring artificial teeth to adjacent natural teeth to fill gaps.',
    features: ['Fixed permanent solution', 'Natural-looking design', 'Prevents tooth shifting', 'Restores chewing function'],
  },
  {
    category: 'Restorative Dentistry',
    title: 'Implants',
    desc: 'Inserting surgical titanium posts into the jawbone to replace missing roots.',
    features: ['Titanium biocompatible posts', 'Permanent tooth replacement', 'Preserves jawbone density', 'Natural look and feel'],
  },
  {
    category: 'Restorative Dentistry',
    title: 'Dentures',
    desc: 'Creating removable prosthetic appliances to replace multiple missing teeth.',
    features: ['Full and partial options', 'Custom-fitted comfort', 'Natural appearance', 'Improved speech and chewing'],
  },
  {
    category: 'Advanced Care',
    title: 'Root Canals',
    desc: 'Removing infected pulp from inside a tooth to save it from extraction.',
    features: ['Pain-free procedure', 'Digital imaging guidance', 'Rotary endodontic tools', 'Same-day pain relief'],
  },
  {
    category: 'Advanced Care',
    title: 'Extractions',
    desc: 'Removing severely damaged, decayed, or problematic teeth from the socket.',
    features: ['Gentle extraction techniques', 'Local anesthesia', 'Sedation options available', 'Post-operative care'],
  },
  {
    category: 'Advanced Care',
    title: 'Wisdom Teeth Removal',
    desc: 'Extracting problematic third molars to prevent crowding and pain.',
    features: ['Impacted tooth management', 'IV sedation available', 'Prevents crowding', 'Reduces infection risk'],
  },
  {
    category: 'Advanced Care',
    title: 'Nightguards',
    desc: 'Crafting custom oral appliances to prevent teeth grinding and TMJ pain.',
    features: ['Custom-fitted design', 'Prevents tooth wear', 'Reduces jaw pain', 'Improves sleep quality'],
  },
  {
    category: 'Cosmetic Dentistry',
    title: 'Teeth Whitening',
    desc: 'Bleaching teeth using professional gels to lift deep stains.',
    features: ['Professional-grade gel', 'Up to 8 shades whiter', 'Safe and controlled', 'Long-lasting results'],
  },
  {
    category: 'Cosmetic Dentistry',
    title: 'Veneers',
    desc: 'Bonding thin porcelain shells to front teeth for a flawless smile.',
    features: ['Porcelain craftsmanship', 'Stain-resistant surface', 'Natural translucency', 'Complete smile makeover'],
  },
  {
    category: 'Cosmetic Dentistry',
    title: 'Braces',
    desc: 'Aligning crooked teeth and correcting bite issues using custom appliances.',
    features: ['Traditional and clear options', 'Custom treatment plan', 'All ages welcome', 'Improved bite alignment'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Scaling & Root Planing',
    desc: 'Deep cleaning below the gumline to treat gum disease.',
    features: ['Deep subgingival cleaning', 'Local anesthesia', 'Gum health restoration', 'Prevents tooth loss'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Gingival Flap Surgery',
    desc: 'Lifting gum tissue to clear deep tartar and repair bone damage.',
    features: ['Advanced gum treatment', 'Bone regeneration', 'Reduces pocket depth', 'Preserves natural teeth'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Gum Contouring',
    desc: 'Reshaping uneven or excessive gum tissue to improve smile aesthetics.',
    features: ['Laser-assisted technique', 'Minimal discomfort', 'Natural gum symmetry', 'Instant smile improvement'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Frenectomy',
    desc: 'Removing a high frenum to prevent gum recession and tooth spacing.',
    features: ['Quick in-office procedure', 'Laser or surgical option', 'Prevents gum recession', 'Minimal recovery time'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Frenuloplasty',
    desc: 'Treating tongue-tie to restore normal tongue movement and speech patterns.',
    features: ['Tongue-tie release', 'Improved speech and feeding', 'Laser-assisted options', 'Quick recovery'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Gingivectomy',
    desc: 'Surgical removal of the unsupported pocket wall to eliminate deep gingival or periodontal pockets.',
    features: ['Eliminates deep pockets', 'Periodontal health restoration', 'Prevents disease progression', 'Minimally invasive'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Gingivoplasty',
    desc: 'Reshaping and recontouring of the gingiva to create a more physiological form and aesthetic architecture.',
    features: ['Physiological contouring', 'Aesthetic improvement', 'Gum tissue reshaping', 'Enhanced oral hygiene'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Osteoplasty',
    desc: 'Reshaping and recontouring non-supporting bone to establish natural, smooth contour profiles without extracting tooth-supporting bone.',
    features: ['Non-supporting bone reshaping', 'Smooth contour profiles', 'Preserves tooth-supporting bone', 'Natural architecture'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Ostectomy',
    desc: 'Removal of actual tooth-supporting bone to entirely eradicate infrabony defects and interdental craters.',
    features: ['Eradicates infrabony defects', 'Removes interdental craters', 'Tooth-supporting bone removal', 'Periodontal defect resolution'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Bone Grafting',
    desc: 'Using autograft, allografts, xenografts, or synthetic materials to fill vertical osseous defects.',
    features: ['Autograft and allograft options', 'Xenograft and synthetic materials', 'Fills vertical defects', 'Restores bone structure'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Guided Tissue Regeneration (GTR)',
    desc: 'Applying barrier membranes over osseous defects to prevent epithelial migration, giving slow-growing bone cells time to regenerate.',
    features: ['Barrier membrane application', 'Prevents epithelial migration', 'Bone cell regeneration', 'Periodontal tissue repair'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Biologics Application',
    desc: 'Deploying growth factors like enamel matrix derivatives (EMD/Emdogain) or platelet-rich fibrin (PRF) to accelerate cell growth.',
    features: ['Enamel matrix derivatives', 'Platelet-rich fibrin (PRF)', 'Growth factor deployment', 'Accelerated healing'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Soft Tissue Grafting',
    desc: 'Techniques like Free Gingival Grafts (FGG) or Subepithelial Connective Tissue Grafts (SCTG) used to cover exposed roots or widen attached keratinized tissue.',
    features: ['Free gingival grafts (FGG)', 'Connective tissue grafts (SCTG)', 'Root coverage', 'Keratinized tissue widening'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Esthetic Crown Lengthening',
    desc: 'Removing excess bone and soft tissue to reveal more tooth structure, resolving gummy smiles or managing subgingival fractures.',
    features: ['Gummy smile correction', 'Subgingival fracture management', 'Tooth structure exposure', 'Enhanced smile aesthetics'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Lip Repositioning',
    desc: 'This minimally invasive cosmetic procedure corrects excessive gingival display (EGD).',
    features: ['Minimally invasive procedure', 'Excessive gingival display correction', 'Improved smile harmony', 'Quick recovery'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Gums Depigmentation',
    desc: 'This procedure treats hyperpigmentation in the gums caused by excessive melanin deposition, smoking, or genetic traits.',
    features: ['Melanin reduction', 'Smoking-related stain removal', 'Genetic pigmentation treatment', 'Uniform gum appearance'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Management of Furcation Involvements',
    desc: 'Specialized treatment for furcation defects where bone loss has occurred between the roots of multi-rooted teeth.',
    features: ['Furcation defect assessment', 'Root surface debridement', 'Regenerative techniques', 'Tooth preservation'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Hemisection',
    desc: 'Sectioning a lower two-rooted molar into two halves, removing the diseased root, and keeping the healthy root.',
    features: ['Two-rooted molar sectioning', 'Diseased root removal', 'Healthy root preservation', 'Tooth retention'],
  },
  {
    category: 'Periodontal & Specialized Care',
    title: 'Root Resection (Amputation)',
    desc: 'Entirely severing and removing one or more diseased roots of an upper multi-rooted molar without splitting the crown.',
    features: ['Multi-rooted molar treatment', 'Diseased root amputation', 'Crown preservation', 'Strategic tooth retention'],
  },
]

function ServicesContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const cat = searchParams.get('category')
    setActiveCategory(cat || 'all')
  }, [searchParams])

  const filtered = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory)

  return (
    <div className="pb-16 md:pb-24">
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-16 mb-6 sm:mb-8">
        <div className="absolute inset-0">
          <img
            src={dentalTreatment.src}
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
                Our Expertise
              </Badge>
            </motion.div>
            <motion.h1
              variants={revealMask}
              transition={{ delay: 0.15 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Comprehensive{' '}
              <span className="text-primary">Dental Services</span>
            </motion.h1>
            <motion.p
              variants={fadeSlide}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2 sm:mt-3 max-w-xl mx-auto"
            >
              From routine preventive care to advanced surgical procedures, Dr. Swati Raj offers complete dental solutions under one roof.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={fadeSlide}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {filtered.map((s) => (
              <motion.div key={s.title} variants={cardReveal} layout>
                <Card className="h-full group hover:shadow-md transition-all duration-300 border-border/60 hover:border-primary/30 overflow-hidden">
                  <div className="relative h-36 sm:h-40 overflow-hidden bg-secondary/50">
                    <img
                      src={(serviceImages[s.title] || categoryImages[s.category]).src}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4">
                      <Badge variant="outline" className="text-[10px] sm:text-xs border-primary/30 text-primary bg-background/80 backdrop-blur-sm">
                        {s.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{s.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">{s.desc}</p>
                    <ul className="space-y-1 sm:space-y-1.5">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                          <CheckCircle2 className="size-3 sm:size-3.5 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4">Not sure which treatment is right for you?</p>
          <Button onClick={() => router.push('/contact')} className="px-6 sm:px-8 text-sm sm:text-base">
            Free Consultation <ArrowRight className="ml-2 size-4 sm:size-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <Suspense fallback={null}>
      <ServicesContent />
    </Suspense>
  )
}
