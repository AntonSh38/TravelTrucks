import Link from 'next/link';
import css from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={css.hero}>
      <Image src="/Hero.avif" alt="hero" width={1440} height={696} priority />
      <div className={css.wrappercontext}>
        <h2 className={css.herotitle}>Campers of your dreams</h2>
        <p className={css.herotext}>
          You can find everything you want in our catalog
        </p>
        <Link href="/catalog">
          <button type="button" className={css.herobtn}>
            View Now
          </button>
        </Link>
      </div>
    </section>
  );
}
