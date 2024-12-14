import { combineReducers } from '@reduxjs/toolkit';
import { usersReducer } from "./user/usersSlice";
import { authReducer } from "./auth/authSlice";
export const rootReducer = combineReducers({
	user: usersReducer,
	auth: authReducer,
});

