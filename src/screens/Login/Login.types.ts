import {
    type IControl,
    type ITrigger,
    type IHandlerSubmit,
    type IFormErros,
    type ILoginForm,
} from '@/utils';

export namespace ILogin {
    export type IView = {};
    export type IModelProps = {};
    export type IModel = {
        control: IControl<ILoginForm<string>>;
        trigger: ITrigger<ILoginForm<string>>;
        handleSubmit: IHandlerSubmit<ILoginForm<string>>;
        errors: IFormErros<ILoginForm<string>>;
        onSubmit: (data: ILoginForm<string>) => void;
        isValid: boolean;
    };
}
