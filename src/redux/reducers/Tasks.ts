import {ITasksState, NumberPayload, StringPayload, TaskPayload} from '@/utils';
import {createSlice, current} from '@reduxjs/toolkit';

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
        editTask: (state, {payload}: NumberPayload) => {
            state.currentTask = state.tasks[payload];
        },
        saveTask: (state, {payload}: TaskPayload) => {
            const indexToChange = state.tasks.findIndex(
                task => task.title === state.currentTask?.title
            );
            state.tasks[indexToChange] = payload;
            state.currentTask = null;
        },
        clearSelection: state => {
            state.currentTask = null;
        },
    },
});

export const {
    createTask,
    removeTask,
    checkTask,
    editTask,
    saveTask,
    clearSelection,
} = Tasks.actions;

export default Tasks.reducer;
