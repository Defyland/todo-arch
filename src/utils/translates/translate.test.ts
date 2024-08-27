import {translateFilters} from './index';
import {FilterOption} from '../globals';

describe('translateFilters', () => {
    it('should return "Todos" for FilterOption.All', () => {
        expect(translateFilters(FilterOption.All)).toBe('Todos');
    });

    it('should return "Feitos" for FilterOption.Completed', () => {
        expect(translateFilters(FilterOption.Completed)).toBe('Feitos');
    });

    it('should return "Abertos" for FilterOption.Uncompleted', () => {
        expect(translateFilters(FilterOption.Uncompleted)).toBe('Abertos');
    });

    it('should return an empty string for an unknown filter', () => {
        expect(translateFilters('Unknown' as FilterOption)).toBe('');
    });
});
