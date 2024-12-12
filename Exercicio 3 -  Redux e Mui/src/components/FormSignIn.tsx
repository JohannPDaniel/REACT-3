/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid2,
	TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorField } from '../config/types/ErrorField';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { CreateCount } from './CreateCount';
import { TitleImage } from './TitleImage';
import { login, toggleRemember } from '../store/modules/auth/authSlice';

export const FormSignIn = () => {
	const [errors, setErrors] = useState<ErrorField>({
		email: '',
		password: '',
	});

	const dispatch = useAppDispatch();
	const authUser = useAppSelector((state) => state.authReducer);
	const navigate = useNavigate();

	function validate(email: string, password: string) {
		if (!email) {
			setErrors({ email: 'Email é obrigatório !!!' });
			return;
		}
		if (!password) {
			setErrors({ password: 'Password é obrigatório !!!' });
			return;
		}
		setErrors({});
	}

	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = e.currentTarget.email.value;
		const password = e.currentTarget.password.value;
		const remember = e.currentTarget.remember.checked;

		validate(email, password);
		if (errors.email || errors.password) {
			return;
		}

		dispatch(login({ email, password, remember }));
	};

	const handleRemember = (_: any, checked: boolean) => {
		dispatch(toggleRemember(checked));
	};
	useEffect(() => {
		if (authUser.isLogged) {
			console.log('Usuário logado!');
			navigate('/home');
		}
	}, [authUser.isLogged, navigate]);
	return (
		<Grid2
			size={{ xs: 12, sm: 6, md: 5, lg: 4 }}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'flex-start',
				height: 'auto',
				padding: 8,
			}}>
			<TitleImage title='Sign in' />
			<Box
				component='form'
				onSubmit={handleLogin}
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
				}}>
				<TextField
					type='email'
					label='E-mail'
					name='email'
					placeholder='E-mail'
					error={!!errors.email}
					helperText={errors.email}
					onChange={(e) => {
						if (e.target.value) {
							setErrors({ ...errors, email: '' });
						}
					}}
				/>
				<TextField
					type='password'
					label='Password'
					name='password'
					placeholder='Password'
					error={!!errors.password}
					helperText={errors.password}
				/>
				<FormControlLabel
					value='rememberMe'
					name='remember'
					control={<Checkbox />}
					label='Remember me'
					labelPlacement='end'
					onChange={handleRemember}
				/>
				<Button
					variant='contained'
					type='submit'>
					Entrar
				</Button>

				<CreateCount
					to='/signup'
					nameLink='Não tem uma conta? Cadastre-se'
				/>
			</Box>
		</Grid2>
	);
};
