import AppImage from '@/components/shared/AppImage';
import AppLink from '@/components/shared/AppLink';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  slug: string;
  date: string;
  category: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48">
        <AppImage 
          src={post.coverImage} 
          alt={post.title} 
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-5">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-3">
          {post.category}
        </span>
        <AppLink href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600">{post.title}</h3>
        </AppLink>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <time className="text-sm text-gray-500">{post.date}</time>
          <AppLink 
            href={`/blog/${post.slug}`}
            className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
          >
            Read more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </AppLink>
        </div>
      </div>
    </div>
  );
}