import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { Clothes } from '../types/clothes';

const ClothesItem = ({ clothes }: { clothes: Clothes }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Clothes Item</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Image
            src={clothes.image}
            alt="Clothes Item"
            width={100}
            height={100}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ClothesItem;
