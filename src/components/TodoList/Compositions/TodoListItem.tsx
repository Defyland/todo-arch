import {ITodoListItem} from '@/components/TodoList/TodoList.types';
import {Styles} from '@/components/TodoList/TodoList.styles';

export const TodoListItem = ({
    task,
    deleteTask,
    selectedTask,
}: ITodoListItem.IView) => (
    <tr
        onClick={selectedTask}
        data-testid={`TodoListItem`}
        className={Styles.TodoListItemContainer}
    >
        <td className={Styles.TodoListItemContent}>
            <input
                onChange={() => {}}
                id="blue-checkbox"
                type="checkbox"
                checked={task.completed}
                className={Styles.TodoListItemCheck}
            />
        </td>
        <td className={Styles.TodoListItemTitle}>{task.title}</td>
        <td className={Styles.TodoListItemAction}>
            <button
                onClick={deleteTask}
                type="button"
                className={Styles.TodoListItemButton}
            >
                Remover
            </button>
        </td>
    </tr>
);
