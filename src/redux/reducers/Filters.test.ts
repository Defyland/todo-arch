import Filters, {updateFilter} from './Filters';
import {FilterOption, IFilterState} from '@/utils';

describe('Filters slice', () => {
    it('should return the initial state', () => {
        const initialState: IFilterState = {
            filter: FilterOption.All,
            options: [
                FilterOption.All,
                FilterOption.Completed,
                FilterOption.Uncompleted,
            ],
        };

        expect(Filters(undefined, {type: ''})).toEqual(initialState);
    });

    it('should handle updateFilter', () => {
        const previousState: IFilterState = {
            filter: FilterOption.All,
            options: [
                FilterOption.All,
                FilterOption.Completed,
                FilterOption.Uncompleted,
            ],
        };

        expect(
            Filters(previousState, updateFilter(FilterOption.Completed))
        ).toEqual({
            filter: FilterOption.Completed,
            options: [
                FilterOption.All,
                FilterOption.Completed,
                FilterOption.Uncompleted,
            ],
        });
    });
});
