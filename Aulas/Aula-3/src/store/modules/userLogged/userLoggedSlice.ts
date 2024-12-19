import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseAPI } from '../../../configs/services/api.service';
import { loginService } from '../../../configs/services/auth.service';
import { LoginRequest } from '../../../utils/types/auth';
import { showAlert } from '../Alert/Alert';
export const loginAsyncThunk = createAsyncThunk(
	'userLogged/loginAsyncThunk',
	async (data: LoginRequest, { dispatch }) => {
		const { email, password, remember } = data;
		const response = await loginService({ email, password });

		if (!response.success) {
			dispatch(
				showAlert({
					type: 'error',
					message: response.message,
				})
			);
		}

		const responseWithRemember = {
			...response,
			data: {
				...response.data,
				student: {
					id: response.data.studentId,
					name: response.data.name,
					email: response.data.email,
					remember: remember || false,
					errors: '',
				},
			},
		};
		dispatch(
			showAlert({
				type: 'success',
				message: response.message,
			})
		);

		return responseWithRemember;
	}
);

interface InitialState {
	success: boolean;
	message: string;
	token: string;
	student: {
		id: string;
		name: string;
		email: string;
		remember: boolean;
		errors: string;
	};
}

const initialState: InitialState = {
	success: false,
	message: '',
	token: '',
	student: {
		id: '',
		name: '',
		email: '',
		remember: false,
		errors: '',
	},
};

const userLoggedSlice = createSlice({
	name: 'userLogged',
	initialState: initialState,
	reducers: {
		// login(state, action: PayloadAction<LoginRequest>) {
		// 	const { email, password, remember } = action.payload;
		// 	const usersFound = users.find(
		// 		(user) => user.email === email && user.senha === password
		// 	);
		// 	if (!usersFound) {
		// 		state.errors = 'invalid email or password !!';
		// 		return state;
		// 	}

		// 	state.id = usersFound.id;
		// 	state.name = usersFound.name;
		// 	state.email = usersFound.email;
		// 	state.remember = remember;
		// 	state.errors = '';
		// 	return state;
		// },

		logout() {
			return initialState;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(loginAsyncThunk.pending, () => {
				console.log(
					'Estou aguardando em estado de pending na função loginAsyncThunk '
				);
			})
			.addCase(
				loginAsyncThunk.fulfilled,
				(state, action: PayloadAction<ResponseAPI>) => {
					console.log(
						'Estou aguardando em estado de fulfilled na função loginAsyncThunk '
					);
					console.log({ state, payload: action.payload });

					state.success = action.payload.success;
					state.message = action.payload.message;

					if (action.payload.success) {
						state.token = action.payload.data.token;
						state.student = {
							id: action.payload.data.studentId,
							name: action.payload.data.student.name || '',
							email: action.payload.data.student.email || '',
							remember: action.payload.data.student.remember || false,
							errors: '',
						};
					}
				}
			)
			.addCase(loginAsyncThunk.rejected, (state, action) => {
				console.log(
					'Estou aguardando em estado de rejected na função loginAsyncThunk '
				);
				state.success = false;
				state.message = action.payload as string;
			});
	},
});

export const { logout } = userLoggedSlice.actions;
export const userLoggedReducer = userLoggedSlice.reducer;
