import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../store/hook';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Home = () => {
	const auth = useAppSelector((state) => state.auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth.isLogged) {
			navigate('/');
		}
	}, [auth, navigate]);
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
