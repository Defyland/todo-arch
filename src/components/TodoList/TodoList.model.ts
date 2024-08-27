import {useState, ChangeEvent} from 'react';
import {useAppDispatch, useAppSelector} from '@/utils';
import {createTask} from '@/redux/reducers/Tasks';

export const useTodoList = () => {
    const dispatch = useAppDispatch();
    const [input, setInput] = useState('');

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

    return {saveTask, input, setInput, handleInputChange};
};
