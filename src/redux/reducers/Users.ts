import {IUserState, UserPayload} from '@/utils';
import {createSlice} from '@reduxjs/toolkit';

const initialState: IUserState = {
    user: null,
};

const Users = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        createUser: (state, {payload}: UserPayload) => {
            state.user = payload;
        },
    },
});

export const {createUser} = Users.actions;

export default Users.reducer;
