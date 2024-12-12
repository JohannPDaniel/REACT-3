import { Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Home = () => {
	const dispatch = useAppDispatch()
	const auth = useAppSelector((state) => state.authReducer);
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth.isLogged) {
			navigate('/');
		}
	}, [navigate, auth.isLogged, dispatch]);
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
