import { Box, Button, Container, Tooltip } from '@mui/material';
import { AppBarMui } from '../components/AppBar1/AppBarMui';
import { BasicTable } from '../components/Table1/BasicTable';
import { SpringModal } from '../components/Modal';
import { useState } from 'react';

export function Home() {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true); // Garante que o modal é aberto
	};

	const handleClose = () => {
		setOpen(false); // Fecha o modal
	};

	return (
		<>
			<AppBarMui />
			<Container
				onClick={handleClose}
				maxWidth='lg'>
				<Box>
					<BasicTable />
					<SpringModal
						isOpen={open}
						onClose={handleClose}
					/>
					<Tooltip
						title='Add'
						arrow>
						<Button
							sx={{position: "fixed", bottom: 40, right: 300}}
							variant="contained"
							onClick={(e) => {
								e.stopPropagation(); 
								handleOpen();
							}}>
							Open Modal
						</Button>
					</Tooltip>
				</Box>
			</Container>
		</>
	);
}
