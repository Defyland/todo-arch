import {GenericPayload} from '@/utils/globals/index';
import {ITask} from '@/utils/entities/Task';
import {createSlice} from '@reduxjs/toolkit';

interface ITasks {
    tasks: ITask[];
    currentTask: ITask | null;
}

const initialState: ITasks = {
    tasks: [],
    currentTask: null,
};

const Tasks = createSlice({
    name: 'Tasks',
    initialState,
    reducers: {
        createTask: (state, {payload}: GenericPayload<ITask>) => {
            return {...state, tasks: [...state.tasks, payload]};
        },
        removeTask: (state, {payload}: GenericPayload<ITask>) => {
            return {...state, tasks: [...state.tasks, payload]};
        },
        updateTask: (state, {payload}: GenericPayload<ITask>) => {
            return {...state, tasks: [...state.tasks, payload]};
        },
    },
});

export const {createTask, removeTask, updateTask} = Tasks.actions;

export default Tasks.reducer;
