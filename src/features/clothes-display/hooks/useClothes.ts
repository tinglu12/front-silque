import { Clothes } from '@/features/clothes-display/types/clothes';
import { api } from '@/lib/api-client';
import { useEffect, useState } from 'react';

const useClothes = () => {
  const [clothes, setClothes] = useState<Clothes[]>([]);

  useEffect(() => {
    const fetchClothes = async () => {
      const response = await api.get('/clothes');
    };
  }, []);
};
