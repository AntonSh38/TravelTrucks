'use client';

import SvgIcon from '../SvgIcon/SvgIcon';
import css from './RatingStars.module.css';

type Props = {
  reviews: {
    reviewer_rating: number;
  }[];
};

export default function RatingStars({ reviews }: Props) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className={css.rating}>
        <SvgIcon name="icon-Star" size={16} color="#DADDE1" />
        <span className={css.text}>No reviews yet</span>
      </div>
    );
  }

  const averageRating =
    reviews.reduce((sum, r) => sum + r.reviewer_rating, 0) / reviews.length;
  const formattedRating = averageRating.toFixed(1);
  const reviewsCount = reviews.length;

  return (
    <div className={css.rating}>
      <SvgIcon
        name="icon-Star-fill"
        size={16}
        color="#FFC107"
        className={css.star}
      />
      <span className={css.text}>
        {formattedRating}
        <span className={css.reviews}>
          ({reviewsCount} {reviewsCount === 1 ? 'Review' : 'Reviews'})
        </span>
      </span>
    </div>
  );
}
