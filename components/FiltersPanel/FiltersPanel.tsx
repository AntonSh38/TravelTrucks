'use client';

import React, { useState } from 'react';
import css from './FiltersPanel.module.css';
import { Filters } from '@/lib/types';
import SvgIcon from '../SvgIcon/SvgIcon';

type Props = {
  initial?: Partial<Filters>;
  onApply: (filters: Partial<Filters>) => void;
};

export default function FiltersPanel({ initial = {}, onApply }: Props) {
  const [location, setLocation] = useState(initial.location ?? '');

  const [selectedEquipment, setSelectedEquipment] = useState<string[]>(() => {
    const eq: string[] = [];
    if (initial.AC) eq.push('AC');
    if (initial.transmission === 'automatic') eq.push('transmission');
    if (initial.kitchen) eq.push('kitchen');
    if (initial.TV) eq.push('TV');
    if (initial.bathroom) eq.push('bathroom');
    return eq;
  });

  const [selectedType, setSelectedType] = useState<string>(initial.form ?? '');

  const equipmentOptions = [
    { key: 'AC', label: 'AC', icon: 'icon-wind' },
    { key: 'transmission', label: 'Automatic', icon: 'icon-automatic' },
    { key: 'kitchen', label: 'Kitchen', icon: 'icon-cup-hot' },
    { key: 'TV', label: 'TV', icon: 'icon-tv' },
    { key: 'bathroom', label: 'Bathroom', icon: 'icon-shower' },
  ] as const;

  const typeOptions = [
    { key: 'panelTruck', label: 'Van', icon: 'icon-van' },
    {
      key: 'fullyIntegrated',
      label: 'Fully Integrated',
      icon: 'icon-fully-integrated',
    },
    { key: 'alcove', label: 'Alcove', icon: 'icon-alcove' },
  ] as const;

  const toggleEquipment = (key: string) => {
    setSelectedEquipment(prev =>
      prev.includes(key) ? prev.filter(i => i !== key) : [...prev, key]
    );
  };

  const selectType = (key: string) => {
    setSelectedType(prev => (prev === key ? '' : key));
  };

  const apply = () => {
    const filters: Partial<Filters> = {};

    if (location.trim()) filters.location = location.trim();
    if (selectedType)
      filters.form = selectedType as
        | 'panelTruck'
        | 'fullyIntegrated'
        | 'alcove';

    selectedEquipment.forEach(eq => {
      if (eq === 'transmission') {
        filters.transmission = 'automatic';
      } else if (eq === 'AC') {
        filters.AC = true;
      } else if (eq === 'kitchen') {
        filters.kitchen = true;
      } else if (eq === 'TV') {
        filters.TV = true;
      } else if (eq === 'bathroom') {
        filters.bathroom = true;
      }
    });

    onApply(filters);
  };

  const clear = () => {
    setLocation('');
    setSelectedEquipment([]);
    setSelectedType('');
    onApply({});
  };

  return (
    <section className={css.wrap}>
      <div className={css.locationField}>
        <label className={css.label}>Location</label>
        <div className={css.inputWrapper}>
          <SvgIcon
            name="icon-Map"
            size={20}
            color="#969696"
            className={css.locationIcon}
          />
          <input
            className={css.locationInput}
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="City"
          />
        </div>
      </div>

      <p className={css.filters}>Filters</p>

      <h3 className={css.blockTitle}>Vehicle equipment</h3>
      <hr className={css.hr} />
      <div className={css.grid}>
        {equipmentOptions.map(opt => {
          const active = selectedEquipment.includes(opt.key);
          return (
            <button
              key={opt.key}
              className={`${css.card} ${active ? css.active : ''}`}
              onClick={() => toggleEquipment(opt.key)}
            >
              <SvgIcon name={opt.icon} size={32} />
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>

      <h3 className={css.blockTitle}>Vehicle type</h3>
      <hr className={css.hr} />
      <div className={css.grid}>
        {typeOptions.map(opt => {
          const active = selectedType === opt.key;
          return (
            <button
              key={opt.key}
              className={`${css.card} ${active ? css.active : ''}`}
              onClick={() => selectType(opt.key)}
            >
              <SvgIcon name={opt.icon} size={32} />
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>

      <div className={css.buttons}>
        <button className={css.searchBtn} onClick={apply}>
          Search
        </button>
        <button className={css.clearBtn} onClick={clear}>
          Clear
        </button>
      </div>
    </section>
  );
}
