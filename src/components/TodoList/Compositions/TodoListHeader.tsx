import {Styles} from '../TodoList.styles';
import {useTodoList} from '../TodoList.model';

export const TodoListHeader = () => {
    const {saveTask, handleInputChange, input} = useTodoList();
    return (
        <form
            onSubmit={saveTask}
            data-testid={`TodoListHeader`}
            className={Styles.TodoListHeaderContainer}
        >
            <div className={Styles.TodoListHeaderContent}>
                <input
                    className={Styles.TodoListHeaderInput}
                    type="text"
                    placeholder="Passear com o cachorro"
                    aria-label="task title"
                    value={input}
                    onChange={handleInputChange}
                />
                <input
                    className={Styles.TodoListHeaderBtn}
                    type="submit"
                    value="Salvar"
                />
            </div>
        </form>
    );
};
