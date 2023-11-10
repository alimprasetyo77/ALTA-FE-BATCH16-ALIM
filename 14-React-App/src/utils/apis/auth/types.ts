export interface authLogin {
  username: string;
  password: string;
}

export interface authRegister {
  full_name: string,
  email: string,
  password: string,
  role: string,
  address: string,
  phone_number: string
}