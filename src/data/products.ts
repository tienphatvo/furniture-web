export interface product {
  id: string;
  title: string;
  category: 'architecture' | 'interior' | 'landscape';
  year: number;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
  tags: string[];
}

export const products: product[] = [
  {
    id: 'meldrum-villa',
    title: 'Meldrum Villa',
    category: 'architecture',
    year: 2024,
    location: 'Lam Dong, Vietnam',
    description:
      'A contemporary villa seamlessly blending natural materials with modern geometric forms. Expansive glass facades invite panoramic mountain views, while layered terraces echo the surrounding hillside topography.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    tags: ['Villa', 'Contemporary', 'Mountain'],
  },
  {
    id: 'trade-coffee',
    title: 'Trade Coffee House',
    category: 'interior',
    year: 2024,
    location: 'Ho Chi Minh City, Vietnam',
    description:
      'A warm, curated coffee-house interior inspired by artisanal craft. Raw concrete walls are softened by warm timber shelving, woven lighting fixtures and lush indoor greenery.',
    coverImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80',
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&q=80',
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&q=80',
    ],
    tags: ['Café', 'Interior', 'Commercial'],
  },
  {
    id: 'garden-villa',
    title: 'Garden Villa',
    category: 'landscape',
    year: 2023,
    location: 'Da Lat, Vietnam',
    description:
      'A landscape design centred on a productive garden. Terraced planting beds, stone pathways and a central reflecting pool create a meditative outdoor living experience.',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80',
    ],
    tags: ['Garden', 'Landscape', 'Residential'],
  },
  {
    id: 'the-shine-fitness',
    title: 'The Shine Fitness',
    category: 'interior',
    year: 2023,
    location: 'Hanoi, Vietnam',
    description:
      'High-performance gym interior designed to energise. Dark steel structures, polished concrete floors and dramatic accent lighting define a space built for intensity and focus.',
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80',
    ],
    tags: ['Gym', 'Commercial', 'Interior'],
  },
  {
    id: 'lamia-home',
    title: 'Lamia Home',
    category: 'interior',
    year: 2024,
    location: 'Bao Loc, Vietnam',
    description:
      'Minimalist residential interior that prioritises calm and clarity. Neutral linen tones, bespoke joinery and carefully curated objects create a home of quiet luxury.',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80',
      'https://raw.githubusercontent.com/truongnhac/furniture-web/master/image/Hoang-My-rcong-1.jpg',
    ],
    tags: ['Residential', 'Minimalist', 'Interior'],
  },
  {
    id: 'snowridge-retreat',
    title: 'Snowridge Retreat',
    category: 'architecture',
    year: 2023,
    location: 'Sa Pa, Vietnam',
    description:
      'A mountain retreat conceived as a series of sheltered pavilions. Heavy timber frames and stone bases anchor the building to its highland terrain while generous overhangs offer shelter from seasonal weather.',
    coverImage: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&q=80',
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1200&q=80',
    ],
    tags: ['Retreat', 'Mountain', 'Timber'],
  },
  {
    id: 'inspo-studio',
    title: 'Inspo Studio',
    category: 'interior',
    year: 2024,
    location: 'Ho Chi Minh City, Vietnam',
    description:
      'A creative studio workspace designed to spark ideas. Open plan with flexible zoning, colourful material accents, and a library wall that doubles as a spatial backdrop.',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80',
    ],
    tags: ['Studio', 'Office', 'Creative'],
  },
  {
    id: 'chateau-clermont',
    title: 'Chateau Clermont Villa',
    category: 'architecture',
    year: 2023,
    location: 'Nha Trang, Vietnam',
    description:
      'A coastal villa that draws on French colonial language reinterpreted through a contemporary lens. Arched loggias, terracotta roofing and a central courtyard pool define its character.',
    coverImage: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80',
    ],
    tags: ['Villa', 'Coastal', 'Classic'],
  },
  {
    id: 'safira-kd',
    title: 'Safira KD Residence',
    category: 'architecture',
    year: 2024,
    location: 'Can Tho, Vietnam',
    description:
      'A tropical family home designed to breathe. Cross-ventilation strategy, deep shading screens and a planted roof garden reduce heat gain while creating rich exterior character.',
    coverImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
    ],
    tags: ['Residential', 'Tropical', 'Sustainable'],
  },
  {
    id: 'def-studio',
    title: 'DEF Studio Office',
    category: 'interior',
    year: 2022,
    location: 'Bao Loc, Vietnam',
    description:
      "The studio's own workspace — a converted warehouse where exposed brick meets precision-crafted white oak furniture. A space built to reflect the studio's design philosophy.",
    coverImage: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?w=1200&q=80',
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=1200&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80',
    ],
    tags: ['Office', 'Studio', 'Adaptive Reuse'],
  },
  {
    id: 'huse-villa',
    title: 'Huse Villa',
    category: 'architecture',
    year: 2023,
    location: 'Vung Tau, Vietnam',
    description:
      'A beachside villa where architecture becomes landscape. Floating timber decks, sand-washed walls and transparent volumes blur the boundary between inside and out.',
    coverImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=80',
    ],
    tags: ['Villa', 'Beachside', 'Open Plan'],
  },
  {
    id: 'theseon-villa',
    title: 'Theseon Villa',
    category: 'landscape',
    year: 2024,
    location: 'Da Nang, Vietnam',
    description:
      'Landscaping for a hillside villa that flows across three distinct garden levels. Native plantings, dry-stone retaining walls and a cantilevered timber deck are the defining gestures.',
    coverImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    ],
    tags: ['Landscape', 'Hillside', 'Villa'],
  },
];
