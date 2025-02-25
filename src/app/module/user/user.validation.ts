import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
      invalid_type_error: 'name must be a string',
    }),
    email: z.string({
      required_error: 'email is required',
      invalid_type_error: 'email must be a string',
    }),
    password: z
      .string({
        required_error: 'password is required',
      })
      .min(6, {
        message: 'password must be at least 6 characters',
      }),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
};