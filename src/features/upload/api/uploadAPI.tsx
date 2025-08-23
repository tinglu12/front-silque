import { api } from '@/lib/api-client';

export const uploadClothes = async (formData: FormData) => {
  try {
    const response = await api.post('/v1/upload', formData);
    return response;
  } catch (error) {
    console.error('Error uploading clothes:', error);
    throw error;
  }
};
