import {ITodoListItem} from '../TodoList.types';
import {Styles} from '../TodoList.styles';

export const TodoListItem = ({
    task,
    deleteTask,
    selectedTask,
    editTask,
}: ITodoListItem.IView) => (
    <tr data-testid={`TodoListItem`} className={task.completed ? Styles.TodoListItemContainerCompleted : Styles.TodoListItemContainerPending}>
        <div className={Styles.TodoListItemContent}>
            <td className={Styles.TodoListItemTitle}>{task.title}</td>
            <td className={Styles.TodoListItemAction}>
                <button
                    onClick={selectedTask}
                    type="button"
                    className={
                        task.completed 
                        ? Styles.TodoListItemButton + Styles.TodoListItemReopen
                        : Styles.TodoListItemButton + Styles.TodoListItemOk
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
