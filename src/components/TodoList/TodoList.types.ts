import {withChildren, ITask, FilterOption} from '@/utils';

export namespace ITodoList {
    export type IView = withChildren;
    export type IModelProps = {};
    export type IModel = {};
}

export namespace ITodoListItem {
    export type IView = {
        task: ITask;
        selectedTask: () => void;
        deleteTask: () => void;
        editTask: () => void;
    };
    export type IModelProps = {};
    export type IModel = {
        formSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
        input: string;
        setInput: React.Dispatch<React.SetStateAction<string>>;
        handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        options: FilterOption[];
        changeFilter: (filter: FilterOption) => void;
        selectedFilter: FilterOption;
    };
}
