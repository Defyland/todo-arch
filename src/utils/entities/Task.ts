import {GenericPayload} from '@/utils/globals';

export type ITask = {
    title: string;
    completed: boolean;
};

export type ITasksState = {
    tasks: ITask[];
    currentTask: ITask | null;
};

export type TaskPayload = GenericPayload<ITask>;
