import {ITodoListItem} from '../TodoList.types';
import {Styles} from '../TodoList.styles';

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
        <div className={Styles.TodoListItemContent}>
            <td className={Styles.TodoListItemCheckContainer}>
                <input
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
        </div>
    </tr>
);
