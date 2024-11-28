import { Fingerprint } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export const Home = () => {
	return (
		<>
			<Typography variant='h1'>Olá mundo</Typography>
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

			<Box sx={{ width: '100%', maxWidth: 500 }}>
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
			</Box>
			<Fingerprint fontSize='large' />
		</>
	);
};
