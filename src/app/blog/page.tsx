import { Metadata } from 'next';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { getBlogPosts } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Blog | CardConnect',
  description: 'Latest news, insights, and resources for sports card collectors.',
};

export default async function BlogPage() {
  // Get blog posts
  const posts = await getBlogPosts();
  
  return (
    <div className="container section">
      <div className="blog-header text-center">
        <h1 className="mb-4">Blog</h1>
        <p className="text-gray max-w-2xl mx-auto">
          Stay up-to-date with the latest news, insights, and tips from the sports card 
          collecting community and authentication experts.
        </p>
      </div>
      
      <div className="blog-list">
        <div className="blog-grid">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}