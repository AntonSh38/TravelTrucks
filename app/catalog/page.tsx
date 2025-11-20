'use client';

import { useCampersStore } from '@/store/useCampersStore';
import { useEffect, useState } from 'react';
import CamperCard from '@/components/CamperCard/CamperCard';
import FiltersPanel from '@/components/FiltersPanel/FiltersPanel';
import { getCampers } from '@/lib/api';
import { Filters } from '@/lib/types';
import css from './page.module.css';

export default function CatalogPage() {
  const campers = useCampersStore(s => s.campers);
  const page = useCampersStore(s => s.page);
  const limit = useCampersStore(s => s.limit);
  const filters = useCampersStore(s => s.filters);
  const setCampers = useCampersStore(s => s.setCampers);
  const appendCampers = useCampersStore(s => s.appendCampers);
  const resetCampers = useCampersStore(s => s.resetCampers);
  const setPage = useCampersStore(s => s.setPage);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      try {
        const params: Record<string, string | number | boolean> = {
          page,
          limit,
          ...filters,
        };
        const data = await getCampers(params);
        if (cancelled) return;
        if (page === 1) setCampers(data);
        else appendCampers(data);
      } catch (e) {
        console.error(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [appendCampers, filters, limit, page, setCampers]);

  const onApplyFilters = (
    newFilters: Record<string, string | number | boolean>
  ) => {
    resetCampers();
    useCampersStore.getState().setFilters(newFilters as unknown as Filters);
    setPage(1);
  };
  const loadMore = () => setPage(page + 1);

  return (
    <div>
      <div className={css.wrapper}>
        <FiltersPanel initial={filters} onApply={onApplyFilters} />
        <section>
          {campers.length === 0 && !loading && <p>No results</p>}
          {Array.isArray(campers) &&
            campers.map(camper => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
        </section>
      </div>

      <button className={css.btnloadmore} onClick={loadMore} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
}
