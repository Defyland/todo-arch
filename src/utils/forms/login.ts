import {type ISchema, type ILoginForm} from '@/utils/forms/interfaces';
import * as yup from 'yup';

const exec = (): ISchema<ILoginForm<string>, ILoginForm<any>> => {
    return yup.object().shape({
        email: yup
            .string()
            .trim()
            .lowercase()
            .required('E-mail é obrigatório')
            .email('Formato inválido'),
        password: yup.string().required('Senha é obrigatório'),
    });
};

export const loginSchema = exec();
