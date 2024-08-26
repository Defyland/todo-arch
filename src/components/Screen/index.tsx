'use client';

import {IScreen} from '@/components/Screen/Screen.types';
import {Styles} from '@/components/Screen/Screen.styles';

export const Screen = ({children}: IScreen.IView) => (
    <div data-testid={`Screnn`} className={Styles.Container}>
        {children}
    </div>
);
