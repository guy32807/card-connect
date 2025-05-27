export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
  affiliateUrl: string;
  rating?: number;
  tags?: string[];
  featured?: boolean;
}

export interface ProductCollection {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  products: Product[];
  slug: string;
}