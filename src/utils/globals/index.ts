import {PayloadAction} from '@reduxjs/toolkit';

export type withChildren<T = {}> = T & {children?: React.ReactNode};

export type GenericPayload<T> = PayloadAction<T>;

export type StringPayload = GenericPayload<string>;
export type NumberPayload = GenericPayload<number>;

export enum FilterOption {
    All = 'all',
    Completed = 'completed',
    Uncompleted = 'uncompleted',
}

export type IFilterOption = FilterOption;
