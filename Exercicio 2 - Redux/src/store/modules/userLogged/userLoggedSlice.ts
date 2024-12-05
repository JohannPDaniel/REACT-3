import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction } from "../../../config/types/Transaction";

interface TransactionsState {
	transactions: Transaction[];
	filterType: 'entrada' | 'saída' | '';
}

const initialState: TransactionsState = {
	transactions: [],
	filterType: '',
};

const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		addTransaction(state, action: PayloadAction<Transaction>) {
			state.transactions.push(action.payload);
		},
		setFilterType(state, action: PayloadAction<'entrada' | 'saída' | ''>) {
			state.filterType = action.payload;
		},
	},
});

export const { addTransaction, setFilterType } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
