import { FetchBlogPostsRepository } from '@/core/usecases/FetchBlogPostsUseCase';
import { BlogPost } from '@/core/domain/models/BlogPost';

export class BlogRepository implements FetchBlogPostsRepository {
  private mockPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Ultimate Guide to Sports Card Grading',
      excerpt: 'Learn everything you need to know about card grading services and how they affect your collection value.',
      content: 'Full article content here...',
      slug: 'ultimate-guide-sports-card-grading',
      imageUrl: '/images/blog/card-grading.jpg',
      author: 'Mike Johnson',
      publishedDate: new Date('2023-11-15'),
      tags: ['grading', 'collecting tips', 'card value'],
      relatedProducts: ['3', '4']
    },
    {
      id: '2',
      title: 'Top 10 Basketball Rookie Cards to Invest in 2023',
      excerpt: 'Discover which rookie cards are showing the most promise for long-term investment this year.',
      content: 'Full article content here...',
      slug: 'top-basketball-rookie-cards-2023',
      imageUrl: '/images/blog/rookie-cards.jpg',
      author: 'Sarah Williams',
      publishedDate: new Date('2023-10-22'),
      tags: ['basketball', 'rookie cards', 'investing'],
      relatedProducts: ['1']
    },
    {
      id: '3',
      title: 'How to Properly Store Your Valuable Card Collection',
      excerpt: 'Preserve the condition and value of your cards with these professional storage techniques.',
      content: 'Full article content here...',
      slug: 'properly-store-valuable-card-collection',
      imageUrl: '/images/blog/card-storage.jpg',
      author: 'Chris Peterson',
      publishedDate: new Date('2023-09-18'),
      tags: ['storage', 'preservation', 'collecting tips'],
      relatedProducts: ['4']
    }
  ];

  async fetchLatestPosts(limit: number): Promise<BlogPost[]> {
    return this.mockPosts
      .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime())
      .slice(0, limit);
  }

  async fetchPostsByTag(tag: string): Promise<BlogPost[]> {
    return this.mockPosts.filter(post => 
      post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  }

  async fetchPostBySlug(slug: string): Promise<BlogPost | null> {
    const post = this.mockPosts.find(post => post.slug === slug);
    return post || null;
  }
}