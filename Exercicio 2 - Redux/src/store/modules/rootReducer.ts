import { combineReducers } from '@reduxjs/toolkit';
import { transactionsReducer } from "./userLogged/userLoggedSlice";

export const rootReducer = combineReducers({
	transactions: transactionsReducer,
});
