import {IGlobalWrapper} from '../GlobalWrapper.types';
import {Styles} from '../GlobalWrapper.styles';

export const Container = ({children}: IGlobalWrapper.IView) => (
    <div data-testid={`GlobalWrapper:Container`} className={Styles.Container}>
        {children}
    </div>
);
