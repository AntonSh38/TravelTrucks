'use client';

import { Review } from '@/lib/types';
import css from './ReviewsSection.module.css';
import SvgIcon from '../SvgIcon/SvgIcon';

type Props = {
  reviews: Review[];
};

export default function ReviewsSection({ reviews }: Props) {
  if (!reviews || reviews.length === 0)
    return <p className={css.noReviews}>No reviews yet.</p>;

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {reviews.map((review, index) => {
          const firstLetter = review.reviewer_name.charAt(0).toUpperCase();
          return (
            <li key={review.reviewer_name + index} className={css.reviewItem}>
              <div className={css.header}>
                <div className={css.avatar}>
                  <span className={css.letter}>{firstLetter}</span>
                </div>

                <div className={css.info}>
                  <h4 className={css.name}>{review.reviewer_name}</h4>
                  <div className={css.stars}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <SvgIcon
                        key={i}
                        name={
                          i < review.reviewer_rating
                            ? 'icon-Star-fill'
                            : 'icon-Star'
                        }
                        size={16}
                        color={
                          i < review.reviewer_rating ? '#FFC107' : '#DADDE1'
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
