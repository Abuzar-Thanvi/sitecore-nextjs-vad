import { createSlice } from '@reduxjs/toolkit';
import { demoApi } from 'store/services/demo/demo-api';

export interface DemoState {
    count: 0,
    ipAddress: string,
    city: string,
    country: string,
    favorites: any[],
}

const initialState: DemoState = {
    count: 0,
    city: '',
    country: '',
    ipAddress: '',
    favorites: []
};

export const demoSlice = createSlice({
    name: 'demo',
    initialState,
    reducers: {
        incrementCount: (state: DemoState) => {
            state.count += 1
        },
        decrementCount: (state: DemoState) => {
            state.count -= 1
        }
    },
    selectors: {
        selectCount: (state) => state.count,
        selectFavorites: (state) => state.favorites
    },
    extraReducers: builder => {
        builder.addMatcher(
            demoApi.endpoints.demoPost.matchFulfilled,
            (state: DemoState, { payload }: { payload: any }) => {
                state.favorites = payload?.data?.results
            },
        );
    },
});
export default demoSlice.reducer;
export const { incrementCount, decrementCount } = demoSlice.actions;
export const { selectCount, selectFavorites } = demoSlice.selectors;
