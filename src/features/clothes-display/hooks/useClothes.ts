import { useGetClothes } from '@/features/clothes-display/lib/queries';
import { ClothesDTO } from '@/features/clothes-display/types/clothes';

const useClothes = () => {
  const { data: clothes = [] } = useGetClothes();

  return { clothes };
};
