// Sample blog data with SVG images instead of JPG
const sampleBlogPosts = [
  {
    id: '1',
    title: 'Understanding Card Grading: A Comprehensive Guide',
    excerpt: 'Learn about the grading scales, criteria, and what makes a card worthy of a perfect grade.',
    coverImage: '/images/blog/card-grading.svg',
    slug: 'understanding-card-grading',
    date: 'April 12, 2023',
    category: 'Grading'
  },
  {
    id: '2',
    title: 'Top 10 Baseball Rookie Cards to Invest In',
    excerpt: 'Discover which rookie cards have the best potential for long-term value growth.',
    coverImage: '/images/blog/baseball-cards.svg',
    slug: 'top-baseball-rookie-cards',
    date: 'March 28, 2023',
    category: 'Investment'
  },
  {
    id: '3',
    title: 'How to Spot Counterfeit Cards',
    excerpt: 'Key indicators to look for when authenticating valuable sports cards in your collection.',
    coverImage: '/images/blog/counterfeit-detection.svg',
    slug: 'spot-counterfeit-cards',
    date: 'March 15, 2023',
    category: 'Authentication'
  },
  {
    id: '4',
    title: 'Card Storage: Protecting Your Investment',
    excerpt: 'Best practices for storing your valuable cards to maintain their condition and value.',
    coverImage: '/images/blog/card-storage.svg',
    slug: 'card-storage-protection',
    date: 'February 22, 2023',
    category: 'Collection Care'
  },
  {
    id: '5',
    title: 'The Digital Revolution: NFTs and Sports Cards',
    excerpt: 'How digital collectibles are changing the landscape of traditional sports card collecting.',
    coverImage: '/images/blog/nfts.svg',
    slug: 'digital-revolution-nfts',
    date: 'February 10, 2023',
    category: 'Digital'
  },
  {
    id: '6',
    title: 'Market Trends: What\'s Hot in 2023',
    excerpt: 'Analysis of the current sports card market and predictions for upcoming trends.',
    coverImage: '/images/blog/market-trends.svg',
    slug: 'market-trends-2023',
    date: 'January 18, 2023',
    category: 'Market Analysis'
  }
];

export async function getBlogPosts() {
  // In a real app, this would be an API call
  // For now, return sample data
  return sampleBlogPosts;
}

export async function getBlogPostBySlug(slug: string) {
  // In a real app, this would fetch a specific post from an API
  const post = sampleBlogPosts.find(p => p.slug === slug);
  return post;
}