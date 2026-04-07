// reducers/root-reducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import { demoSlice } from "./demo/demo-slice";
import { rootService } from "store/services/root-service";
// Import reducers here if you have them


const rootReducer = combineReducers({
    demo: demoSlice.reducer,
    [rootService.reducerPath]: rootService.reducer
});

export interface IState {
}

export default rootReducer;