import { TableBody } from "@mui/material";
import { rows, StyledTableCell, StyledTableRow } from './files';

export const TableBodyMui = () => {
	return (
		<TableBody>
			{rows.map((row) => (
				<StyledTableRow key={row.name}>
					<StyledTableCell
						component='th'
						scope='row'>
						{row.name}
					</StyledTableCell>
					<StyledTableCell align='right'>{row.calories}</StyledTableCell>
					<StyledTableCell align='right'>{row.fat}</StyledTableCell>
					<StyledTableCell align='right'>{row.carbs}</StyledTableCell>
					<StyledTableCell align='right'>{row.protein}</StyledTableCell>
				</StyledTableRow>
			))}
		</TableBody>
	);
};
