import * as z from "zod";

export const borrowSchema = z.object({
  bookId: z.number({ required_error: "Book ID is required" }).array(),
  borrow_date: z.date({
    required_error: "Borrow date is required",
  }),
});

export const borrowPayload = z.object({
  borrow_date: z.date({
    required_error: "Borrow date is required",
  }),

  due_date: z.date({
    required_error: "Due date is required",
  }),

  return_date: z.date().optional(),
});

export type BorrowSchema = z.infer<typeof borrowSchema>;
export type BorrowPayload = z.infer<typeof borrowPayload>;



export interface Borrow {
  id: number;
  borrow_date: Date;
  due_date: Date;
  return_date: Date;
  book: {
    id: number;
    title: string;
    cover_image: string;
  };
  user: {
    id: number;
    full_name: string;
  };
}

export interface DetailBorrow {
  id: number,
  userId: number,
  bookId: number,
  borrow_date: string,
  due_date: string
  return_date: null
}