import './globals.css';
import './custom.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CardConnect | Sports Card Authentication & Grading',
  description: 'Connect with premium services for sports card collectors, including authentication, grading, and pricing information.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
