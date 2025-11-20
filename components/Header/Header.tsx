import Link from 'next/link';
import css from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.wrapperlogo}>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={136} height={15} />
        </Link>
      </div>
      <nav className={css.nav}>
        <Link href="/" className={css.navlink}>
          Home
        </Link>
        <Link href="/catalog" className={css.navlink}>
          Catalog
        </Link>
      </nav>
    </header>
  );
}
