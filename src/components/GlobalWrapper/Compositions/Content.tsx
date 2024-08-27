import {IGlobalWrapper} from '../GlobalWrapper.types';
import {Styles} from '../GlobalWrapper.styles';

export const Content = ({children}: IGlobalWrapper.IView) => (
    <div data-testid={`GlobalWrapper:Content`} className={Styles.Content}>
        {children}
    </div>
);
