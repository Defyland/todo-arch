import {FilterOption} from '../globals';

export const translateFilters = (filter: FilterOption): string => {
    return (
        {
            [FilterOption.All]: 'Todas',
            [FilterOption.Completed]: 'Concluídas',
            [FilterOption.Uncompleted]: 'Pendentes',
        }[filter] || ''
    );
};
