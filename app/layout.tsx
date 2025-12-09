import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Sprite from '@/components/Sprite/Sprite';

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['600', '500', '400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TravelTrucks — Camper Rental',
  description:
    'Browse and rent campers with filters, pagination, and detailed pages.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'TravelTrucks — Camper Rental',
    description:
      'Find the perfect camper. Filters, favorites, booking — all in one place.',

    url: 'https://travel-trucks-gules-nine.vercel.app/',
    siteName: 'TravelTrucks',
    images: [
      {
        url: 'https://travel-trucks-gules-nine.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TravelTrucks Camper Catalog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TravelTrucks — Camper Rental',
    description: 'Find the perfect camper.',
    images: ['https://travel-trucks-gules-nine.vercel.app/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable}`}>
        <Sprite />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
