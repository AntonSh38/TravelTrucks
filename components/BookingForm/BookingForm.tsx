'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './BookingForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar-custom.css';

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

export default function BookingForm({ camperId, price }: Props) {
  const [date, setDate] = useState<Date | null>(null);

  const schema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string(),
  });

  const handleSubmit = async (
    values: BookingFormValues,
    { resetForm }: FormikHelpers<BookingFormValues>
  ) => {
    await new Promise(r => setTimeout(r, 800));
    toast.success('Booking successfull');

    resetForm();
    setDate(null);
  };

  return (
    <div className={css.wrap}>
      <Toaster position="top-right" />
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          date: null as Date | null,
          comment: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.field}>
              <Field name="name" placeholder="Name*" className={css.input} />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.field}>
              <Field name="email" placeholder="Email*" className={css.input} />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.field}>
              <DatePicker
                selected={date}
                onChange={(val: Date | null) => {
                  setDate(val);
                  setFieldValue('date', val);
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
