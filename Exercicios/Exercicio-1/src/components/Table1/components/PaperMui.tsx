import { Grid2, Paper } from '@mui/material'; // Import correto
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../types/columns';
import { rows } from '../types/rows';
import { paginationModel } from './../types/paginationModel';

export const PaperMui = () => {
	return (
        <Grid2 container>
            
			<Grid2
				size={{xs: 12, md: 12}}>
				<Paper
					sx={{
						height: 400,
						width: '100%',
						mt: '50px',
						border: 0, 
					}}>
					<DataGrid
						rows={rows}
						columns={columns}
						initialState={{
							pagination: { paginationModel },
						}}
						pageSizeOptions={[5, 10]}
						checkboxSelection
						sx={{
							border: 0, // Remove borda externa do DataGrid
						}}
					/>
                </Paper>
                
			</Grid2>
		</Grid2>
	);
};
