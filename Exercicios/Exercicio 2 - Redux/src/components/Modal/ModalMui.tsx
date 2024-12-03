import {
	Box,
	Button,
	FormControl,
	MenuItem,
	Modal,
	Select,
	TextField,
} from '@mui/material';

interface ModalMuiProps {
	isOpen?: boolean;
	onClose?: () => void;
}

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	borderRadius: 3,
	p: 4,
	display: 'flex',
	flexDirection: 'column',
	gap: 2,
};

export function ModalMui({ isOpen, onClose }: ModalMuiProps) {
	return (
		<Modal
			keepMounted
			open={isOpen ?? true}
			onClose={onClose}
			aria-labelledby='keep-mounted-modal-title'
			aria-describedby='keep-mounted-modal-description'>
			<FormControl
				sx={style}
				fullWidth>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						// value={age}
						
						label='Age' >
						<MenuItem value="" disabled>Escolha um opção</MenuItem>
						<MenuItem value="entrada">Entrada</MenuItem>
						<MenuItem value="saída">Saída</MenuItem>
					</Select>
					<TextField
						type='number'
						fullWidth
						label='Valor'
						placeholder='0,00'
						name='value'
					/>
					<TextField
						type='text'
						fullWidth
						label='Descrição'
						placeholder='Descrição'
						name='description'
					/>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'end', columnGap: 2 }}>
					<Button
						type='reset'
						color='error'
						variant='contained'>
						cancelar
					</Button>
					<Button
						type='submit'
						color='success'
						variant='contained'>
						registrar
					</Button>
				</Box>
			</FormControl>
		</Modal>
	);
}
