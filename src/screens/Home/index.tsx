'use client';

import {useHomeScreen} from '@/screens/Home/Home.model';
import {Screen} from '@/components/Screen';
import {List} from '@/components/TodoList';

export const HomeScreen = () => {
    const {tasks, deleteTask, selectedTask, editTask} = useHomeScreen();

    return (
        <Screen>
            <List.TodoListHeader />
            <List.TodoListSubheader />
            {tasks.length > 0 ? (
                <List.TodoList>
                    {tasks.map((task, index) => (
                        <List.TodoListItem
                            key={`${task.title}-${index}`}
                            task={task}
                            editTask={() => editTask(index)}
                            selectedTask={() => selectedTask(String(index))}
                            deleteTask={() => deleteTask(String(index))}
                        />
                    ))}
                </List.TodoList>
            ) : (
                <List.TodoEmpty />
            )}
        </Screen>
    );
};
