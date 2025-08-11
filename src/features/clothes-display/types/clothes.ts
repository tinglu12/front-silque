import { UUID } from 'crypto';

export interface Clothes {
  id: string;
  name: string;
  image: string;
  price: number;
  size: string;
  color: string;
  category: string;
  description: string;
}
