import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from '@mui/material';

function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number
) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const theader = [
	'Dessert (100g serving)',
	'Calorias',
	'Gorduras (g)',
	'Carboidrato (g)',
	'Proteina (g)',
];

export function BasicTable() {
	return (
		<TableContainer
			component={Paper}
			sx={{
				mt: 20,
				boxShadow: 'none',
			}}>
			<Table aria-label='simple table'>
				<TableHead>
					<TableRow>
						{theader.map((th, index) => (
							<TableCell
								key={index}
								sx={{ fontWeight: 700, fontSize: {xl: 16, lg: 20} }}
								align='center'>
								{th}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell
								align='center'
								component='th'
								scope='row'>
								{row.name}
							</TableCell>
							<TableCell align='center'>{row.calories}</TableCell>
							<TableCell align='center'>{row.fat}</TableCell>
							<TableCell align='center'>{row.carbs}</TableCell>
							<TableCell align='center'>{row.protein}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
