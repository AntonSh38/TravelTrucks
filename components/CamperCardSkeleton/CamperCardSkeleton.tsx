'use client';
import css from './CamperCardSkeleton.module.css';
export default function CamperCardSkeleton() {
  return (
    <section className={css.card}>
      {' '}
      <div className={css.image} />{' '}
      <div className={css.content}>
        {' '}
        <div className={css.header}>
          {' '}
          <div className={css.title} /> <div className={css.price} />{' '}
          <div className={css.favorite} />{' '}
        </div>{' '}
        <div className={css.info}>
          {' '}
          <div className={css.stars} /> <div className={css.location} />{' '}
        </div>{' '}
        <div className={css.description} />{' '}
        <div className={css.features}>
          {' '}
          <div className={css.feature} /> <div className={css.feature} />{' '}
          <div className={css.feature} />{' '}
        </div>{' '}
        <div className={css.button} />{' '}
      </div>{' '}
    </section>
  );
}
