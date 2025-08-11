'use client';

import { Input } from '@/components/ui/input';
import React, { useRef, useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { api } from '@/lib/api-client';
import { AxiosError } from 'axios';
import { formSchema } from '@/features/upload/types/schema';
import UploadArea from './UploadArea';

const UploadForm = () => {
  const uploadRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleFilesChange = (files: File[]) => {
    setFiles(files);
  };

  const handleUpload = () => {
    uploadRef.current?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, field: any) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    field.onChange(files);
    setFiles(Array.from(files));
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: undefined,
    },
  });

  const handleFormSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      for (const file of Array.from(data.file)) {
        console.log(file);
        formData.append('files', file);
      }

      const response = await api.post('/v1/upload', formData);
      console.log('Success:', response);
    } catch (error) {
      // Log the full error details
      console.error('Upload failed:', error);
      if (error instanceof AxiosError) {
        console.error('Error status:', error.response?.status);
        console.error('Error data:', error.response?.data);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-4 h-full justify-between"
      >
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem className="h-full w-full items-center justify-center flex flex-col">
              <FormControl>
                <Input
                  ref={uploadRef}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  multiple
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      field.onChange(e.target.files);
                      handleFilesChange(Array.from(e.target.files));
                    }
                  }}
                  className="sr-only"
                />
              </FormControl>
              <UploadArea
                handleDrop={handleDrop}
                field={field}
                handleUpload={handleUpload}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4 cursor-pointer">
          Upload
        </Button>
        <FormMessage />
      </form>
    </Form>
  );
};

export default UploadForm;
