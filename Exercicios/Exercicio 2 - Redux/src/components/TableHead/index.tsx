import { styled, TableCell, tableCellClasses, TableHead, TableRow } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export const TableHeadMui = () => {
	return (
		<TableHead>
			<TableRow>
				<StyledTableCell>Dessert (100g serving)</StyledTableCell>
				<StyledTableCell align='right'>Calories</StyledTableCell>
				<StyledTableCell align='right'>Fat&nbsp;(g)</StyledTableCell>
				<StyledTableCell align='right'>Carbs&nbsp;(g)</StyledTableCell>
				<StyledTableCell align='right'>Protein&nbsp;(g)</StyledTableCell>
			</TableRow>
		</TableHead>
	);
};

