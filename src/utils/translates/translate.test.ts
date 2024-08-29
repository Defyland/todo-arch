import {translateFilters} from './index';
import {FilterOption} from '../globals';

describe('translateFilters', () => {
    it('should return "Todas" for FilterOption.All', () => {
        expect(translateFilters(FilterOption.All)).toBe('Todas');
    });

    it('should return "Concluídas" for FilterOption.Completed', () => {
        expect(translateFilters(FilterOption.Completed)).toBe('Concluídas');
    });

    it('should return "Pendentes" for FilterOption.Uncompleted', () => {
        expect(translateFilters(FilterOption.Uncompleted)).toBe('Pendentes');
    });

    it('should return an empty string for an unknown filter', () => {
        expect(translateFilters('Unknown' as FilterOption)).toBe('');
    });
});
