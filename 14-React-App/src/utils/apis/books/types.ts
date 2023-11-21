import * as z from "zod";

export const createBookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  isbn: z.string().regex(/^(978|979)/u, "The ISBN format is invalid").min(13, "ISBN Minimum length is 13"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required")
})

export interface Book {
  id: number;
  title: string;
  featured: boolean;
  author: string;
  isbn: string;
  category: string;
  description: string;
  cover_image: string;
}

export type CreateBookSchema = z.infer<typeof createBookSchema>;