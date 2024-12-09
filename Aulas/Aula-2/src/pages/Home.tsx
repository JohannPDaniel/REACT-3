import { Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from "../store/modules/userLogged/userLoggedSlice";

export const Home = () => {
    const userLoggedRedux = useAppSelector( ( state ) => state.userLogged );
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    function handleLogout () {
        dispatch(logout())
    }
    
	useEffect(() => {
		if (!userLoggedRedux.id) {
			navigate('/');
		}
	}, [userLoggedRedux, navigate]);

	return (
		<>
			<Typography variant='h2'>Welcome, {userLoggedRedux.name}</Typography>
			<Button
				variant='contained'
				color='error'
				onClick={handleLogout}>
				Logout
			</Button>
		</>
	);
};
