'use client';

import {IApp} from '@/components/App/App.types';
import {GlobalWrapper} from '@/components/GlobalWrapper';
import {Header} from '@/components/Header';
import {Provider} from 'react-redux';
import store from '@/redux/store';

export const App = ({children}: IApp.IView) => (
    <div data-testid={`App`}>
        <Provider store={store}>
            <Header />
            <GlobalWrapper.Container>
                <GlobalWrapper.Content>{children}</GlobalWrapper.Content>
            </GlobalWrapper.Container>
        </Provider>
    </div>
);
