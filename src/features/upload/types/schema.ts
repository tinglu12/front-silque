import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const fileSizeLimit = 100 * 1024 * 1024 * 1024; // 100 GB

export const formSchema = z.object({
  file: z
    .custom<FileList>()
    .refine(
      (fileList) =>
        fileList.length > 0 &&
        Array.from(fileList).every(
          (file) =>
            ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type) &&
            file.size <= fileSizeLimit
        ),
      {
        message: 'Please select at least one file to upload',
      }
    )
    .refine(
      (fileList) =>
        fileList.length > 0 &&
        Array.from(fileList).every((file) => file.size <= fileSizeLimit),
      {
        message: `File size must be less than ${fileSizeLimit / (1024 * 1024 * 1024)} GB`,
      }
    ),
});
