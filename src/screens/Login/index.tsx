'use client';

import {useLoginScreen} from './Login.model';
import {Styles} from './Login.styles';
import {Screen} from '@/components/Screen';
import {Controller} from 'react-hook-form';

export const LoginScreen = () => {
    const {control, trigger, handleSubmit, errors, isValid, onSubmit} =
        useLoginScreen();

    return (
        <Screen>
            <div className={Styles.Container}>
                <div className={Styles.InputContainer}>
                    <Controller
                        control={control}
                        name="email"
                        defaultValue=""
                        render={({field: {onChange, value}}) => (
                            <input
                                className={Styles.Input}
                                type="text"
                                placeholder="E-mail"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                </div>
                <span>{errors.email?.message}</span>
                <div className={Styles.InputContainer}>
                    <Controller
                        control={control}
                        name="password"
                        defaultValue=""
                        render={({field: {onChange, value}}) => (
                            <input
                                className={Styles.Input}
                                type="password"
                                placeholder="Senha"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                </div>
                <span>{errors.password?.message}</span>
                <input
                    className={Styles.Btn}
                    data-testid={`TodoListHeader:btn`}
                    onClick={handleSubmit(onSubmit)}
                    type="submit"
                    value="Login"
                />
            </div>
        </Screen>
    );
};
