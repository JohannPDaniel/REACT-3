import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { user } from "../../../config/db/user.db";

interface InitialUser {
	id: string;
	email: string;
	password: string;
}

interface InitialState {
	postUsers: InitialUser[]; 
	isLogged: boolean;
}

const initialState: InitialState = {
	postUsers: [],
	isLogged: false
};

const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		postUser(state, action: PayloadAction<InitialUser>) {
			const { id, email, password } = action.payload;

			const postUserFound = state.postUsers.find(
				(user) => user.email === email
			);
			if (postUserFound) {
				return {...state, success: false};
			}

			state.postUsers.push({ id, email, password });
			user.push({ id, email, password });
			state.isLogged = true
			return state
		},

		resetSuccess(state) {
			state.isLogged = false
			return state
		}
	},
});

export const { postUser, resetSuccess } = userSlice.actions;
export const usersReducer = userSlice.reducer;
