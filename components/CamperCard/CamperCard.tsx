import { Camper } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import css from './CamperCard.module.css';

export default function CamperCard({ camper }: { camper: Camper }) {
  const image = camper.gallery?.[0]?.thumb ?? camper.gallery?.[0]?.original;
  return (
    <article className={css.article}>
      <Image
        className={css.imagecar}
        src={image}
        width={292}
        height={320}
        alt={camper.name}
      />
      <div className={css.wrappertext}>
        {/* <FavoritButton camperId={camper.id} /> */}
        <h3 className={css.title}>{camper.name}</h3>
        <p className={css.textlocation}>{camper.location}</p>
        <p className={css.textprice}>€{(camper.price ?? 0).toFixed(2)}</p>
        <Link href={`/catalog/${camper.id}`}>
          <button className={css.btnshowmore} type="button">
            Show more
          </button>
        </Link>
      </div>
    </article>
  );
}
