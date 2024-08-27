import {withChildren, ITask} from '@/utils';

export namespace ITodoList {
    export interface IView extends withChildren {}
    export interface IModelProps {}
    export interface IModel {}
}

export namespace ITodoListItem {
    export interface IView {
        task: ITask;
        selectedTask: () => void;
        deleteTask: () => void;
    }
    export interface IModelProps {}
    export interface IModel {}
}
