'use client';

import { useFavoritesStore } from '@/store/useFavoritesStore';
import css from './FavoriteButton.module.css';
import SvgIcon from '../SvgIcon/SvgIcon';

type Props = {
  camperId: string;
};

export default function FavoriteButton({ camperId }: Props) {
  const favorites = useFavoritesStore(s => s.favorites);
  const toggle = useFavoritesStore(s => s.toggle);
  const isFavorite = favorites.includes(camperId);

  return (
    <button
      className={`${css.button} ${isFavorite ? css.active : ''}`}
      onClick={() => toggle(camperId)}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <SvgIcon
        name={isFavorite ? 'icon-heart-active' : 'icon-heart'}
        size={26}
        color={isFavorite ? '#e04e4e' : 'currentColor'}
        className={css.icon}
      />
    </button>
  );
}
