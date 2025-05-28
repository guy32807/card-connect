import Link from 'next/link';

interface AppLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export default function AppLink({ 
  href, 
  children,
  className = '',
  target
}: AppLinkProps) {
  // Handle external links
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  
  if (isExternal) {
    return (
      <a 
        href={href} 
        className={className}
        target={target || '_blank'} 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  // Internal links use Next.js Link
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}