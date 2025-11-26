'use client';

import Link from 'next/link';
import css from './Header.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isHomeActive = pathname === '/';
  const isCatalogActive = pathname === '/catalog';

  return (
    <header className={css.header}>
      <div className={css.inner}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="TravelTrucks Logo"
            width={136}
            height={15}
            priority
          />
        </Link>

        <nav className={css.nav}>
          <Link
            href="/"
            className={`${css.navlink} ${isHomeActive ? css.active : ''}`}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={`${css.navlink} ${isCatalogActive ? css.active : ''}`}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
