import { Box, Typography } from '@mui/material';

export const Home = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '100vh',
			}}>
			<Typography>Bem vindo</Typography>
		</Box>
	);
};
