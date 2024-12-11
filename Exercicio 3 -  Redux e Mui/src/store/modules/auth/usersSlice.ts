import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialUser {
	id: string;
	email: string;
	password?: string;
	remember?: boolean;
}

interface LoginRequest {
	email: string;
	password: string;
}

interface InitialState {
	postUsers: InitialUser[]; 
	success: boolean
}

const initialState: InitialState = {
	postUsers: [],
	success: false
};

const userSlice = createSlice({
	name: 'authUser',
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
			state.success = true
			return state
		},
		login(state, action: PayloadAction<LoginRequest>) {
			const { email, password } = action.payload;
			const userFound = state.postUsers.find(
				(user) => user.email === email && user.password === password
			);
			if (!userFound) {
				return {...state, success: false};
			}
			return {...state, success: true}
		},
		resetSuccess(state) {
			state.success = false
			return state
		}
	},
});

export const { postUser, login, resetSuccess } = userSlice.actions;
export const usersReducer = userSlice.reducer;
