import { Paper, Table, TableContainer } from '@mui/material';
import { TableBodyMui } from '../TableBody';
import { TableHeadMui } from '../TableHead';
import { Transaction } from "../../config/types/Transaction";

interface TableContainerMuiProps {
	transaction?: Transaction[];
}


export const TableContainerMui = ({transaction}: TableContainerMuiProps) => {
	return (
		<TableContainer component={Paper}>
			<Table
				sx={{ minWidth: 700 }}
				aria-label='customized table'>
				<TableHeadMui />
				<TableBodyMui transaction={transaction} />
			</Table>
		</TableContainer>
	);
};
