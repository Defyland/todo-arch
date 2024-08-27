import {withChildren, ITask, FilterOption} from '@/utils';

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
    export interface IModel {
        saveTask: (event: React.ChangeEvent<HTMLFormElement>) => void;
        input: string;
        setInput: React.Dispatch<React.SetStateAction<string>>;
        handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        options: FilterOption[];
        changeFilter: (filter: FilterOption) => void;
        selectedFilter: FilterOption;
    }
}
