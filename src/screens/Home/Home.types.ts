import {ITask} from '@/utils';
export namespace IHome {
    export type IView = {};
    export type IModelProps = {};
    export type IModel = {
        tasks: ITask[];
        deleteTask: (id: string) => void;
        editTask: (id: number) => void;
        selectedTask: (id: string) => void;
    };
}
