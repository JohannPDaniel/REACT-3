import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { user } from '../../../config/db/user.db';

interface InitialState {
	isLogged: boolean;
	remember: boolean;
}

interface LoginRequest {
	email: string;
	password: string;
	remember: boolean;
}

const initialState: InitialState = {
	isLogged: false,
	remember: false,
};

const authSlice = createSlice({
	name: 'authUser',
	initialState,
	reducers: {
		login(state, action: PayloadAction<LoginRequest>) {
			const { email, password, remember } = action.payload;
			const userFound = user.find(
				(user) => user.email === email && user.password === password
			);

			if (!userFound) {
				state.isLogged = false;
				state.remember = false;
				return;
			}

			state.isLogged = true;
			state.remember = remember;
		},
		toggleRemember(state, action: PayloadAction<boolean>) {
			state.remember = action.payload;
		},
		resetIsLogged(state) {
			state.isLogged = false;
			state.remember = false;
		},
	},
});

export const { login, toggleRemember, resetIsLogged } = authSlice.actions;
export const authReducer = authSlice.reducer;
