import {Styles} from './Header.styles';
import Logo from '@/assets/logo.png';
import Image from 'next/image';

export const Header = () => (
    <header data-testid={`Header`} className={Styles.Container}>
        <Image 
            src={Logo} 
            alt="Logo" 
            className={Styles.Logo} 
            width={30} 
        />    
        <span className={Styles.Title}>TODO LIST</span>
    </header>
);
