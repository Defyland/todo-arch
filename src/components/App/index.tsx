'use client';

import {IApp} from '@/components/App/App.types';
import {GlobalWrapper} from '@/components/GlobalWrapper';
import {Header} from '@/components/Header';

export const App = ({children}: IApp.IView) => (
    <div data-testid={`App`}>
        <Header />
        <GlobalWrapper.Container>
            <GlobalWrapper.Content>{children}</GlobalWrapper.Content>
        </GlobalWrapper.Container>
    </div>
);
