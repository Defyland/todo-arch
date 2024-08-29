import {FilterOption} from '../globals';

export const translateFilters = (filter: FilterOption): string => {
    return (
        {
            [FilterOption.All]: '📋 Todos',
            [FilterOption.Completed]: '✅ Concluídas',
            [FilterOption.Uncompleted]: '🟠 Pendentes',
        }[filter] || ''
    );
};
