import { Paper, Table, TableContainer } from '@mui/material';
import { TableBodyMui } from '../TableBody';
import { TableHeadMui } from '../TableHead';
import { useAppSelector } from '../../store/hooks'; 

export const TableContainerMui = () => {
	const { transactions, filterType } = useAppSelector(
		(state) => state.transactions
	);

	const filteredTransactions =
		filterType === ''
			? transactions
			: transactions.filter((tran) => tran.type === filterType);

	return (
		<TableContainer component={Paper}>
			<Table
				sx={{ minWidth: 700 }}
				aria-label='customized table'>
				<TableHeadMui />
				<TableBodyMui transaction={filteredTransactions} />
			</Table>
		</TableContainer>
	);
};
