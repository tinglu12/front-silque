import { api } from '@/lib/api-client';
import { ClothesDTO } from '../types/clothes';

export const getClothes = async () => {
  try {
    const response = await api.get<ClothesDTO[]>('/v1/clothes/');
    return response;
  } catch (error) {
    console.error('Error fetching clothes:', error);
    throw error;
  }
};
