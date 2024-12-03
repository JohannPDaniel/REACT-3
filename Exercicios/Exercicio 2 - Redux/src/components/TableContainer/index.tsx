import { Paper, Table, TableContainer } from '@mui/material';
import { TableBodyMui } from '../TableBody';
import { TableHeadMui } from '../TableHead';

export const TableContainerMui = () => {
	return (
		<TableContainer component={Paper}>
			<Table
				sx={{ minWidth: 700 }}
				aria-label='customized table'>
				<TableHeadMui />
				<TableBodyMui />
			</Table>
		</TableContainer>
	);
};
