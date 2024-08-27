import {useAppDispatch, useAppSelector} from '@/utils';
import {createTask, removeTask, checkTask} from '@/redux/reducers/Tasks';

export const useHomeScreen = () => {
    const dispatch = useAppDispatch();

    const {tasks} = useAppSelector(state => state.Tasks);

    const deleteTask = (id: string) => {
        dispatch(removeTask(id));
    };

    const selectedTask = (id: string) => {
        dispatch(checkTask(id));
    };

    return {tasks, deleteTask, selectedTask};
};
