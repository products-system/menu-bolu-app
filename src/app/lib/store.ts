import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import swiperReducer from './features/swiperSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      sticky: swiperReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
