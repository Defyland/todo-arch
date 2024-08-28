import {IScreen} from './Screen.types';
import {Styles} from './Screen.styles';

export const Screen = ({children}: IScreen.IView) => (
    <div data-testid={`Screen`} className={Styles.Container}>
        {children}
    </div>
);
