import {Styles} from '../TodoList.styles';
import {useTodoList} from '../TodoList.model';

export const TodoListHeader = () => {
    const {handleInputChange, input, formSubmit} = useTodoList();
    return (
        <form
            onSubmit={formSubmit}
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
                    data-testid={`TodoListHeader:btn`}
                    className={Styles.TodoListHeaderBtn}
                    type="submit"
                    value="Salvar"
                />
            </div>
        </form>
    );
};
