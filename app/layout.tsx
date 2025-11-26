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
  title: 'TravelTrucks',
  description: 'Camper rental platform',
  icons: {
    icon: '/favicon.svg',
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
