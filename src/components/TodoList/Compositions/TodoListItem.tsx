import {ITodoListItem} from '@/components/TodoList/TodoList.types';
import {Styles} from '@/components/TodoList/TodoList.styles';

export const TodoListItem = ({task}: ITodoListItem.IView) => (
    <tr data-testid={`TodoListItem`} className={Styles.TodoListItemContainer}>
        <td className={Styles.TodoListItemContent}>
            <input
                defaultChecked={task.completed}
                id="blue-checkbox"
                type="checkbox"
                className={Styles.TodoListItemCheck}
            />
        </td>
        <td className={Styles.TodoListItemTitle}>{task.title}</td>
        <td className={Styles.TodoListItemAction}>
            <button type="button" className={Styles.TodoListItemButton}>
                Remover
            </button>
        </td>
    </tr>
);
