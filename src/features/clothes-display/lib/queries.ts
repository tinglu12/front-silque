import { useQuery } from '@tanstack/react-query';
import { getClothes } from '../api/clothesAPI';

export const useGetClothes = () => {
  return useQuery({
    queryKey: ['clothes'],
    queryFn: getClothes,
    staleTime: 1000 * 60 * 5,
  });
};
