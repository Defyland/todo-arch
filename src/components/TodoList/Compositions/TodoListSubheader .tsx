import {Styles} from '../TodoList.styles';
import {useTodoList} from '../TodoList.model';
import {translateFilters} from '@/utils';

export const TodoListSubheader = () => {
    const {options, changeFilter, selectedFilter} = useTodoList();
    return (
        <div
            data-testid={`TodoListSubheader`}
            className={Styles.TodoListSubheaderContainer}
        >
            {options.map(option => (
                <button
                    key={option}
                    onClick={() => changeFilter(option)}
                    className={
                        selectedFilter === option
                            ? Styles.TodoListSubheaderBtnSelected
                            : Styles.TodoListSubheaderBtn
                    }
                >
                    {translateFilters(option)}
                </button>
            ))}
        </div>
    );
};
