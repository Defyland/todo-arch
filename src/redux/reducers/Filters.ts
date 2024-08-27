import {GenericPayload, IFilterOption, FilterOption} from '@/utils/globals';
import {createSlice} from '@reduxjs/toolkit';

type IFilter = {
    filter: IFilterOption;
    options: IFilterOption[];
};

const initialState: IFilter = {
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
