'use client';
import React, { useState } from 'react';
import css from './FiltersPanel.module.css';

type Filters = {
  location?: string;
  type?: 'camper' | 'van' | '';
  AC?: boolean;
  kitchen?: boolean;
};

type Props = {
  initial?: Partial<Filters>;
  onApply: (f: Partial<Filters>) => void;
};
export default function FiltersPanel({ initial = {}, onApply }: Props) {
  const [location, setLocation] = useState(initial.location ?? '');
  const [type, setType] = useState(initial.type ?? '');
  const [AC, setAC] = useState<boolean>(!!initial.AC);
  const [kitchen, setKitchen] = useState<boolean>(!!initial.kitchen);
  const apply = () => {
    const params: Partial<Filters> = {};
    if (location) params.location = location;
    if (type) params.type = type;
    if (AC) params.AC = true;
    if (kitchen) params.kitchen = true;
    onApply(params);
  };
  const clear = () => {
    setLocation('');
    setType('');
    setAC(false);
    setKitchen(false);
    onApply({});
  };
  return (
    <section>
      <div>
        <label className={css.lablelocation}>Location</label>
        <input
          className={css.inputlocation}
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="Location"
        />
      </div>
      <div>
        <label>Type</label>
        <select
          value={type}
          onChange={e => setType(e.target.value as typeof type)}
        >
          <option value="">Any</option>
          <option value="camper">Camper</option>
          <option value="van">Van</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={AC} onChange={() => setAC(s => !s)} />{' '}
          AC
        </label>
        <label>
          <input
            type="checkbox"
            checked={kitchen}
            onChange={() => setKitchen(s => !s)}
          />{' '}
          Kitchen
        </label>
      </div>
      <div>
        <button onClick={apply}>Apply</button>
        <button onClick={clear}>Clear</button>
      </div>
    </section>
  );
}
