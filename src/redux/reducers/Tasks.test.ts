import Tasks, {createTask, removeTask, checkTask} from './Tasks';
import {ITasksState, ITask} from '@/utils';

describe('Tasks slice', () => {
    it('should return the initial state', () => {
        const initialState: ITasksState = {
            tasks: [],
            currentTask: null,
        };

        expect(Tasks(undefined, {type: ''})).toEqual(initialState);
    });

    it('should handle createTask', () => {
        const previousState: ITasksState = {
            tasks: [],
            currentTask: null,
        };

        const newTask: ITask = {
            title: 'New Task',
            completed: false,
        };

        expect(Tasks(previousState, createTask(newTask))).toEqual({
            tasks: [newTask],
            currentTask: null,
        });
    });

    it('should handle removeTask', () => {
        const previousState: ITasksState = {
            tasks: [
                {title: 'Task 1', completed: false},
                {title: 'Task 2', completed: false},
            ],
            currentTask: null,
        };

        expect(Tasks(previousState, removeTask('0'))).toEqual({
            tasks: [{title: 'Task 2', completed: false}],
            currentTask: null,
        });
    });

    it('should handle checkTask', () => {
        const previousState: ITasksState = {
            tasks: [
                {title: 'Task 1', completed: false},
                {title: 'Task 2', completed: false},
            ],
            currentTask: null,
        };

        expect(Tasks(previousState, checkTask('0'))).toEqual({
            tasks: [
                {title: 'Task 1', completed: true},
                {title: 'Task 2', completed: false},
            ],
            currentTask: null,
        });
    });
});
