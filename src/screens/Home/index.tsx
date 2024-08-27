'use client';

import {IHome} from '@/screens/Home/Home.types';
import {useHomeScreen} from '@/screens/Home/Home.model';
import {Screen} from '@/components/Screen';
import {List} from '@/components/TodoList';

export const HomeScreen = (props: IHome.IView) => {
    const {tasks, deleteTask, selectedTask} = useHomeScreen();

    return (
        <Screen>
            <List.TodoListHeader />
            <List.TodoList>
                {tasks.map((task, index) => (
                    <List.TodoListItem
                        key={`${task.title}${index}`}
                        task={task}
                        selectedTask={() => selectedTask(String(index))}
                        deleteTask={() => deleteTask(String(index))}
                    />
                ))}
            </List.TodoList>
        </Screen>
    );
};
