import { Product } from '../domain/models/Product';

export interface FetchProductsRepository {
  fetchFeaturedProducts(): Promise<Product[]>;
  fetchProductsByCategory(category: string): Promise<Product[]>;
  fetchProductById(id: string): Promise<Product | null>;
  searchProducts(query: string): Promise<Product[]>;
}

export class FetchProductsUseCase {
  constructor(private repository: FetchProductsRepository) {}

  async getFeaturedProducts(): Promise<Product[]> {
    return this.repository.fetchFeaturedProducts();
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.repository.fetchProductsByCategory(category);
  }

  async getProductById(id: string): Promise<Product | null> {
    return this.repository.fetchProductById(id);
  }
  
  async searchProducts(query: string): Promise<Product[]> {
    return this.repository.searchProducts(query);
  }
}