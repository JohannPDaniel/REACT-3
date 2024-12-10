import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialUser {
	id: string;
	email: string;
}

interface InitialState {
	postUsers: InitialUser[];
}

const initialState: InitialState = {
	postUsers: [],
};

const authUserSlice = createSlice({
	name: 'authUser',
	initialState,
	reducers: {
		createUser(state, action: PayloadAction<InitialUser>) {
			const userFound = state.postUsers.find(
				(user) => user.email === action.payload.email
			);

			if (userFound) {
				return;
			}

			state.postUsers.push(action.payload);
			return state
		},
	},
});

export const { createUser } = authUserSlice.actions;
export const authUserReducer = authUserSlice.reducer;
