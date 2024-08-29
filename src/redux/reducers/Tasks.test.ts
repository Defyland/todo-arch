import Tasks, {
    createTask,
    removeTask,
    checkTask,
    editTask,
    saveTask,
    clearSelection,
} from './Tasks';
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

    it('should handle editTask', () => {
        const previousState: ITasksState = {
            tasks: [
                {title: 'Task 1', completed: false},
                {title: 'Task 2', completed: false},
            ],
            currentTask: null,
        };

        expect(Tasks(previousState, editTask(1))).toEqual({
            tasks: [
                {title: 'Task 1', completed: false},
                {title: 'Task 2', completed: false},
            ],
            currentTask: {title: 'Task 2', completed: false},
        });
    });

    it('should handle saveTask', () => {
        const previousState: ITasksState = {
            tasks: [
                {title: 'Task 1', completed: false},
                {title: 'Task 2', completed: false},
            ],
            currentTask: {title: 'Task 2', completed: false},
        };

        const changeTask: ITask = {
            title: 'New Task 2',
            completed: false,
        };

        expect(Tasks(previousState, saveTask(changeTask))).toEqual({
            tasks: [
                {title: 'Task 1', completed: false},
                {title: 'New Task 2', completed: false},
            ],
            currentTask: null,
        });
    });

    it('should handle clearSelection', () => {
        const previousState: ITasksState = {
            tasks: [
                {title: 'Task 1', completed: false},
                {title: 'Task 2', completed: false},
            ],
            currentTask: {title: 'Task 2', completed: false},
        };

        expect(Tasks(previousState, clearSelection())).toEqual({
            tasks: [
                {title: 'Task 1', completed: false},
                {title: 'Task 2', completed: false},
            ],
            currentTask: null,
        });
    });
});
