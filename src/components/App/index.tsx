'use client';

import { usePathname } from 'next/navigation';
import { IApp } from '@/components/App/App.types';
import { GlobalWrapper } from '@/components/GlobalWrapper';
import { Header } from '@/components/Header';
import { Provider } from 'react-redux';
import store from '@/redux/store';

export const App = ({ children }: IApp.IView) => {
    const pathname = usePathname();
    const isHomePage = pathname === '/list';

    return (
        <div data-testid={`App`}>
            <Provider store={store}>
                {isHomePage ? <Header /> : null }
                <GlobalWrapper.Container>
                    <GlobalWrapper.Content>{children}</GlobalWrapper.Content>
                </GlobalWrapper.Container>
            </Provider>
        </div>
    );
};
