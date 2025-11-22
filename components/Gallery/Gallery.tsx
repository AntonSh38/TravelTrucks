'use client';

import { GalleryItem } from '@/lib/types';
import Image from 'next/image';
import { useState } from 'react';

export default function Gallery({ images }: { images: GalleryItem[] }) {
  const [active, setActive] = useState<number>(0);

  if (!images || images.length === 0) {
    return <div>No images</div>;
  }
  return (
    <section>
      <div>
        <Image
          src={images[active].original}
          alt={`image-${active}`}
          width={600}
          height={400}
        />
        <div>
          {images.map((img, i) => (
            <Image
              key={i}
              src={img.thumb}
              alt={`thumb-${i}`}
              width={100}
              height={70}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
