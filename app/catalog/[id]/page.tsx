import BookingForm from '@/components/BookingForm/BookingForm';
import DetailsSection from '@/components/DetailsSection/DetailsSection';
import FeaturesSection from '@/components/FeaturesSection/FeaturesSection';
import Gallery from '@/components/Gallery/Gallery';
import RatingStars from '@/components/RatingStars/RatingStars';
import ReviewsSection from '@/components/ReviewsSection/ReviewsSection';
import TabPanel from '@/components/TabPanel/TabPanel';
import Tabs from '@/components/Tabs/Tabs';
import { getCamperById } from '@/lib/api';
import { notFound } from 'next/navigation';
import css from './pageid.module.css';

type Props = { params: { id: string } };

export default async function CamperDetailPage({ params }: Props) {
  const { id } = await params;
  let camper;
  try {
    camper = await getCamperById(id);
  } catch (err) {
    console.error(err);
    return notFound();
  }

  if (!camper) return notFound();

  return (
    <div>
      <header>
        <h1>{camper.name}</h1>
        <p>{camper.location}</p>
        <p>{(camper.price ?? 0).toFixed(2)}</p>
        <RatingStars reviews={camper.reviews ?? []} />
      </header>
      <Gallery images={camper.gallery ?? []} />

      <aside className={css.wrap}>
        <div>
          <Tabs initial="Features">
            <TabPanel label="Features">
              <div className={css.featuresWrapper}>
                <FeaturesSection camper={camper} />
                <DetailsSection camper={camper} />
              </div>
            </TabPanel>

            <TabPanel label="Reviews">
              <ReviewsSection reviews={camper.reviews ?? []} />
            </TabPanel>
          </Tabs>
        </div>
        <div>
          <BookingForm camperId={camper.id} price={camper.price ?? 0} />
        </div>
      </aside>
    </div>
  );
}
