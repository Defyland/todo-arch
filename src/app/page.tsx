'use client';

import {Screen} from '@/components/Screen';
import {List} from '@/components/TodoList';
import {useAppDispatch, useAppSelector} from '@/utils';
import {createTask} from '@/redux/reducers/Tasks';

export default function Home() {
    const dispatch = useAppDispatch();
    const {tasks} = useAppSelector(state => state.Tasks);

    console.log({tasks});

    const press = () => {
        dispatch(
            createTask({
                title: 'Task',
                completed: false,
            })
        );
    };

    return (
        <Screen>
            <button onClick={press}>Click</button>
            <List.TodoList>
                {tasks.map((task, index) => (
                    <List.TodoListItem
                        key={`${task.title}${index}`}
                        task={task}
                    />
                ))}
            </List.TodoList>
        </Screen>
    );
}
