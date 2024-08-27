import {ITasksState, StringPayload, TaskPayload} from '@/utils';
import {createSlice} from '@reduxjs/toolkit';

const initialState: ITasksState = {
    tasks: [],
    currentTask: null,
};

const Tasks = createSlice({
    name: 'Tasks',
    initialState,
    reducers: {
        createTask: (state, {payload}: TaskPayload) => {
            state.tasks = [payload, ...state.tasks];
        },
        removeTask: (state, {payload}: StringPayload) => {
            state.tasks = state.tasks.filter(
                (_, index) => String(index) !== payload
            );
        },
        checkTask: (state, {payload}: StringPayload) => {
            state.tasks = state.tasks.map((task, id) => {
                if (String(id) === payload) {
                    task.completed = !task.completed;
                }
                return task;
            });
        },
    },
});

export const {createTask, removeTask, checkTask} = Tasks.actions;

export default Tasks.reducer;
