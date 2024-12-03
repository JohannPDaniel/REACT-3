/* eslint-disable react-refresh/only-export-components */
import { styled, TableCell, tableCellClasses, TableRow } from '@mui/material';

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export interface CreateData {
	name: string;
	calories: number;
	fat: number;
	carbs: number;
	protein: number;
}

export const rows: CreateData[] = [
	{
		name: 'Frozen yoghurt',
		calories: 159,
		fat: 6.0,
		carbs: 24,
		protein: 4.0,
	},
	{
		name: 'Ice cream sandwich',
		calories: 237,
		fat: 9.0,
		carbs: 37,
		protein: 4.3,
	},
	{
		name: 'Eclair',
		calories: 262,
		fat: 16.0,
		carbs: 24,
		protein: 6.0,
	},
	{
		name: 'Cupcake',
		calories: 305,
		fat: 3.7,
		carbs: 67,
		protein: 4.3,
	},
	{
		name: 'Gingerbread',
		calories: 356,
		fat: 16.0,
		carbs: 49,
		protein: 3.9,
	},
];
