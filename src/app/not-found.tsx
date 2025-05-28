import Link from 'next/link';

export default function Custom404() {
  const basePath = process.env.NODE_ENV === 'production' ? '/card-connect' : '';
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8 text-xl">The page you're looking for doesn't exist or has been moved.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}