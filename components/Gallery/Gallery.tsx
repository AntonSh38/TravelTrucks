'use client';

import { GalleryItem } from '@/lib/types';
import Image from 'next/image';

import css from './Gallery.module.css';

export default function Gallery({ images }: { images: GalleryItem[] }) {
  if (!images || images.length === 0) {
    return <div>No images</div>;
  }
  return (
    <section className={css.section}>
      <div>
        <div className={css.wrap}>
          {images.map((img, i) => (
            <Image
              className={css.img}
              key={i}
              src={img.original}
              alt={`original-${i}`}
              width={292}
              height={312}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
