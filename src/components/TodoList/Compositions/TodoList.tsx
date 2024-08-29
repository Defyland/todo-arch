import {ITodoList} from '../TodoList.types';
import {Styles} from '../TodoList.styles';

export const TodoList = ({children}: ITodoList.IView) => (
    <div data-testid={`TodoList`} className={Styles.TodoListContainer}>
        <div className={Styles.TodoListContent}>
            <div className={Styles.TodoListInside}>
                <div className={Styles.TodoListWrapper}>
                    <table className={Styles.TodoListTable}>
                        <tbody className={Styles.TodoListTableTbody}>{children}</tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);
