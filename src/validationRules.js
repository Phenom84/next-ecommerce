import { object, string } from 'yup';

export const schema = object({
  name: string().required().min(2).max(50),
  email: string()
    .email()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    .required()
    .min(6)
    .max(50),
  tel: string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g)
    .min(6)
    .max(20),
  message: string().required().min(2),
  'g-recaptcha-response': string().required(),
});
