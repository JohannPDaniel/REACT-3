import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from "./modules/counterSlice";

export const store = configureStore({
	reducer: {
        counter: counterReducer
    },
});

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
