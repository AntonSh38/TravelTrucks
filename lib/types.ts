export interface ApiPaginatedResponse<T> {
  items: T[];
  total: number;
  page?: number;
  limit?: number;
}

export interface GalleryItem {
  thumb: string;
  original: string;
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment?: string;
}

export interface Camper {
  id: string;
  name: string;
  description: string;
  location: string;
  form: string;
  price: number;
  rating: number;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: 'automatic' | 'manual';
  engine: 'petrol' | 'diesel' | 'hybrid';
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: GalleryItem[];
  reviews: Review[];
}

export interface Filters {
  location?: string;
  form?: string;
  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
  TV: boolean;

  name?: string;
  description?: string;
  rating?: number;
  price: number;

  transmission: string;
  engine: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  from: string;
  to: string;
  message?: string;
}

export type CampersResponse = {
  total: number;
  items: Camper[];
};
