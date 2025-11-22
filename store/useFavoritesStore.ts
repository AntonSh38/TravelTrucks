import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavState = {
  favorites: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
};

export const useFavoritesStore = create<FavState>()(
  persist(
    set => ({
      favorites: [],
      add: id =>
        set(s => ({
          favorites: Array.from(new Set([...s.favorites, id])),
        })),
      remove: id =>
        set(s => ({ favorites: s.favorites.filter(f => f !== id) })),
      toggle: id =>
        set(s => ({
          favorites: s.favorites.includes(id)
            ? s.favorites.filter(f => f !== id)
            : [...s.favorites, id],
        })),
    }),
    { name: 'traveltrucks-favorites' }
  )
);
