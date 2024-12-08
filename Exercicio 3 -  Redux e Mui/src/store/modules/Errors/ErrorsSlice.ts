import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageError } from "../../../config/types/MessageError";

interface InitialState {
	emailError: boolean;
	emailMessage: string;
	passwordError: boolean;
	passwordMessage: string;
	repeatPasswordError: boolean;
	repeatPasswordMessage: string;
}

const initialState: InitialState = {
	emailError: false,
	emailMessage: '',
	passwordError: false,
	passwordMessage: '',
	repeatPasswordError: false,
	repeatPasswordMessage: '',
};

const errorsSlice = createSlice({
	name: 'errorsReducer',
	initialState,
	reducers: {
		setEmailError(
			state,
			action: PayloadAction<MessageError>
		) {
			state.emailError = action.payload.error;
			state.emailMessage = action.payload.message;
		},
		setPasswordError(
			state,
			action: PayloadAction<MessageError>
		) {
			state.passwordError = action.payload.error;
			state.passwordMessage = action.payload.message;
		},
		setRepeatPasswordError(
			state,
			action: PayloadAction<MessageError>
		) {
			state.repeatPasswordError = action.payload.error;
			state.repeatPasswordMessage = action.payload.message;
		},
		resetErrors() {
			return initialState;
		},
	},
});

export const {
	setEmailError,
	setPasswordError,
	setRepeatPasswordError,
	resetErrors,
} = errorsSlice.actions;

export const errorReducer = errorsSlice.reducer;
