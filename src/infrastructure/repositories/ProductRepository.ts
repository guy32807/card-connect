import { FetchProductsRepository } from '@/core/usecases/FetchProductsUseCase';
import { Product } from '@/core/domain/models/Product';

export class ProductRepository implements FetchProductsRepository {
  private baseAffiliateUrl = 'https://www.tkqlhce.com/click-9083409-15435040';
  
  private mockProducts: Product[] = [
    {
      id: '1',
      name: 'Beckett Basketball Card Price Guide',
      description: 'Monthly price guide for basketball card collectors with accurate market values.',
      imageUrl: '/images/products/basketball-guide.jpg',
      price: 9.99,
      category: 'price-guides',
      affiliateUrl: `${this.baseAffiliateUrl}?url=https://www.beckett.com/price-guides/basketball`,
      rating: 4.8,
      tags: ['basketball', 'price guide', 'monthly'],
      featured: true
    },
    {
      id: '2',
      name: 'Beckett Baseball Card Price Guide',
      description: 'Comprehensive price guide for baseball card collectors with market trends.',
      imageUrl: '/images/products/baseball-guide.jpg',
      price: 9.99,
      category: 'price-guides',
      affiliateUrl: `${this.baseAffiliateUrl}?url=https://www.beckett.com/price-guides/baseball`,
      rating: 4.7,
      tags: ['baseball', 'price guide', 'monthly'],
      featured: true
    },
    {
      id: '3',
      name: 'Beckett Authentication Service',
      description: 'Professional authentication service for valuable sports cards and memorabilia.',
      imageUrl: '/images/products/authentication.jpg',
      price: 29.99,
      category: 'services',
      affiliateUrl: `${this.baseAffiliateUrl}?url=https://www.beckett.com/services/authentication`,
      rating: 4.9,
      tags: ['authentication', 'grading', 'protection'],
      featured: true
    },
    {
      id: '4',
      name: 'Beckett Grading Service',
      description: 'Industry-leading card grading service with tamper-proof cases.',
      imageUrl: '/images/products/grading.jpg',
      price: 19.99,
      category: 'services',
      affiliateUrl: `${this.baseAffiliateUrl}?url=https://www.beckett.com/services/grading`,
      rating: 4.8,
      tags: ['grading', 'protection', 'value'],
      featured: true
    },
    {
      id: '5',
      name: 'Beckett Football Card Price Guide',
      description: 'Monthly price guide for football card collectors with market insights.',
      imageUrl: '/images/products/football-guide.jpg',
      price: 9.99,
      category: 'price-guides',
      affiliateUrl: `${this.baseAffiliateUrl}?url=https://www.beckett.com/price-guides/football`,
      rating: 4.6,
      tags: ['football', 'price guide', 'monthly']
    },
    {
      id: '6',
      name: 'Beckett Hockey Card Price Guide',
      description: 'Complete price guide for hockey card collectors with price trends.',
      imageUrl: '/images/products/hockey-guide.jpg',
      price: 9.99,
      category: 'price-guides',
      affiliateUrl: `${this.baseAffiliateUrl}?url=https://www.beckett.com/price-guides/hockey`,
      rating: 4.5,
      tags: ['hockey', 'price guide', 'monthly']
    }
  ];

  async fetchFeaturedProducts(): Promise<Product[]> {
    return this.mockProducts.filter(product => product.featured);
  }

  async fetchProductsByCategory(category: string): Promise<Product[]> {
    return this.mockProducts.filter(product => product.category === category);
  }

  async fetchProductById(id: string): Promise<Product | null> {
    const product = this.mockProducts.find(product => product.id === id);
    return product || null;
  }
  
  async searchProducts(query: string): Promise<Product[]> {
    const lowerQuery = query.toLowerCase();
    return this.mockProducts.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) || 
      product.description.toLowerCase().includes(lowerQuery) ||
      product.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }
}