'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useState } from 'react';
import UploadForm from './UploadForm';

export const UploadDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Upload File</Button>
      </DialogTrigger>
      <DialogContent
        aria-describedby="upload-dialog-description"
        className="flex flex-col min-w-[80vw] h-[80vh]"
      >
        <DialogHeader>
          <DialogTitle>Upload Clothes</DialogTitle>
        </DialogHeader>
        <UploadForm />
      </DialogContent>
    </Dialog>
  );
};
