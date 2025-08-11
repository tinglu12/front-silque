import ClothesDisplay from '@/features/clothes-display/components/ClothesDisplay';
import { UploadDialog } from '@/features/upload/components/UploadDialog';
import React from 'react';

const Dashboard = () => {
  return (
    <section className="flex flex-col gap-4">
      <UploadDialog />
      <ClothesDisplay />
    </section>
  );
};

export default Dashboard;
