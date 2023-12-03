import {z} from 'zod';
import {capitalizeFirstLetter} from '@/common/utils/stringUtils';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{5,29}$/gim;

export const signUpSchema = z.object({
  username: z
    .string()
    .min(5, 'username muito curto')
    .regex(userNameRegex, 'username inválido')
    .toLowerCase(),
  firstName: z
    .string()
    .min(5, 'nome muito curto')
    .max(50, 'nome muito longo')
    .transform(capitalizeFirstLetter),
  lastName: z
    .string()
    .min(5, 'nome muito curto')
    .max(50, 'nome muito longo')
    .transform(capitalizeFirstLetter),
  email: z.string().email('email inválido'),
  password: z.string().min(8, 'senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
