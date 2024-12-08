import { combineReducers } from '@reduxjs/toolkit';
import { errorReducer } from "./Errors/ErrorsSlice";

export const rootReducer = combineReducers({
	errors: errorReducer,
});
