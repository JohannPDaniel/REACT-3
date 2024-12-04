import { TableBody } from '@mui/material';
import { StyledTableCell, StyledTableRow } from './files';
import { Transaction } from '../../config/types/Transaction';

interface TableBodyProps {
	transaction?: Transaction[];
}

export const TableBodyMui = ({ transaction }: TableBodyProps) => {
	return (
		<TableBody>
			{transaction?.map((trans, index) => (
				<StyledTableRow key={index}>
					<StyledTableCell
						component='th'
						align='center'
						scope='row'>
						{trans.id}
					</StyledTableCell>
					<StyledTableCell align='center'>{trans.type}</StyledTableCell>
					<StyledTableCell align='center'>{trans.description}</StyledTableCell>
					<StyledTableCell align='center'>{trans.value}</StyledTableCell>
					<StyledTableCell align='center'></StyledTableCell>
				</StyledTableRow>
			)) || (
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
