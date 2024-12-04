import { AddCircle } from '@mui/icons-material';
import {
	Button,
	Container,
	Grid2,
	SelectChangeEvent,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { TableContainerMui } from '../components/TableContainer';
import { ModalMui } from '../components/Modal/ModalMui';
import { FormControlMui } from '../components/Modal/FormControlMui';
import { Transaction } from '../config/types/Transaction';

export function Home() {
	const [open, setOpen] = useState(false);
	const [selectModal, setSelectModal] = useState('');
	const [filterType, setFilterType] = useState<'entrada' | 'saída' | ''>(''); 
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	const handleClose = () => {
		setOpen(!open);
		setSelectModal('');
	};

	const handleOpen = () => setOpen(true);

	const handleFilterChange = (event: SelectChangeEvent<string>) => {
		setFilterType(event.target.value as 'entrada' | 'saída' | '');
	};

	const handleChangeModal = (event: SelectChangeEvent<string>) => {
		setSelectModal(event.target.value);
	};

	const AddTransactions = (newTransaction: Transaction) => {
		setTransactions((prev) => [...prev, newTransaction]);
	};

	const totalEntrada = transactions
		.filter((tran) => tran.type === 'entrada')
		.reduce((acc, tran) => acc + tran.value, 0);

	const totalSaida = transactions
		.filter((tran) => tran.type === 'saída')
		.reduce((acc, tran) => acc + tran.value, 0);

	const saldoTotal = totalEntrada - totalSaida;

	const filteredTransactions =
		filterType !== ''
			? transactions.filter((tran) => tran.type === filterType)
			: transactions;

	const totalFiltered = filteredTransactions.reduce(
		(acc, tran) => acc + tran.value,
		0
	);

	return (
		<>
			<Container
				maxWidth='lg'
				sx={{
					width: '100%',
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					mt: 10,
				}}>
				<Grid2
					container
					spacing={4}>
					<Grid2
						size={12}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'end',
						}}>
						<Typography variant='h1'>
							R${' '}
							<span>
								{filterType === ''
									? saldoTotal.toFixed(2)
									: totalFiltered.toFixed(2)}{' '}
							</span>
						</Typography>

						<Typography
							variant='h6'
							mb={1}>
							{filterType === 'entrada'
								? `Total de Entradas: R$ ${totalFiltered.toFixed(2)}`
								: filterType === 'saída'
								? `Total de Saídas: R$ ${totalFiltered.toFixed(2)}`
								: `Saldo Total: R$ ${saldoTotal.toFixed(2)}`}
						</Typography>

						<FormControlMui
							select={filterType}
							onChange={handleFilterChange}
						/>
					</Grid2>

					<Grid2 size={12}>
						<TableContainerMui transaction={filteredTransactions} />
					</Grid2>
				</Grid2>

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
					select={selectModal}
					onChange={handleChangeModal}
					isOpen={open}
					onClose={handleClose}
					onSubmit={AddTransactions}
				/>
			</Container>
		</>
	);
}
