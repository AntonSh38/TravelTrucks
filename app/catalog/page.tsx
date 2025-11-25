'use client';

import { useCampersStore } from '@/store/useCampersStore';
import { useEffect, useState } from 'react';
import CamperCard from '@/components/CamperCard/CamperCard';
import FiltersPanel from '@/components/FiltersPanel/FiltersPanel';
import { getCampersPaginated } from '@/lib/api';
import { Filters } from '@/lib/types';
import css from './page.module.css';

export default function CatalogPage() {
  const campers = useCampersStore(s => s.campers);
  const total = useCampersStore(s => s.total) ?? 0;
  const page = useCampersStore(s => s.page);
  const limit = useCampersStore(s => s.limit);
  const filters = useCampersStore(s => s.filters);

  const setCampers = useCampersStore(s => s.setCampers);
  const appendCampers = useCampersStore(s => s.appendCampers);
  const resetCampers = useCampersStore(s => s.resetCampers);
  const setPage = useCampersStore(s => s.setPage);

  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (page === 1) {
        setLoadingInitial(true);
      } else {
        setLoadingMore(true);
      }

      try {
        const params = {
          page,
          limit,
          ...filters,
        };
        const { items, total } = await getCampersPaginated(params);
        if (cancelled) return;
        if (page === 1) {
          setCampers(items, total);
        } else {
          appendCampers(items);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (!cancelled) {
          setLoadingInitial(false);
          setLoadingMore(false);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [page, limit, filters, setCampers, appendCampers]);

  const onApplyFilters = (newFilters: Partial<Filters>) => {
    resetCampers();
    useCampersStore.getState().setFilters(newFilters as Filters);
    setPage(1);
  };

  const loadMore = () => setPage(page + 1);

  const showLoadMore =
    campers.length < total &&
    campers.length > 0 &&
    !loadingInitial &&
    !loadingMore;

  return (
    <div>
      <div className={css.wrapper}>
        <FiltersPanel initial={filters} onApply={onApplyFilters} />
        <section>
          {campers.length === 0 && !loadingInitial && <p>No results</p>}
          {campers.map(camper => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        </section>
      </div>

      {showLoadMore && (
        <button className={css.btnloadmore} onClick={loadMore}>
          Load More
        </button>
      )}

      {loadingMore && (
        <button className={css.btnloadmore} disabled>
          Loading...
        </button>
      )}
    </div>
  );
}
