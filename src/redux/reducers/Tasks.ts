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
            state.tasks = [payload, ...state.tasks];
        },
        removeTask: (state, {payload}: GenericPayload<string>) => {
            state.tasks = state.tasks.filter(
                (_, index) => String(index) !== payload
            );
        },
        checkTask: (state, {payload}: GenericPayload<string>) => {
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
