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

export interface ProfilePayload {
  full_name: string;
  email: string;
  address: string;
  phone_number: string;
  password: string;
}

interface BorrowBook {
  id: number
  title: string
  cover_image: string
}
interface BorrowUser {
  id: number,
  full_name: string
}
export interface Borrow {
  id: number,
  borrow_date: string,
  due_date: string,
  return_date: null,
  book: BorrowBook,
  user: BorrowUser
}
