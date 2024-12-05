import { AddCircle } from '@mui/icons-material';
import { Button, Container, Grid2, Typography } from '@mui/material';
import { useState } from 'react';
import { FormControlMui } from '../components/Modal/FormControlMui';
import { ModalMui } from '../components/Modal/ModalMui';
import { TableContainerMui } from '../components/TableContainer';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setFilterType } from "../store/modules/userLogged/userLoggedSlice";

export function Home() {
	const [ open, setOpen ] = useState( false );
	const [ select, setSelect ] = useState<"entrada" | "saída" | "">( "" )
	const dispatch = useAppDispatch();
	const { transactions, filterType } = useAppSelector(
		(state) => state.transactions
	);

	const totalEntrada = transactions
		.filter((tran) => tran.type === 'entrada')
		.reduce((acc, tran) => acc + tran.value, 0);

	const totalSaida = transactions
		.filter((tran) => tran.type === 'saída')
		.reduce((acc, tran) => acc + tran.value, 0);

	const saldoTotal = totalEntrada - totalSaida;

	return (
		<Container
			maxWidth='lg'
			sx={{ mt: 10 }}>
			<Grid2
				container
				spacing={4}>
				<Grid2
					size={12}
					sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
					<Typography variant='h1'>
						R${' '}
						{filterType === ''
							? saldoTotal.toFixed(2)
							: filterType === 'entrada'
							? totalEntrada.toFixed(2)
							: totalSaida.toFixed(2)}
					</Typography>

					<Typography
						variant='h6'
						mb={1}>
						{filterType === 'entrada'
							? `Total de Entradas: R$ ${totalEntrada.toFixed(2)}`
							: filterType === 'saída'
							? `Total de Saídas: R$ ${totalSaida.toFixed(2)}`
							: `Saldo Total: R$ ${saldoTotal.toFixed(2)}`}
					</Typography>
					<FormControlMui
						select={filterType}
						onChange={(e) =>
							dispatch(
								setFilterType(e.target.value as 'entrada' | 'saída' | '')
							)
						}
					/>
				</Grid2>
				<Grid2 size={12}>
					<TableContainerMui />
				</Grid2>
			</Grid2>
			<Button
				onClick={() => setOpen(true)}
				sx={{ position: 'fixed', bottom: 30, right: 240 }}>
				<AddCircle sx={{ width: 70, height: 70 }} />
			</Button>
			<ModalMui
				isOpen={open}
				onClose={() => setOpen(false)}
				select={select}
				onChange={(e) => setSelect(e.target.value as 'entrada' | 'saída' | '')}
			/>
		</Container>
	);
}
