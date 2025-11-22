import axios from 'axios';
import { ApiPaginatedResponse, Camper, Filters } from './types';

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export const getCampers = async (
  params?: Filters | Record<string, string | number | boolean | undefined>
): Promise<Camper[]> => {
  const res = await api.get<ApiPaginatedResponse<Camper>>('/campers', {
    params,
  });
  return res.data.items ?? [];
};

export const getCamperById = async (id: string): Promise<Camper | null> => {
  try {
    const res = await api.get<Camper>(`/campers/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching camper ${id}:`, error);
    return null;
  }
};

export const getCampersPaginated = async (
  params?: Filters & { page?: number; limit?: number }
): Promise<ApiPaginatedResponse<Camper>> => {
  const res = await api.get<ApiPaginatedResponse<Camper>>('/campers', {
    params,
  });
  return res.data;
};
