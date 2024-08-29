import {useState, ChangeEvent, useEffect} from 'react';
import {FilterOption, useAppDispatch, useAppSelector} from '@/utils';
import {
    createTask,
    clearSelection,
    saveTask as rdSaveTask,
} from '@/redux/reducers/Tasks';
import {updateFilter} from '@/redux/reducers/Filters';
import {ITodoListItem} from './TodoList.types';

export const useTodoList = (): ITodoListItem.IModel => {
    const dispatch = useAppDispatch();
    const [input, setInput] = useState('');

    const {options, filter: selectedFilter} = useAppSelector(
        state => state.Filters
    );

    const currentTask = useAppSelector(state => state.Tasks.currentTask);

    const changeFilter = (filter: FilterOption) => {
        dispatch(updateFilter(filter));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    useEffect(() => {
        if (input === '') {
            dispatch(clearSelection());
        }
    }, [input, dispatch]);

    useEffect(() => {
        if (currentTask) {
            setInput(currentTask.title);
        }
    }, [currentTask]);

    const formSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (input === '') return;

        if (currentTask) {
            dispatch(
                rdSaveTask({
                    title: input,
                    completed: Boolean(currentTask?.completed),
                })
            );
        } else {
            dispatch(
                createTask({
                    title: input,
                    completed: false,
                })
            );
        }
        setInput('');
    };

    return {
        input,
        setInput,
        handleInputChange,
        options,
        changeFilter,
        formSubmit,
        selectedFilter,
    };
};
