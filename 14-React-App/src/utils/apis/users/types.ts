import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];


export const profileUpdateSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  full_name: z.string().min(1, { message: "Full name is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  phone_number: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  profile_picture: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max image size is 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    ),
});

export type ProfileUpdateType = z.infer<typeof profileUpdateSchema>;

export interface ProfilePayload {
  full_name: string;
  email: string;
  address: string;
  phone_number: string;
  password: string;
}
export interface Profile {
  id: number;
  full_name: string;
  email: string;
  role: string;
  profile_picture: string;
  address: string;
  phone_number: string;
  password?: string;
}

interface BorrowBook {
  id: number;
  title: string;
  cover_image: string;
}
interface BorrowUser {
  id: number;
  full_name: string;
}
export interface Borrow {
  id: number;
  borrow_date: string;
  due_date: string;
  return_date: null;
  book: BorrowBook;
  user: BorrowUser;
}
