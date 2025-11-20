'use client';

import { Camper, Filters } from '@/lib/types';
import { create } from 'zustand';

interface CampersState {
  campers: Camper[];
  filters: Filters;
  page: number;
  limit: number;
  setCampers: (c: Camper[]) => void;
  appendCampers: (c: Camper[]) => void;
  resetCampers: () => void;
  setFilters: (f: Filters) => void;
  resetFilters: () => void;
  setPage: (p: number) => void;
}

export const useCampersStore = create<CampersState>(set => ({
  campers: [],
  filters: {} as Filters,
  page: 1,
  limit: 4,
  setCampers: c => set({ campers: c }),
  appendCampers: c => set(s => ({ campers: [...s.campers, ...c] })),
  resetCampers: () => set({ campers: [] }),
  setFilters: f => set({ filters: f }),
  resetFilters: () => set({ filters: {} as Filters }),
  setPage: p => set({ page: p }),
}));
