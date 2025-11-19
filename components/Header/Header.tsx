import Link from 'next/link';
import css from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={css.header}>
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={136} height={15} />
        </Link>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/catalog">Catalog</Link>
      </nav>
    </header>
  );
}
