import {
	Box,
	Button,
	FormControl,
	Modal,
	SelectChangeEvent,
	TextField,
} from '@mui/material';
import { useRef } from 'react';
import { FormControlMui } from './FormControlMui';
import { Transaction } from '../../config/types/Transaction';

interface ModalMuiProps {
	isOpen?: boolean;
	onClose?: () => void;
	onChange?: (event: SelectChangeEvent<string>) => void;
	select?: string;
	onSubmit?: (transaction: Transaction) => void;
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

export function ModalMui({
	isOpen,
	onClose,
	onChange,
	select,
	onSubmit,
}: ModalMuiProps) {
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data: Transaction = {
			id: Date.now(),
			type: e.currentTarget['select-value'].value as 'entrada' | 'saída',
			value: parseFloat(e.currentTarget.valor.value),
			description: e.currentTarget.description.value,
		};

		onSubmit?.(data);

		formRef.current?.reset();

		onClose?.();
	};

	return (
		<Modal
			keepMounted
			open={isOpen ?? true}
			onClose={onClose}
			aria-labelledby='keep-mounted-modal-title'
			aria-describedby='keep-mounted-modal-description'>
			<FormControl
				sx={style}
				component='form'
				onSubmit={handleSubmit}
				ref={formRef}
				fullWidth>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					<FormControlMui
						select={select}
						onChange={onChange}
					/>
					<TextField
						type='number'
						fullWidth
						label='Valor'
						placeholder='0,00'
						name='valor'
						slotProps={{
							input: {
								inputProps: {
									step: 0.01
								}, 
							},
						}}
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
						variant='contained'
						onClick={onClose}>
						Cancelar
					</Button>
					<Button
						type='submit'
						color='success'
						variant='contained'>
						Registrar
					</Button>
				</Box>
			</FormControl>
		</Modal>
	);
}
