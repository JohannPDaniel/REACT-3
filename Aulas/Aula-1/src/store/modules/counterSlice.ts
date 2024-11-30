/* 
    Nome,
    Valor Inicial,
    Actions (Functions)
 */

import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
	value: number;
}

const initialState: InitialState = {
	value: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState, // useState(initialState)
	reducers: {
		incrementar: (state) => {
			state.value += 1;
			return state;
		},
		decrementar(state) {
			state.value -= 1;
			return state;
		},
		zerar: () => {
			return initialState;
		},
	},
});

export const { incrementar, decrementar, zerar } = counterSlice.actions;
export const counterReducer = counterSlice.reducer
