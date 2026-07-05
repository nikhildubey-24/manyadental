export async function GET() {
  const services = [
    {
      id: 1, category: 'Preventive Care', title: 'Dental Exams',
      description: 'Checking teeth, gums, and mouth for early signs of disease.',
      icon: 'search', features: ['Thorough oral examination', 'Oral cancer screening', 'Gum disease assessment', 'Early problem detection'],
    },
    {
      id: 2, category: 'Preventive Care', title: 'X-Rays',
      description: 'Capturing internal images to detect hidden cavities and bone loss.',
      icon: 'scan', features: ['Low radiation digital X-rays', 'Hidden cavity detection', 'Bone loss evaluation', 'Comprehensive diagnosis'],
    },
    {
      id: 3, category: 'Preventive Care', title: 'Routine Cleanings',
      description: 'Removing plaque, tartar, and surface stains from teeth.',
      icon: 'sparkles', features: ['Plaque and tartar removal', 'Surface stain polishing', 'Fresh breath treatment', 'Custom oral hygiene tips'],
    },
    {
      id: 4, category: 'Preventive Care', title: 'Fluoride Treatments',
      description: 'Applying a protective mineral to strengthen enamel and prevent decay.',
      icon: 'droplets', features: ['Enamel strengthening', 'Cavity prevention', 'Quick painless application', 'Ideal for all ages'],
    },
    {
      id: 5, category: 'Preventive Care', title: 'Dental Sealants',
      description: 'Coating chewing surfaces of molars to block out food and bacteria.',
      icon: 'shield', features: ['BPA-free sealants', 'Long-lasting protection', 'Painless application', 'Ideal for children and adults'],
    },
    {
      id: 6, category: 'Restorative Dentistry', title: 'Fillings',
      description: 'Repairing cavities using tooth-colored composite resin or silver amalgam.',
      icon: 'layers', features: ['Tooth-colored composite', 'Durable silver amalgam', 'Natural appearance', 'Same-day service'],
    },
    {
      id: 7, category: 'Restorative Dentistry', title: 'Crowns',
      description: 'Placing custom caps over damaged teeth to restore shape and strength.',
      icon: 'crown', features: ['Porcelain or ceramic', 'Natural tooth matching', 'Full coverage protection', 'Long-lasting durability'],
    },
    {
      id: 8, category: 'Restorative Dentistry', title: 'Bridges',
      description: 'Anchoring artificial teeth to adjacent natural teeth to fill gaps.',
      icon: 'link', features: ['Fixed permanent solution', 'Natural-looking design', 'Prevents tooth shifting', 'Restores chewing function'],
    },
    {
      id: 9, category: 'Restorative Dentistry', title: 'Implants',
      description: 'Inserting surgical titanium posts into the jawbone to replace missing roots.',
      icon: 'anchor', features: ['Titanium biocompatible posts', 'Permanent tooth replacement', 'Preserves jawbone density', 'Natural look and feel'],
    },
    {
      id: 10, category: 'Restorative Dentistry', title: 'Dentures',
      description: 'Creating removable prosthetic appliances to replace multiple missing teeth.',
      icon: 'smile', features: ['Full and partial options', 'Custom-fitted comfort', 'Natural appearance', 'Improved speech and chewing'],
    },
    {
      id: 11, category: 'Advanced Care', title: 'Root Canals',
      description: 'Removing infected pulp from inside a tooth to save it from extraction.',
      icon: 'activity', features: ['Pain-free procedure', 'Digital imaging guidance', 'Rotary endodontic tools', 'Same-day pain relief'],
    },
    {
      id: 12, category: 'Advanced Care', title: 'Extractions',
      description: 'Removing severely damaged, decayed, or problematic teeth from the socket.',
      icon: 'minus-circle', features: ['Gentle extraction techniques', 'Local anesthesia', 'Sedation options available', 'Post-operative care guidance'],
    },
    {
      id: 13, category: 'Advanced Care', title: 'Wisdom Teeth Removal',
      description: 'Extracting problematic third molars to prevent crowding and pain.',
      icon: 'triangle-alert', features: ['Impacted tooth management', 'IV sedation available', 'Prevents crowding', 'Reduces infection risk'],
    },
    {
      id: 14, category: 'Advanced Care', title: 'Nightguards',
      description: 'Crafting custom oral appliances to prevent teeth grinding and TMJ pain.',
      icon: 'moon', features: ['Custom-fitted design', 'Prevents tooth wear', 'Reduces jaw pain', 'Improves sleep quality'],
    },
    {
      id: 15, category: 'Cosmetic Dentistry', title: 'Teeth Whitening',
      description: 'Bleaching teeth using professional gels to lift deep stains.',
      icon: 'sparkles', features: ['Professional-grade gel', 'Up to 8 shades whiter', 'Safe and controlled', 'Long-lasting results'],
    },
    {
      id: 16, category: 'Cosmetic Dentistry', title: 'Veneers',
      description: 'Bonding thin porcelain shells to front teeth for a flawless smile.',
      icon: 'heart', features: ['Porcelain craftsmanship', 'Stain-resistant surface', 'Natural translucency', 'Complete smile makeover'],
    },
    {
      id: 17, category: 'Cosmetic Dentistry', title: 'Braces',
      description: 'Aligning crooked teeth and correcting bite issues using custom appliances.',
      icon: 'layers', features: ['Traditional and clear options', 'Custom treatment plan', 'All ages welcome', 'Improved bite alignment'],
    },
    {
      id: 18, category: 'Periodontal & Specialized Care', title: 'Scaling & Root Planing',
      description: 'Deep cleaning below the gumline to treat gum disease.',
      icon: 'scan', features: ['Deep subgingival cleaning', 'Local anesthesia', 'Gum health restoration', 'Prevents tooth loss'],
    },
    {
      id: 19, category: 'Periodontal & Specialized Care', title: 'Gingival Flap Surgery',
      description: 'Lifting gum tissue to clear deep tartar and repair bone damage.',
      icon: 'scissors', features: ['Advanced gum treatment', 'Bone regeneration', 'Reduces pocket depth', 'Preserves natural teeth'],
    },
    {
      id: 20, category: 'Periodontal & Specialized Care', title: 'Gum Contouring',
      description: 'Reshaping uneven or excessive gum tissue to improve smile aesthetics.',
      icon: 'smile', features: ['Laser-assisted technique', 'Minimal discomfort', 'Natural gum symmetry', 'Instant smile improvement'],
    },
    {
      id: 21, category: 'Periodontal & Specialized Care', title: 'Frenectomy',
      description: 'Removing a high frenum to prevent gum recession and tooth spacing.',
      icon: 'scissors', features: ['Quick in-office procedure', 'Laser or surgical option', 'Prevents gum recession', 'Minimal recovery time'],
    },
    {
      id: 22, category: 'Periodontal & Specialized Care', title: 'Frenuloplasty',
      description: 'Treating tongue-tie to restore normal tongue movement and speech patterns.',
      icon: 'activity', features: ['Tongue-tie release', 'Improved speech and feeding', 'Laser-assisted options', 'Quick recovery'],
    },
    {
      id: 23, category: 'Periodontal & Specialized Care', title: 'Gingivectomy',
      description: 'Surgical removal of the unsupported pocket wall to eliminate deep gingival or periodontal pockets.',
      icon: 'scissors', features: ['Eliminates deep pockets', 'Periodontal health restoration', 'Prevents disease progression', 'Minimally invasive'],
    },
    {
      id: 24, category: 'Periodontal & Specialized Care', title: 'Gingivoplasty',
      description: 'Reshaping and recontouring of the gingiva to create a more physiological form and aesthetic architecture.',
      icon: 'smile', features: ['Physiological contouring', 'Aesthetic improvement', 'Gum tissue reshaping', 'Enhanced oral hygiene'],
    },
    {
      id: 25, category: 'Periodontal & Specialized Care', title: 'Osteoplasty',
      description: 'Reshaping and recontouring non-supporting bone to establish natural, smooth contour profiles without extracting tooth-supporting bone.',
      icon: 'activity', features: ['Non-supporting bone reshaping', 'Smooth contour profiles', 'Preserves tooth-supporting bone', 'Natural architecture'],
    },
    {
      id: 26, category: 'Periodontal & Specialized Care', title: 'Ostectomy',
      description: 'Removal of actual tooth-supporting bone to entirely eradicate infrabony defects and interdental craters.',
      icon: 'triangle-alert', features: ['Eradicates infrabony defects', 'Removes interdental craters', 'Tooth-supporting bone removal', 'Periodontal defect resolution'],
    },
    {
      id: 27, category: 'Periodontal & Specialized Care', title: 'Bone Grafting',
      description: 'Using autograft, allografts, xenografts, or synthetic materials to fill vertical osseous defects.',
      icon: 'layers', features: ['Autograft and allograft options', 'Xenograft and synthetic materials', 'Fills vertical defects', 'Restores bone structure'],
    },
    {
      id: 28, category: 'Periodontal & Specialized Care', title: 'Guided Tissue Regeneration (GTR)',
      description: 'Applying barrier membranes over osseous defects to prevent epithelial migration, giving slow-growing bone cells time to regenerate.',
      icon: 'shield', features: ['Barrier membrane application', 'Prevents epithelial migration', 'Bone cell regeneration', 'Periodontal tissue repair'],
    },
    {
      id: 29, category: 'Periodontal & Specialized Care', title: 'Biologics Application',
      description: 'Deploying growth factors like enamel matrix derivatives (EMD/Emdogain) or platelet-rich fibrin (PRF) to accelerate cell growth.',
      icon: 'sparkles', features: ['Enamel matrix derivatives', 'Platelet-rich fibrin (PRF)', 'Growth factor deployment', 'Accelerated healing'],
    },
    {
      id: 30, category: 'Periodontal & Specialized Care', title: 'Soft Tissue Grafting',
      description: 'Techniques like Free Gingival Grafts (FGG) or Subepithelial Connective Tissue Grafts (SCTG) used to cover exposed roots or widen attached keratinized tissue.',
      icon: 'heart', features: ['Free gingival grafts (FGG)', 'Connective tissue grafts (SCTG)', 'Root coverage', 'Keratinized tissue widening'],
    },
    {
      id: 31, category: 'Periodontal & Specialized Care', title: 'Esthetic Crown Lengthening',
      description: 'Removing excess bone and soft tissue to reveal more tooth structure, resolving gummy smiles or managing subgingival fractures.',
      icon: 'smile', features: ['Gummy smile correction', 'Subgingival fracture management', 'Tooth structure exposure', 'Enhanced smile aesthetics'],
    },
    {
      id: 32, category: 'Periodontal & Specialized Care', title: 'Lip Repositioning',
      description: 'This minimally invasive cosmetic procedure corrects excessive gingival display (EGD).',
      icon: 'heart', features: ['Minimally invasive procedure', 'Excessive gingival display correction', 'Improved smile harmony', 'Quick recovery'],
    },
    {
      id: 33, category: 'Periodontal & Specialized Care', title: 'Gums Depigmentation',
      description: 'This procedure treats hyperpigmentation in the gums caused by excessive melanin deposition, smoking, or genetic traits.',
      icon: 'sparkles', features: ['Melanin reduction', 'Smoking-related stain removal', 'Genetic pigmentation treatment', 'Uniform gum appearance'],
    },
    {
      id: 34, category: 'Periodontal & Specialized Care', title: 'Management of Furcation Involvements',
      description: 'Specialized treatment for furcation defects where bone loss has occurred between the roots of multi-rooted teeth.',
      icon: 'activity', features: ['Furcation defect assessment', 'Root surface debridement', 'Regenerative techniques', 'Tooth preservation'],
    },
    {
      id: 35, category: 'Periodontal & Specialized Care', title: 'Hemisection',
      description: 'Sectioning a lower two-rooted molar into two halves, removing the diseased root, and keeping the healthy root.',
      icon: 'scissors', features: ['Two-rooted molar sectioning', 'Diseased root removal', 'Healthy root preservation', 'Tooth retention'],
    },
    {
      id: 36, category: 'Periodontal & Specialized Care', title: 'Root Resection (Amputation)',
      description: 'Entirely severing and removing one or more diseased roots of an upper multi-rooted molar without splitting the crown.',
      icon: 'scissors', features: ['Multi-rooted molar treatment', 'Diseased root amputation', 'Crown preservation', 'Strategic tooth retention'],
    },
  ]
  return Response.json(services)
}
