import { z } from 'zod'

// register form schema for registration page
export const registerFormSchema = z
  .object({
    fullName: z
      .string()
      .min(2, { message: 'Name is too short' })
      .max(50, { message: 'Name is too long' }),
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z
      .string()
      .min(5, { message: 'Password is too short' })
      .max(20, { message: 'Password is too long' }),
    confirmPassword: z
      .string()
      .min(5, { message: 'Password is too short' })
      .max(20, { message: 'Password is too long' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
