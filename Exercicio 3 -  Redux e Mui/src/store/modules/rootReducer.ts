import { combineReducers } from '@reduxjs/toolkit';
import { authUserReducer } from "./auth/createUser";

export const rootReducer = combineReducers({
	authUser: authUserReducer,
});
