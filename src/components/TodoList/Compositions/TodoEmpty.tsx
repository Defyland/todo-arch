import {ITodoList} from '../TodoList.types';
import {Styles} from '../TodoList.styles';

import Image from 'next/image';
import Empty from '@/assets/Empty.png';

export const TodoEmpty = ({children}: ITodoList.IView) => (
    <div className={Styles.TodoEmptyContainer}>
        <Image 
            src={Empty} 
            alt="Logo" 
            className={Styles.TodoEmpty} 
            width={450} 
        />   
    </div>
);

