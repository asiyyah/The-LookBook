import { Project } from '@/types/project'
import { getCategoryImages } from './imageMap'

const projectData: Omit<Project, 'coverImage' | 'gallery'>[] = [
  {
    id: '1',
    slug: 'noir',
    title: 'Noir',
    category: 'Portrait',
    description:
      'A study in contrast — exploring the human face through dramatic studio light and deep shadow, revealing character in every frame.',
    year: '2025',
    featured: true,
    concept:
      'Noir began as an exploration of light and shadow on the human form. Each portrait strips away distraction, leaving only the subject and the sculptural quality of controlled light. The series references the chiaroscuro techniques of film noir and Baroque painting, translated through modern studio photography.',
    lighting:
      'Single-source key light positioned at extreme angles — 90 degrees and beyond — to create deep shadow falloff. A combination of hard fresnel and soft octabox modifiers produced varied edge transitions. Fill was intentionally withheld to preserve contrast, with occasional rim lighting for separation.',
    intent:
      'To capture the quiet power in stillness. These are not candid moments but deliberate compositions — each subject asked to sit in silence, allowing their natural presence to emerge. The result is a series that feels intimate, cinematic, and timeless.',
    equipment: ['Hasselblad H6D', 'Zeiss Otus 85mm f/1.4', 'Profoto D2 Strobes', 'Broncolor Fresnel Spot'],
  },
  {
    id: '2',
    slug: 'tokyo-nights',
    title: 'Tokyo Nights',
    category: 'Street',
    description:
      'Wandering the neon-lit alleyways of Shinjuku and Shibuya after midnight — a visual diary of Tokyo after dark.',
    year: '2025',
    location: 'Tokyo, Japan',
    featured: true,
    concept:
      'Tokyo after midnight exists in a different dimension — quieter, more surreal, wrapped in neon glow and steam rising from ramen stalls. This series documents those interstitial hours when the city belongs to the nocturnal. Each frame captures the tension between electric brightness and deep urban shadow.',
    lighting:
      'Available light only — neon signage, vending machines, street lamps, and the occasional taxi headlight. Shot handheld at high ISO, embracing grain as a textural element. The city\'s own lightscape became the palette, rendering alleys in magenta, cyan, and tungsten warmth.',
    intent:
      'To document not just what Tokyo looks like at night, but what it feels like. The series prioritises atmosphere over documentation — blur becomes energy, reflections become layers, shadows become presence. It is a love letter to the city that never sleeps.',
    equipment: ['Leica M10 Monochrom', 'Leica Summilux 35mm f/1.4', 'Fujifilm X100V', 'Ilford Delta 3200 (film)'],
  },
  {
    id: '3',
    slug: 'ethereal-skin',
    title: 'Ethereal Skin',
    category: 'Fashion',
    description:
      'A fashion editorial exploring texture, fabric, and form — where clothing becomes architecture and skin becomes landscape.',
    year: '2024',
    featured: true,
    concept:
      'Ethereal Skin bridges fashion photography and fine art. The series explores how fabric interacts with light and the human form — silk becoming liquid, organza becoming smoke, skin becoming topography. Each image is a study in texture and the poetry of draped materials.',
    lighting:
      'Large softboxes positioned overhead and wrapped around the subject to create wrapping, shadowless light. Diffusion materials included silk, tracing paper, and frosted acrylic. A monochromatic palette was chosen to emphasise form over colour.',
    intent:
      'To elevate fashion photography beyond product. These images are meant to be felt rather than read — the viewer should sense the weight of silk, the cold of metal jewellery, the warmth of skin. It is about the physicality of beauty.',
    equipment: ['Phase One IQ4 150MP', 'Schneider Kreuznach 110mm f/2.8', 'Broncolor Siros L', 'Profoto Softbox Rectangular'],
  },
  {
    id: '4',
    slug: 'concrete-silence',
    title: 'Concrete Silence',
    category: 'Architecture',
    description:
      'The poetry of brutalist architecture — finding grace in raw concrete, geometric repetition, and the silence of modernist forms.',
    year: '2024',
    location: 'London & Berlin',
    featured: false,
    concept:
      'Brutalism has long been misunderstood — dismissed as cold and inhuman. This series argues otherwise, finding warmth in texture, rhythm in repetition, and humanity in scale. Shot across London\'s Barbican and Berlin\'s modernist housing estates, Concrete Silence is a meditation on mid-century architectural ambition.',
    lighting:
      'Shot exclusively during the golden hour and overcast days to soften the harsh lines of concrete. Natural light becomes the active element — raking light across textured surfaces, shadows stretching through colonnades. Long exposures were used to capture the stillness of these spaces, often waiting 20+ minutes for the perfect cloud cover.',
    intent:
      'To change how we see brutalist architecture — not as dystopian relic but as aspirational monument. The series invites the viewer to slow down and appreciate the sculptural quality of buildings designed to last centuries. Silence is the subject.',
    equipment: ['Fujifilm GFX 100S', 'Fujinon GF 23mm f/4', 'Fujinon GF 110mm f/2', 'Gitzo Systematic Tripod'],
  },
  {
    id: '5',
    slug: 'golden-hour',
    title: 'Golden Hour',
    category: 'Portrait',
    description:
      'Outdoor portraits captured in the fleeting warmth of golden light — where sun becomes painter and skin becomes canvas.',
    year: '2024',
    featured: false,
    concept:
      'Golden hour is photography\'s most coveted light — a brief window when the sun transforms everything it touches. This series is an ongoing study of that light on the human face. Shot entirely in natural light during the last hour before sunset, each portrait is a collaboration between photographer, subject, and sun.',
    lighting:
      'Pure natural light, unmodified and unobstructed. Backlighting produced hair rim and lens flare; sidelight carved cheekbone and jaw; direct frontal light was avoided. Reflectors were used occasionally to bounce warmth into shadow, but never artificial fill.',
    intent:
      'To capture the unguarded moment — the softness that appears when a subject is bathed in beautiful light. These portraits are not about the photographer\'s skill but about being present at the right time and letting the light do its work.',
    equipment: ['Canon EOS R5', 'Canon RF 50mm f/1.2L', 'Canon RF 85mm f/1.2L', '5-in-1 Reflector'],
  },
  {
    id: '6',
    slug: 'mono-life',
    title: 'Mono Life',
    category: 'Documentary',
    description:
      'Everyday life rendered in black and white — finding dignity, humour, and grace in the ordinary moments of urban existence.',
    year: '2023',
    location: 'Various cities',
    featured: false,
    concept:
      'Mono Life is an ongoing documentary project spanning five cities and three years. The thread connecting every frame is the decision to see the world in monochrome — stripping colour to reveal structure, emotion, and the geometry of everyday life. From a fishmonger in Lisbon to a child playing in Mumbai monsoon, these images seek the universal in the specific.',
    lighting:
      'Available light in all conditions — harsh midday sun, overcast gloom, tungsten interiors, and neon night. High-contrast film stock pushed to 1600 ISO. The lack of colour forces attention to tonal range, texture, and the micro-contrasts that define good black and white photography.',
    intent:
      'To document life as it is — unposed, unpolished, unrepeatable. These images are not meant to be beautiful in the traditional sense but true. The series believes that black and white removes the distraction of colour and leaves only content, emotion, and humanity.',
    equipment: ['Leica M6', 'Leica Summicron 35mm f/2', 'Ilford HP5 Plus 400', 'Kodak Tri-X 400'],
  },
  {
    id: '7',
    slug: 'liquid-glass',
    title: 'Liquid Glass',
    category: 'Still Life',
    description:
      'The transparency and refraction of glass explored through controlled studio light — finding infinity in a single drop.',
    year: '2023',
    featured: false,
    concept:
      'Liquid Glass is a technical and artistic exploration of one of photography\'s most challenging subjects: transparency. Glass bends light, reflects its environment, and reveals every flaw in technique. This series embraces that challenge, creating compositions that feel suspended in time — drops frozen mid-fall, bubbles arrested in carbonated liquid, and crystal forms rendered against pure black.',
    lighting:
      'Backlighting through diffusion panels to create the characteristic glow of glass. Strip lights positioned at 45 degrees to catch rim highlights. A macro approach with focus stacking for sharpness at the subject plane while throwing backgrounds into complete black. Coloured gels introduced for selective refraction effects.',
    intent:
      'To transform the ordinary into the extraordinary. A wine glass, a perfume bottle, a droplet of water — these are not remarkable objects, but under controlled light and precise technique they become monumental. The series asks the viewer to look closer at the world around them.',
    equipment: ['Sony A7R IV', 'Sony FE 90mm f/2.8 Macro', 'Laowa 25mm f/2.8 2.5-5x Macro', 'Profoto D2 with gels'],
  },
  {
    id: '8',
    slug: 'dust-silk',
    title: 'Dust & Silk',
    category: 'Fashion',
    description:
      'An avant-garde fashion editorial where fabric, movement, and light collide — garments become sculpture, models become muses.',
    year: '2023',
    featured: false,
    concept:
      'Dust & Silk pushes fashion photography into experimental territory. Garments were selected for their sculptural qualities — exaggerated silhouettes, unconventional materials, architectural construction. The shoot was conceived as a collaboration between photographer, stylist, and movement director, with each frame capturing a moment of controlled chaos.',
    lighting:
      'A combination of strobe and continuous LED for mixed colour temperatures. Shutter drag was employed to introduce motion blur while freezing key details with strobe. Gels in deep red and cyan created colour contrast against neutral backgrounds. Smoke machines added atmosphere and light-catching particles.',
    intent:
      'To break the rules of commercial fashion photography. Not every garment needs to be crisply visible; not every face needs to be perfectly lit. This series prioritises mood over catalogue, feeling over clarity. It is fashion photography as art — or perhaps art using fashion as its medium.',
    equipment: ['Nikon Z9', 'Nikkor Z 50mm f/1.2 S', 'Nikkor Z 85mm f/1.2 S', 'Profoto B10X Plus', 'Aputure 600d Pro LED'],
  },
]

export const projects: Project[] = projectData.map((p) => ({
  ...p,
  ...getCategoryImages(p.category),
}))

export function getProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectCategories(): string[] {
  return ['All', ...new Set(projects.map((p) => p.category))]
}
