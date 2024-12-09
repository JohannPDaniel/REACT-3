import { combineReducers } from '@reduxjs/toolkit';
import { userLoggedReducer } from "./userLogged/userLoggedSlice";

export const rootReducer = combineReducers({
    userLogged: userLoggedReducer
});

export default rootReducer;
