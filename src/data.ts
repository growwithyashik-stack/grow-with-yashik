import { Product, Testimonial, Feature, WhyChooseBenefit } from './types';

export const HERO_IMAGE = "https://images.unsplash.com/photo-1483389122017-4a7ef7fcba90?q=80&w=1200&auto=format&fit=crop";

export const PRODUCTS: Product[] = [
  {
    id: "m-01",
    title: "Signature Oversized Heavyweight Tee",
    price: 49,
    category: "men",
    subcategory: "Oversized Tees",
    rating: 4.9,
    reviewsCount: 142,
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Engineered from exceptionally thick organic cotton, our signature oversized tee boasts a vintage boxy cut with drop-shoulder seams. It is structured yet breathable, offering ultimate confidence for any urban setting.",
    colors: ["#111111", "#E5E7EB", "#4B5563"], // Black, Light Gray, Charcoal
    sizes: ["S", "M", "L", "XL"],
    details: [
      "100% GOTS Certified Organic Cotton",
      "Heavyweight 280 GSM fabric built for durability",
      "Ribbed crewneck collar that maintains shape over time",
      "Preshrunk and garment-dyed for a premium vintage texture",
      "Ethically manufactured in Portugal"
    ],
    isNew: true,
    isBest: false
  },
  {
    id: "m-02",
    title: "Luxury French Terry Knit Hoodie",
    price: 110,
    category: "men",
    subcategory: "Hoodies",
    rating: 4.8,
    reviewsCount: 96,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
    ],
    description: "A standard-defining essential. This hoodie features heavy loopback French Terry knit fabric, a clean double-layered hood without strings for a ultra-minimalist appearance, and hidden side-seam pockets.",
    colors: ["#1F2937", "#9CA3AF", "#D1FAE5"], // Charcoal, Gray, Soft Green
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      "85% Organic Cotton, 15% Recycled Polyester",
      "400 GSM heavy-knit French Terry",
      "Invisible side pockets for a sleek front profile",
      "Double-lined spacious hood without drawcords",
      "Ribbed side-panels for natural stretch and motion resistance"
    ],
    isNew: false,
    isBest: true
  },
  {
    id: "m-03",
    title: "Eco-Linen Casual Long Sleeve",
    price: 75,
    category: "men",
    subcategory: "Shirts",
    rating: 4.7,
    reviewsCount: 84,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Crafted from highly sustainable European flax, this long sleeve linen shirt is pre-washed for sublime softness. Styled with a modern mandarin band collar for an effortlessly sophisticated silhouette.",
    colors: ["#FFFFFF", "#F3F4F6", "#374151"], // White, Off-white, Slate blue
    sizes: ["M", "L", "XL"],
    details: [
      "100% Certified European Flax Linen",
      "Pre-washed for immediate comfort and crease resistance",
      "Signature minimalist collar band design",
      "High-durability mother of pearl buttons",
      "Moisture-wicking, breathable weaving"
    ],
    isNew: true,
    isBest: false
  },
  {
    id: "m-04",
    title: "Tailored Premium Urban Jogger",
    price: 85,
    category: "men",
    subcategory: "Joggers",
    rating: 4.9,
    reviewsCount: 110,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Blurring the lines between tailored trousers and sports attire. Engineered with 4-way stretch tech cotton and elasticized ankles, offering the ultimate silhouette without restricting flexibility.",
    colors: ["#111111", "#1E293B", "#374151"], // Black, Navy, Off-Black
    sizes: ["S", "M", "L", "XL"],
    details: [
      "78% Tech-Cotton, 16% Nylon, 6% Elastane",
      "Four-way performance stretch capabilities",
      "Concealed zip pockets for secure storage",
      "Matte-black hardware and premium drawcord caps",
      "Gusseted crotch for unrestricted dynamic leg movement"
    ],
    isNew: false,
    isBest: true
  },
  {
    id: "m-05",
    title: "FYTNI Graphic Vintage Tee",
    price: 52,
    category: "men",
    subcategory: "T-Shirts",
    rating: 4.9,
    reviewsCount: 56,
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop"
    ],
    description: "An homage to timeless street style. Featuring custom screen-printed subtle FYTNI graphic alignments on the high chest and rear collar. Extremely durable wash-resisting luxury ink.",
    colors: ["#111111", "#FFFFFF"],
    sizes: ["S", "M", "L", "XL"],
    details: [
      "100% Premium USA heavy-yarn cotton",
      "Eco-friendly water-based screen printing",
      "Retro high-rib neckline trim",
      "Thick shoulders and boxy drop-down look"
    ],
    isNew: true,
    isBest: false
  },
  {
    id: "w-01",
    title: "Minimalist Ribbed Knit Sculpt Top",
    price: 42,
    category: "women",
    subcategory: "Tops",
    rating: 4.8,
    reviewsCount: 167,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Designed to mold perfectly to your body, our custom sculpted rib knit top is exceptionally soft with a subtle sheen. Looks impeccable tucked into loose denim or paired with high-fashion outerwear.",
    colors: ["#E5E7EB", "#111111", "#F97316"], // Cream, Black, Amber Orange
    sizes: ["XS", "S", "M", "L"],
    details: [
      "92% MicroModal, 8% Lycra Spandex",
      "Ultra-fine premium 2x2 ribbing structure",
      "High double-stitched neckline",
      "Cool-to-the-touch fabric properties",
      "Resilient elasticity that never loses memory"
    ],
    isNew: true,
    isBest: false
  },
  {
    id: "w-02",
    title: "Satin Pleated Slip Luxury Dress",
    price: 125,
    category: "women",
    subcategory: "Dresses",
    rating: 4.9,
    reviewsCount: 201,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Flowing elegance. This pleated satin dress drapes exquisitely over the skin, showcasing a delicate V-neck and customizable cross-back strap designs to customize your aesthetic confidence dynamically.",
    colors: ["#111111", "#DC2626", "#6B7280"], // Charcoal black, Bold Crimson, Slate Gray
    sizes: ["XS", "S", "M", "L"],
    details: [
      "100% Recycled Luxury Satin Viscose",
      "Drape-weighted material that dynamically complements movement",
      "Fully adjustable silk-cord shoulder laces",
      "Invisible rear zipper closures",
      "Lined interior for extreme, continuous comfort"
    ],
    isNew: false,
    isBest: true
  },
  {
    id: "w-03",
    title: "Premium Knitted Rib Co-ord Set",
    price: 140,
    category: "women",
    subcategory: "Co-ords",
    rating: 4.9,
    reviewsCount: 88,
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
    ],
    description: "A sleek, ready-to-go co-ordinate pairing combining a loose high-neck drape pullover with comfortable, broad-legged knit pants. The definition of elegant loungewear for high-society outings.",
    colors: ["#F3F4F6", "#4B5563"], // Sage white, Dark Slate
    sizes: ["S", "M", "L"],
    details: [
      "65% Viscose, 30% Tension-Nylon, 5% Wool blend",
      "Comes as complete top and trouser bundle",
      "Elastic wide-waistband with tailored drawcords",
      "Exceptional insulation with breathable open knitting"
    ],
    isNew: true,
    isBest: true
  },
  {
    id: "w-04",
    title: "Sophisticated Pleated Trouser Pant",
    price: 89,
    category: "women",
    subcategory: "Casual Wear",
    rating: 4.6,
    reviewsCount: 71,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Tailored to perfection with structured high-waist front pleats, these trousers deliver a leg-lengthening silhouette. Crafted with heavy-drape suiting material for business or chic casual styling.",
    colors: ["#111111", "#9CA3AF"], // Jet Black, Gray Melange
    sizes: ["XS", "S", "M", "L", "XL"],
    details: [
      "Ringspun lightweight tech suiting gabardine",
      "Classic modern dual welt-side pocket trims",
      "Constructed waistband lining prevent sagging",
      "Hook-and-bar zip fastening systems"
    ],
    isNew: false,
    isBest: false
  },
  {
    id: "w-05",
    title: "Classic Bonded Trench Overcoat",
    price: 180,
    category: "women",
    subcategory: "Fashion Essentials",
    rating: 5.0,
    reviewsCount: 43,
    images: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
    ],
    description: "The absolute essential double-breasted coat. Fully lined water-resistant construction, deep utility storm panels, and a self-tie belt to cinch your waist perfectly.",
    colors: ["#D1C4E9", "#111111", "#FFFFFF"], // Cream Camel, Jet Black, Soft Ice
    sizes: ["S", "M", "L"],
    details: [
      "80% Bonded Tech Cotton, 20% Eco-Nylon shell",
      "Highly water-resistant DWR surface shield",
      "Traditional storm flap panels and epaulets",
      "Engraved horn-accent buttons",
      "Premium luxurious inner monogram lining"
    ],
    isNew: true,
    isBest: true
  }
];

export const FEATURES: Feature[] = [
  {
    id: "f1",
    title: "Premium Quality Materials",
    description: "Carefully selected fabrics (Organic GOTS Cotton, Sustainable European Linen, Tech-knits) for extreme comfort, breathability, and long-lasting durability.",
    iconName: "Sparkles"
  },
  {
    id: "f2",
    title: "Trend-Driven Designs",
    description: "Sleek, high-fashion styles inspired by the latest runway trends, modified with minimalist shapes suitable for sophisticated everyday wardrobes.",
    iconName: "TrendingUp"
  },
  {
    id: "f3",
    title: "Comfortable Everyday Wear",
    description: "Designed from the foundation-up for all-day comfort. Stretch panels, pre-shrunk variables, and drop silhouettes that move with you.",
    iconName: "Smile"
  },
  {
    id: "f4",
    title: "Affordable Luxury Fashion",
    description: "By selling directly online, we eliminate excessive wholesaler markups to offer you high-end luxury items at honest, accessible price points.",
    iconName: "Percent"
  }
];

export const WHY_CHOOSE_BENEFITS: WhyChooseBenefit[] = [
  {
    id: "wc1",
    title: "Premium Quality Fabrics",
    description: "Each thread is vetted for supreme softness and durable lifecycle metrics.",
    iconName: "Layers"
  },
  {
    id: "wc2",
    title: "Modern Fashion Trends",
    description: "Curated styles that always keep you ahead of contemporary trends.",
    iconName: "Compass"
  },
  {
    id: "wc3",
    title: "Comfortable Fits",
    description: "Carefully tested ergonomics across multiple heights and dimensions.",
    iconName: "Maximize2"
  },
  {
    id: "wc4",
    title: "Affordable Pricing",
    description: "Direct-to-consumer model ensures high quality without bloated brand taxes.",
    iconName: "DollarSign"
  },
  {
    id: "wc5",
    title: "Secure Payments",
    description: "Fully encrypted transaction systems protecting your credentials entirely.",
    iconName: "ShieldCheck"
  },
  {
    id: "wc6",
    title: "Fast Delivery",
    description: "Robust local processing with dynamic shipping dispatch in under 24 hours.",
    iconName: "Truck"
  },
  {
    id: "wc7",
    title: "Excellent Support",
    description: "Dedicated client experts available at any moment to assist queries.",
    iconName: "Headphones"
  },
  {
    id: "wc8",
    title: "Exclusive Collections",
    description: "Highly limited design batches to elevate your styling uniqueness.",
    iconName: "Award"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Alex Rivera",
    role: "Creative Director",
    rating: 5,
    comment: "The Signature Oversized Tee feels heavier and better structured than t-shirts I have bought for triple the price. The branding is wonderfully minimal, letting the beautiful fit speak first.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "t2",
    name: "Catherine Vance",
    role: "Fashion Stylist",
    rating: 5,
    comment: "I styled the Pleated Satin Slip Dress for a client, and she didn't want to take it off. It drapes naturally, doesn't crease easily, and captures editorial light beautifully. A real FYTNI gem.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "t3",
    name: "Marcus Sterling",
    role: "Product Designer",
    rating: 4.8,
    comment: "As a designer, I'm obsessive about construction. The French Terry knit hoodie completely exceeded my specifications. No dangling ropes, thick side panels, and beautiful heavy pocket lining.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
  }
];
