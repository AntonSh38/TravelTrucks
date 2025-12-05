'use client';

import { Camper, Filters } from '@/lib/types';
import { create } from 'zustand';

interface CampersState {
  campers: Camper[];
  total: number;
  filters: Filters;
  page: number;
  limit: number;
  setCampers: (c: Camper[], total: number) => void;
  appendCampers: (c: Camper[]) => void;
  resetCampers: () => void;
  setFilters: (f: Filters) => void;
  resetFilters: () => void;
  setPage: (p: number) => void;
}

export const useCampersStore = create<CampersState>(set => ({
  campers: [],
  total: 0,
  filters: {} as Filters,
  page: 1,
  limit: 4,

  setCampers: (c, total) => set({ campers: c, total }),

  appendCampers: newCampers =>
    set(state => {
      const existing = new Set(state.campers.map(c => c.id));
      const unique = newCampers.filter(c => !existing.has(c.id));

      return { campers: [...state.campers, ...unique] };
    }),

  resetCampers: () => set({ campers: [], total: 0 }),

  setFilters: f => set({ filters: f }),
  resetFilters: () => set({ filters: {} as Filters }),

  setPage: p => set({ page: p }),
}));
