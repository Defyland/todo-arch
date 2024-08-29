'use client';

import Image from 'next/image';
import { useLoginScreen } from './Login.model';
import { Styles } from './Login.styles';
import { Screen } from '@/components/Screen';
import { Controller } from 'react-hook-form';
import Logo from '@/assets/logo.png';


export const LoginScreen = () => {
    const { control, trigger, handleSubmit, errors, isValid, onSubmit } =
        useLoginScreen();

    return (
        <Screen>
            <div className={Styles.Container}>
                <div className={Styles.Branding}>
                    <Image 
                        src={Logo} 
                        alt="Logo" 
                        className={Styles.Logo} 
                        width={30} 
                    />                    
                    <h1 className={Styles.Title}>Bem-vindo ao TODO LIST</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={Styles.Form} style={{ backgroundColor: 'rgba(63, 63, 63, 0.85)' }}
>
                    <div className={Styles.InputContainer}>
                        <Controller
                            control={control}
                            name="email"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <input
                                    className={Styles.Input}
                                    type="text"
                                    placeholder="E-mail"
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <span className={Styles.ErrorMessage} style={{minHeight: "2rem"}}>{errors.email?.message}</span>
                    </div>
                    <div className={Styles.InputContainer}>
                        <Controller
                            control={control}
                            name="password"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <input
                                    className={Styles.Input}
                                    type="password"
                                    placeholder="Senha"
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <span className={Styles.ErrorMessage} style={{minHeight: "2rem"}}>{errors.password?.message}</span>
                    </div>
                    <button type="submit" className={Styles.Btn}>
                        Entrar!
                    </button>
                </form>
            </div>
        </Screen>
    );
};
