import {useAppDispatch, useAppSelector, FilterOption, ITask} from '@/utils';
import {removeTask, checkTask} from '@/redux/reducers/Tasks';
import {IHome} from './Home.types';

export const useHomeScreen = (): IHome.IModel => {
    const dispatch = useAppDispatch();

    const {
        Tasks: {tasks: allTasks},
        Filters: {filter},
    } = useAppSelector(state => state);

    const deleteTask = (id: string) => {
        dispatch(removeTask(id));
    };

    const selectedTask = (id: string) => {
        dispatch(checkTask(id));
    };

    const filterFunctions: {
        [key in FilterOption]: (tasks: ITask[]) => ITask[];
    } = {
        [FilterOption.All]: tasks => tasks,
        [FilterOption.Completed]: tasks => tasks.filter(task => task.completed),
        [FilterOption.Uncompleted]: tasks =>
            tasks.filter(task => !task.completed),
    };

    const tasks = filterFunctions[filter](allTasks);

    return {tasks, deleteTask, selectedTask};
};
