import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BookingData {
  name: string;
  email: string;
  date: string | null;
  comment: string;
}

interface BookingStore {
  forms: Record<string, BookingData>;
  setField: (
    camperId: string,
    field: keyof BookingData,
    value: string | null
  ) => void;
  resetForm: (camperId: string) => void;
}

export const useBookingStore = create<BookingStore>()(
  persist(
    (set, get) => ({
      forms: {},

      setField: (camperId, field, value) => {
        set({
          forms: {
            ...get().forms,
            [camperId]: {
              ...get().forms[camperId],
              [field]: value,
            },
          },
        });
      },
      resetForm: camperId => {
        set({
          forms: {
            ...get().forms,
            [camperId]: {
              name: '',
              email: '',
              date: null,
              comment: '',
            },
          },
        });
      },
    }),
    {
      name: 'booking-form-storage',
    }
  )
);
