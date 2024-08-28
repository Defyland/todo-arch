import Users, {createUser} from './Users';
import {IUserState} from '@/utils';

describe('Users slice', () => {
    it('should handle initial state', () => {
        const initialState: IUserState = {
            user: null,
        };
        expect(Users(undefined, {type: 'unknown'})).toEqual(initialState);
    });

    it('should handle createUser', () => {
        const initialState: IUserState = {
            user: null,
        };

        const userPayload = {
            email: 'john.doe@example.com',
            password: '123123123',
        };

        const action = createUser(userPayload);
        const state = Users(initialState, action);

        expect(state.user).toEqual(userPayload);
    });
});
