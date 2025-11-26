'use client';

import { Camper } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import css from './CamperCard.module.css';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import RatingStars from '../RatingStars/RatingStars';
import SvgIcon from '../SvgIcon/SvgIcon';

export default function CamperCard({ camper }: { camper: Camper }) {
  const image = camper.gallery?.[0]?.thumb ?? camper.gallery?.[0]?.original;

  const getFeatureLabel = (key: string, value: string): string => {
    if (key === 'transmission')
      return value === 'automatic' ? 'Automatic' : 'Manual';
    if (key === 'engine') {
      return (
        { petrol: 'Petrol', diesel: 'Diesel', hybrid: 'Hybrid' }[value] || value
      );
    }
    return value;
  };

  const features: { icon: string; label: string }[] = [];

  if (camper.transmission) {
    features.push({
      icon: 'icon-automatic',
      label: getFeatureLabel('transmission', camper.transmission),
    });
  }

  if (camper.engine) {
    features.push({
      icon: 'icon-fuel-pump',
      label: getFeatureLabel('engine', camper.engine),
    });
  }

  if (camper.kitchen) {
    features.push({
      icon: 'icon-cup-hot',
      label: 'Kitchen',
    });
  }

  if (camper.AC) {
    features.push({
      icon: 'icon-wind',
      label: 'AC',
    });
  }

  return (
    <section className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          className={css.image}
          src={image}
          width={292}
          height={320}
          alt={camper.name}
          priority={false}
        />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <h3 className={css.title}>{camper.name}</h3>
          <p className={css.price}>€{camper.price.toFixed(2)}</p>
          <FavoriteButton camperId={camper.id} />
        </div>

        <div className={css.info}>
          <RatingStars reviews={camper.reviews ?? []} />
          <div className={css.location}>
            <SvgIcon name="icon-Map" size={16} color="#484848" />
            <span>{camper.location}</span>
          </div>
        </div>

        <p className={css.description}>
          {camper.description.length > 60
            ? camper.description.slice(0, 60) + '...'
            : camper.description}
        </p>

        <div className={css.features}>
          {features.map(feature => (
            <div key={feature.icon} className={css.feature}>
              <SvgIcon name={feature.icon} size={20} />
              <span>{feature.label}</span>
            </div>
          ))}
        </div>

        <Link href={`/catalog/${camper.id}`} className={css.link}>
          <button className={css.showMoreBtn} type="button">
            Show more
          </button>
        </Link>
      </div>
    </section>
  );
}
