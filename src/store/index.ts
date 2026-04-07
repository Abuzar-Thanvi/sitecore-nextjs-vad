import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'store/reducers/root-reducer';
import { rootService } from 'store/services/root-service';

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        // Add RTK API's and other middlewares here
        [rootService.middleware]
      );
    }
  })
}

const store = makeStore();

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];

export default store;