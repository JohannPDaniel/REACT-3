import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { users } from '../../../mock/user';

interface LoginRequest {
	email: string;
	password: string;
	remember: boolean;
}

interface InitialState {
	id: string;
	name: string;
	email: string;
	remember: boolean;
	error: string;
}

const initialState: InitialState = {
	id: '',
	name: '',
	email: '',
	remember: false,
	error: '',
};

const userLoggedSlice = createSlice({
	name: 'userLogged',
	initialState: initialState,
	reducers: {
		login(state, action: PayloadAction<LoginRequest>) {
			const { email, password, remember } = action.payload;
			const userFound = users.find(
				(user) => user.email === email && user.senha === password
			);
			if (!userFound) {
				state.error = 'invalid email or password';
				return state;
			}
			state.id = userFound.id;
			state.name = userFound.name;
			state.email = userFound.email;
			state.error = '';
			state.remember = remember;
			return state;
		},
		logout() {
            return initialState;
        },
	},
});

export const { login, logout } = userLoggedSlice.actions;
export const userLoggedReducer = userLoggedSlice.reducer;
