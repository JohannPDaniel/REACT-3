import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginRequest } from '../../../utils/types/auth';
import { users } from '../../../mock/user';
import { api } from '../../../configs/services/api.service';
export const loginAsyncThunk = createAsyncThunk(
	'userLogged/loginAsyncThunk',
	async (data: LoginRequest) => {
		const { email, password } = data;
		const response = api.post('/login', { email, password });
		console.log(response);
	}
);

interface InitialState {
	id: string;
	name: string;
	email: string;
	remember: boolean;
	errors: string;
}

const initialState: InitialState = {
	id: '',
	name: '',
	email: '',
	remember: false,
	errors: '',
};

const userLoggedSlice = createSlice({
	name: 'userLogged',
	initialState: initialState,
	reducers: {
		login(state, action: PayloadAction<LoginRequest>) {
			const { email, password, remember } = action.payload;
			const usersFound = users.find(
				(user) => user.email === email && user.senha === password
			);
			if (!usersFound) {
				state.errors = 'invalid email or password !!';
				return state;
			}

			state.id = usersFound.id;
			state.name = usersFound.name;
			state.email = usersFound.email;
			state.remember = remember;
			state.errors = '';
			return state;
		},

		logout() {
			return initialState;
		},
	},
});

export const { login, logout } = userLoggedSlice.actions;
export const userLoggedReducer = userLoggedSlice.reducer;
