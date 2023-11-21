import { loginSchema, registerSchema, LoginSchema, RegisterSchema, } from "./types";
import { handleLogin, handleRegister } from "./api"

export { handleLogin, handleRegister, loginSchema, registerSchema }
export type { LoginSchema, RegisterSchema };
