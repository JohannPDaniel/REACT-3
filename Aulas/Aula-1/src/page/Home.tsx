import { Box, Grid2, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Fingerprint } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { decrementar, incrementar, zerar } from "../store/modules/counterSlice";

export const Home = () => {
	const counterRedux = useAppSelector( ( state ) => state.counter )
	const dispatch = useAppDispatch()

	const handleIncrementar = () => {
		dispatch(incrementar())
	}
	const handleDecrementar = () => {
		dispatch(decrementar())
	}
	const handleZerar = () => {
		dispatch(zerar())
	}
	return (
		<>
			<Grid2
				container
				spacing={2}>
				<Grid2
					sx={{ textAlign: 'center' }}
					size={12}>
					<Typography variant='h6'>Counter: {counterRedux.value}</Typography>
				</Grid2>
				<Grid2
					sx={{ textAlign: 'center' }}
					size={4}>
					<Button
						onClick={handleIncrementar}
						variant='contained'
						fullWidth>
						Incrementar
					</Button>
				</Grid2>
				<Grid2
					sx={{ textAlign: 'center' }}
					size={4}>
					<Button
						onClick={handleDecrementar}
						variant='contained'
						color='secondary'
						fullWidth>
						Decrementar
					</Button>
				</Grid2>
				<Grid2
					sx={{ textAlign: 'center' }}
					size={4}>
					<Button
						onClick={handleZerar}
						variant='contained'
						color='warning'
						fullWidth>
						Zerar
					</Button>
				</Grid2>
			</Grid2>

			<Box
				component='section'
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 2,
					py: 2,
				}}>
				<Button variant='text'>Default Button</Button>
				<Button variant='contained'>Contained</Button>
				<Button variant='outlined'>Outlined</Button>

				<Button
					variant='contained'
					color='success'
					onClick={() => alert('clicou ...')}>
					SUCCESS
				</Button>
				<Button
					variant='contained'
					color='warning'>
					WARNING
				</Button>

				<Typography variant='h1'>h1. Heading</Typography>
				<Typography variant='h2'>h2. Heading</Typography>
				<Typography variant='h3'>h3. Heading</Typography>
				<Typography variant='h4'>h4. Heading</Typography>
				<Typography variant='h5'>h5. Heading</Typography>
				<Typography variant='h6'>h6. Heading</Typography>
				<Typography variant='subtitle1'>
					subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quos blanditiis tenetur
				</Typography>
				<Typography variant='subtitle2'>
					subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quos blanditiis tenetur
				</Typography>
				<Typography variant='body1'>
					body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					blanditiis tenetur unde suscipit, quam beatae rerum inventore
					consectetur, neque doloribus, cupiditate numquam dignissimos laborum
					fugiat deleniti? Eum quasi quidem quibusdam.
				</Typography>
				<Typography variant='body2'>
					body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					blanditiis tenetur unde suscipit, quam beatae rerum inventore
					consectetur, neque doloribus, cupiditate numquam dignissimos laborum
					fugiat deleniti? Eum quasi quidem quibusdam.
				</Typography>

				<TextField
					variant='filled'
					label='filled'
				/>
				<TextField
					variant='outlined'
					label='outlined'
				/>
				<TextField
					variant='standard'
					label='standard'
				/>
				<Fingerprint
					sx={{ width: 50, height: 'auto' }}
					color='primary'
				/>
			</Box>
			<Grid2
				container
				sx={{ color: 'white' }}>
				<Grid2
					size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
					sx={{ background: 'yellow' }}>
					Coluna 1
				</Grid2>
				<Grid2
					size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
					sx={{ background: 'blue' }}>
					Coluna 1
				</Grid2>
				<Grid2
					size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
					sx={{ background: 'black' }}>
					Coluna 1
				</Grid2>
				<Grid2
					size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
					sx={{ background: 'red' }}>
					Coluna 1
				</Grid2>
				<Grid2
					size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
					sx={{ background: 'orange' }}>
					Coluna 1
				</Grid2>
				<Grid2
					size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
					sx={{ background: 'purple' }}>
					Coluna 1
				</Grid2>
			</Grid2>
		</>
	);
};
