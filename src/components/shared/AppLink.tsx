import Link from 'next/link';

type AppLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function AppLink({ href, children, className }: AppLinkProps) {
  const basePath = process.env.NODE_ENV === 'production' ? '/card-connect' : '';
  const fullHref = href.startsWith('/') ? `${basePath}${href}` : href;
  
  return (
    <Link href={fullHref} className={className}>
      {children}
    </Link>
  );
}