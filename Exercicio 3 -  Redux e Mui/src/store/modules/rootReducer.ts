import { combineReducers } from '@reduxjs/toolkit';
import { usersReducer } from './auth/usersSlice';

export const rootReducer = combineReducers({
	authUser: usersReducer,
});
