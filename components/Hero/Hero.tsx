import Link from 'next/link';
import css from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={css.hero}>
      <h2>Campers of your dreams</h2>
      <p>You can find everything you want in our catalog</p>
      <Link href="/catalog">
        <button type="button">View Now</button>
      </Link>
      <Image src="/Hero.avif" alt="hero" width={1440} height={696} priority />
    </section>
  );
}
