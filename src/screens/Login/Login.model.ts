import {useAppDispatch, useAppSelector} from '@/utils';
import {createUser} from '@/redux/reducers/Users';
import {ILogin} from './Login.types';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {ILoginForm, loginSchema} from '@/utils';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

export const useLoginScreen = (): ILogin.IModel => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.Users.user);

    useEffect(() => {
        if (user) {
            router.push('/list');
        }
    }, [user, router]);

    const {
        control,
        trigger,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (params: ILoginForm<string>) => {
        dispatch(createUser(params));
        router.push('/list');
    };

    return {
        control,
        trigger,
        handleSubmit,
        errors,
        isValid,
        onSubmit,
    };
};
