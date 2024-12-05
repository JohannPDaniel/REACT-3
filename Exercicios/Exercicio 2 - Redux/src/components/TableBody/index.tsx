import { TableBody } from '@mui/material';
import { Transaction } from '../../config/types/Transaction';
import { StyledTableCell, StyledTableRow } from './files';

interface TableBodyMuiProps {
	transaction: Transaction[];
}

export const TableBodyMui = ({ transaction }: TableBodyMuiProps) => {
	return (
		<TableBody>
			{transaction.map((tran, index) => (
				<StyledTableRow key={tran.id}>
					<StyledTableCell align='center'>{index + 1}</StyledTableCell>
					<StyledTableCell align='center'>{tran.type}</StyledTableCell>
					<StyledTableCell align='center'>{tran.description}</StyledTableCell>
					<StyledTableCell align='center'>{tran.value}</StyledTableCell>
					<StyledTableCell align='center'></StyledTableCell>
				</StyledTableRow>
			))}
			{transaction.length === 0 && (
				<StyledTableRow>
					<StyledTableCell
						align='center'
						colSpan={5}>
						Nenhuma transação disponível.
					</StyledTableCell>
				</StyledTableRow>
			)}
		</TableBody>
	);
};
