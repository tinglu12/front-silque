import { useGetClothes } from '@/features/clothes-display/lib/queries';
import React from 'react';
import ClothesItem from './ClothesItem';
import { Clothes, ClothesDTO } from '../types/clothes';

const ClothesDisplay = () => {
  const { data } = useGetClothes();
  const clothes = data?.data || [];

  return (
    <div className="flex flex-col gap-4">
      {clothes.map((clothes: ClothesDTO) => (
        <ClothesItem key={clothes.id} clothes={clothes} />
      ))}
    </div>
  );
};

export default ClothesDisplay;
