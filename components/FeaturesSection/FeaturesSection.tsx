'use client';

import { Camper } from '@/lib/types';
import css from './FeaturesSection.module.css';
import SvgIcon from '../SvgIcon/SvgIcon';

type Props = {
  camper: Camper;
};

export default function FeaturesSection({ camper }: Props) {
  const transmissionLabel =
    camper.transmission === 'automatic' ? 'Automatic' : 'Manual';

  const engineLabel =
    camper.engine === 'petrol'
      ? 'Petrol'
      : camper.engine === 'diesel'
      ? 'Diesel'
      : camper.engine === 'hybrid'
      ? 'Hybrid'
      : camper.engine;

  const features: {
    key: keyof Camper;
    icon: string;
    label: string;
  }[] = [
    { key: 'AC', icon: 'icon-wind', label: 'AC' },
    {
      key: 'transmission',
      icon: 'icon-automatic',
      label: transmissionLabel,
    },
    { key: 'kitchen', icon: 'icon-cup-hot', label: 'Kitchen' },
    { key: 'TV', icon: 'icon-tv', label: 'TV' },
    { key: 'radio', icon: 'icon-radios', label: 'Radio' },
    { key: 'bathroom', icon: 'icon-shower', label: 'Bathroom' },
    { key: 'microwave', icon: 'icon-microwave', label: 'Microwave' },
    { key: 'refrigerator', icon: 'iicon-fridge', label: 'Refrigerator' },
    { key: 'gas', icon: 'icon-gas', label: 'Gas' },
    { key: 'water', icon: 'icon-water', label: 'Water' },
    { key: 'engine', icon: 'icon-fuel-pump', label: engineLabel },
  ];

  return (
    <section className={css.wrap}>
      <ul className={css.featuresGrid}>
        {features.map(({ key, icon, label }) => {
          const value = camper[key];

          if (typeof value === 'boolean' && !value) return null;
          if (value === null || value === undefined || value === '')
            return null;

          return (
            <li key={key} className={css.featureItem}>
              <SvgIcon
                name={icon}
                size={24}
                color="#050505ff"
                className={css.featureIcon}
              />
              <span>{label}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
