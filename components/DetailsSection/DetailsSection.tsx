import { Camper } from '@/lib/types';
import css from './DetailsSection.module.css';

type Props = {
  camper: Camper;
};

export default function DetailsSection({ camper }: Props) {
  const details = [
    { key: 'form', label: 'Form' },
    { key: 'length', label: 'Length' },
    { key: 'width', label: 'Width' },
    { key: 'height', label: 'Height' },
    { key: 'tank', label: 'Tank' },
    { key: 'consumption', label: 'Consumption' },
  ] as const;

  const formatValue = (key: string, value: string | number) => {
    if (!value) return '-';
    if (key === 'form') {
      return value === 'panelTruck'
        ? 'Van'
        : value === 'fullyIntegrated'
        ? 'Fully Integrated'
        : value === 'alcove'
        ? 'Alcove'
        : value;
    }
    return value;
  };

  return (
    <div className={css.detailsBlock}>
      <h3 className={css.title}>Vehicle details</h3>
      <hr className={css.divider} />
      <ul className={css.list}>
        {details.map(({ key, label }) => {
          const value = camper[key];
          if (!value) return null;
          return (
            <li key={`${key}-${camper.id}`} className={css.row}>
              <span className={css.label}>{label}</span>
              <span className={css.value}>{formatValue(key, value)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
