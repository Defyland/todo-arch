import {GenericPayload} from '@/utils/globals';

export type IUser = {
    email: string;
    password: string;
};

export type IUserState = {
    user: IUser | null;
};

export type UserPayload = GenericPayload<IUser>;
