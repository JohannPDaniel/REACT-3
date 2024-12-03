import { AddCircle } from '@mui/icons-material';
import { Button, Container } from '@mui/material';
import { useState } from 'react';
import { TableContainerMui } from '../components/TableContainer';
import { ModalMui } from '../components/Modal/ModalMui';

export function Home() {
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(!open);
	const handleOpen = () => setOpen(true);

	return (
		<>
			<Container
				maxWidth='lg'
				sx={{
					width: '100%',
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}>
				<TableContainerMui />

				<Button
					onClick={handleOpen}
					sx={{
						position: 'fixed',
						bottom: 30,
						right: 240,
					}}>
					<AddCircle sx={{ width: 70, height: 70 }} />
				</Button>
				<ModalMui
					isOpen={open}
					onClose={handleClose}
				/>
			</Container>
		</>
	);
}
