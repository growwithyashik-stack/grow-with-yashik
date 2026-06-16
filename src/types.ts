export interface Product {
  id: string;
  title: string;
  price: number;
  category: 'men' | 'women';
  subcategory: string;
  rating: number;
  reviewsCount: number;
  images: string[]; // Supports multiple high-res image angles for interactive swaps!
  description: string;
  colors: string[]; // Color hex codes or names
  sizes: string[];  // e.g. ["S", "M", "L", "XL"]
  details: string[]; // Materials, fabric composition, features
  isNew?: boolean;
  isBest?: boolean;
}

export interface CartItem {
  id: string; // Unique combination of product ID + selected size + selected color
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically trigger Lucide icons
}

export interface WhyChooseBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
