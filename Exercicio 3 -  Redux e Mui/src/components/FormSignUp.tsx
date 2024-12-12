import { Box, Button, Grid2, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorField } from '../config/types/ErrorField';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { postUser, resetSuccess } from '../store/modules/user/usersSlice';
import { validate } from '../validations/validate';
import { CreateCount } from './CreateCount';
import { TitleImage } from './TitleImage';

export const FormSignUp = () => {
	const dispatch = useAppDispatch();
	const authUsers = useAppSelector((state) => state.user);
	const navigate = useNavigate();
	const [errors, setErrors] = useState<ErrorField>({
		email: '',
		password: '',
		repeatPassword: '',
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const email = event.currentTarget.email.value;
		const password = event.currentTarget.password.value;
		const repeatPassword = event.currentTarget.repeatPassword.value;

		if (!validate(email, password, repeatPassword, setErrors)) {
			return;
		}

		const newUser = {
			id: crypto.randomUUID(),
			email,
			password,
		};

		const isEmailExists = authUsers.postUsers.some(
			(user) => user.email === email
		);

		if (isEmailExists) {
			setErrors({ email: 'Este email já está cadastrado.' });
			return;
		}

		dispatch(postUser(newUser));
	};

	useEffect(() => {
		if ( authUsers.isLogged) {
			dispatch(resetSuccess())
			navigate('/');
		}
	}, [authUsers, navigate, dispatch]);

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
			<TitleImage title='Sign up' />
			<Box
				component='form'
				onSubmit={handleSubmit}
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
				}}>
				<TextField
					type='email'
					label='E-mail'
					placeholder='E-mail'
					name='email'
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
				<TextField
					type='password'
					label='Repeat password'
					placeholder='Repeat Password'
					name='repeatPassword'
					error={!!errors.repeatPassword}
					helperText={errors.repeatPassword}
				/>
				<Button
					variant='contained'
					type='submit'>
					Criar Conta
				</Button>

				<CreateCount
					to='/'
					nameLink='Já possui conta? Vá para o Login'
				/>
			</Box>
		</Grid2>
	);
};
