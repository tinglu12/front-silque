'use client';

import { Input } from '@/components/ui/input';
import React from 'react';
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

const fileSizeLimit = 100 * 1024 * 1024 * 1024; // 100 GB

const formSchema = z.object({
  file: z
    .instanceof(File)
    .refine(
      (file) => ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type),
      {
        message: 'Please select at least one file to upload',
      }
    )
    .refine((file) => file.size <= fileSizeLimit, {
      message: `File size must be less than ${fileSizeLimit / (1024 * 1024 * 1024)} GB`,
    }),
});

const UploadForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: undefined,
    },
  });

  const handleFormSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append('files', data.file);

      // Log what we're sending
      console.log(
        'File being uploaded:',
        data.file.name,
        data.file.size,
        data.file.type
      );

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
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="file"
                  accept=".jpg,.jpeg,.png,.csv"
                  multiple
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      field.onChange(e.target.files[0]);
                    }
                  }}
                />
              </FormControl>
              <FormDescription>Upload your clothes.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
        <FormMessage />
      </form>
    </Form>
  );
};

export default UploadForm;
