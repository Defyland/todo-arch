import {ITodoListItem} from '../TodoList.types';
import {Styles} from '../TodoList.styles';

export const TodoListItem = ({
    task,
    deleteTask,
    selectedTask,
    editTask,
}: ITodoListItem.IView) => (
    <tr data-testid={`TodoListItem`} className={Styles.TodoListItemContainer}>
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
                    onClick={selectedTask}
                    type="button"
                    className={
                        Styles.TodoListItemButton + Styles.TodoListItemOk
                    }
                    data-testid={`TodoListItem:${task.completed ? `undone` : 'done'}`}
                >
                    {task.completed ? `Reabrir` : 'Concluir'}
                </button>
                <button
                    onClick={editTask}
                    type="button"
                    className={
                        Styles.TodoListItemButton + Styles.TodoListItemDefault
                    }
                >
                    Editar
                </button>
                <button
                    onClick={deleteTask}
                    type="button"
                    className={
                        Styles.TodoListItemButton + Styles.TodoListItemDanger
                    }
                >
                    Remover
                </button>
            </td>
        </div>
    </tr>
);
