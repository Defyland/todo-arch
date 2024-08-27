import {withChildren, ITask} from '@/utils';

export namespace ITodoList {
    export interface IView extends withChildren {}
    export interface IModelProps {}
    export interface IModel {}
}

export namespace ITodoListItem {
    export interface IView {
        task: ITask;
    }
    export interface IModelProps {}
    export interface IModel {}
}
