import {
	styled,
	TableCell,
	tableCellClasses,
	TableHead,
	TableRow,
} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const theader = ['Id', 'Tipo', 'Descrição', 'valor', 'Ações'];

export const TableHeadMui = () => {
	return (
		<TableHead>
			<TableRow>
				{theader.map((th, index) => (
					<StyledTableCell
						key={index}
						align='center'>
						{th}
					</StyledTableCell>
				))}
			</TableRow>
		</TableHead>
	);
};
