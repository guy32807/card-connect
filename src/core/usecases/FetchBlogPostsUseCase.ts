import { BlogPost } from '../domain/models/BlogPost';

export interface FetchBlogPostsRepository {
  fetchLatestPosts(limit: number): Promise<BlogPost[]>;
  fetchPostsByTag(tag: string): Promise<BlogPost[]>;
  fetchPostBySlug(slug: string): Promise<BlogPost | null>;
}

export class FetchBlogPostsUseCase {
  constructor(private repository: FetchBlogPostsRepository) {}

  async getLatestPosts(limit: number = 5): Promise<BlogPost[]> {
    return this.repository.fetchLatestPosts(limit);
  }

  async getPostsByTag(tag: string): Promise<BlogPost[]> {
    return this.repository.fetchPostsByTag(tag);
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return this.repository.fetchPostBySlug(slug);
  }
}