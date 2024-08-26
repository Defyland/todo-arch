import {PayloadAction} from '@reduxjs/toolkit';

export type withChildren<T = {}> = T & {children?: React.ReactNode};

export type GenericPayload<T> = PayloadAction<T>;
