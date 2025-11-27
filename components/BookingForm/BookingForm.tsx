'use client';

import toast, { Toaster } from 'react-hot-toast';
import css from './BookingForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar-custom.css';
import { useBookingStore } from '@/store/useBookingStore';

interface BookingFormValues {
  name: string;
  email: string;
  date: Date | null;
  comment: string;
}

type Props = {
  camperId: string;
  price: number;
};

export default function BookingForm({ camperId }: Props) {
  const bookingData = useBookingStore(state => state.forms[camperId]);
  const setField = useBookingStore(state => state.setField);
  const resetFormStore = useBookingStore(state => state.resetForm);
  // const [date, setDate] = useState<Date | null>(null);

  const schema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string(),
  });

  const initialValues: BookingFormValues = {
    name: bookingData?.name || '',
    email: bookingData?.email || '',
    date: bookingData?.date ? new Date(bookingData.date) : null,
    comment: bookingData?.comment || '',
  };

  const handleSubmit = async (
    values: BookingFormValues,
    { resetForm }: FormikHelpers<BookingFormValues>
  ) => {
    await new Promise(r => setTimeout(r, 800));
    toast.success('Booking successfull');

    resetForm();
    resetFormStore(camperId);
  };

  return (
    <div className={css.wrap}>
      <Toaster position="top-right" />
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.field}>
              <Field
                name="name"
                placeholder="Name*"
                className={css.input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue('name', e.target.value);
                  setField(camperId, 'name', e.target.value);
                }}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.field}>
              <Field
                name="email"
                placeholder="Email*"
                className={css.input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue('email', e.target.value);
                  setField(camperId, 'email', e.target.value);
                }}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.field}>
              <DatePicker
                selected={values.date}
                onChange={(val: Date | null) => {
                  setFieldValue('date', val);
                  setField(camperId, 'date', val ? val.toISOString() : null);
                }}
                minDate={new Date()}
                placeholderText="Booking date*"
                dateFormat="dd MM yyyy"
                className={css.input}
                calendarClassName="custom-calendar"
                dayClassName={() => 'custom-day'}
              />
              <ErrorMessage name="date" component="div" className={css.error} />
            </div>

            <div className={css.field}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={css.textarea}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue('comment', e.target.value);
                  setField(camperId, 'comment', e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className={css.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
