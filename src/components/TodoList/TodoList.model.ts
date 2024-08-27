import {useState, ChangeEvent} from 'react';
import {FilterOption, useAppDispatch, useAppSelector} from '@/utils';
import {createTask} from '@/redux/reducers/Tasks';
import {updateFilter} from '@/redux/reducers/Filters';

export const useTodoList = () => {
    const dispatch = useAppDispatch();
    const [input, setInput] = useState('');

    const {options, filter: selectedFilter} = useAppSelector(
        state => state.Filters
    );

    const changeFilter = (filter: FilterOption) => {
        dispatch(updateFilter(filter));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const saveTask = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (input === '') return;

        dispatch(
            createTask({
                title: input,
                completed: false,
            })
        );

        setInput('');
    };

    return {
        saveTask,
        input,
        setInput,
        handleInputChange,
        options,
        changeFilter,
        selectedFilter,
    };
};
