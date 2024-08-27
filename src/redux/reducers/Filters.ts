import {
    GenericPayload,
    IFilterOption,
    FilterOption,
    IFilterState,
} from '@/utils';
import {createSlice} from '@reduxjs/toolkit';

const initialState: IFilterState = {
    filter: FilterOption.All,
    options: [
        FilterOption.All,
        FilterOption.Completed,
        FilterOption.Uncompleted,
    ],
};

const Filters = createSlice({
    name: 'Filters',
    initialState,
    reducers: {
        updateFilter: (state, {payload}: GenericPayload<IFilterOption>) => {
            state.filter = payload;
        },
    },
});

export const {updateFilter} = Filters.actions;

export default Filters.reducer;
