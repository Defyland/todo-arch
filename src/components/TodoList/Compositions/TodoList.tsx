import {ITodoList} from '@/components/TodoList/TodoList.types';
import {Styles} from '@/components/TodoList/TodoList.styles';

export const TodoList = ({children}: ITodoList.IView) => (
    <div data-testid={`TodoList`} className={Styles.TodoListContainer}>
        <div className={Styles.TodoListContent}>
            <div className={Styles.TodoListInside}>
                <div className={Styles.TodoListWrapper}>
                    <table className={Styles.TodoListTable}>
                        <tbody>{children}</tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);
