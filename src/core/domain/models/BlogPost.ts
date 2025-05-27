export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  imageUrl: string;
  author: string;
  publishedDate: Date;
  tags: string[];
  relatedProducts?: string[];
}