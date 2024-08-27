import {Styles} from './Header.styles';

export const Header = () => (
    <header data-testid={`Header`} className={Styles.Container}>
        <span className={Styles.Title}>Todo List</span>
    </header>
);
