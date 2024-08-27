import {ITask} from '@/utils';
export namespace IHome {
    export interface IView {}
    export interface IModelProps {}
    export interface IModel {
        tasks: ITask[];
        deleteTask: (id: string) => void;
        selectedTask: (id: string) => void;
    }
}
