import { UUID } from 'crypto';

export interface Clothes {
  id: UUID;
  name: string;
  image: string;
  price: number;
  size: string;
  color: string;
  category: string;
  description: string;
}

export interface ClothesDTO {
  id: UUID;
  imageURL: string;
  createdAt: string;
  updatedAt: string;
}
