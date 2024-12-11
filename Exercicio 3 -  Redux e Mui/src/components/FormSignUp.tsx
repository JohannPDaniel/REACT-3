import { Box, Button, Grid2, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorField } from '../config/types/ErrorField';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { postUser, resetSuccess } from '../store/modules/auth/usersSlice';
import { isSequential } from '../validações/validações';
import { CreateCount } from './CreateCount';
import { TitleImage } from './TitleImage';

export const FormSignUp = () => {
	const dispatch = useAppDispatch();
	const authUsers = useAppSelector((state) => state.authUser);
	const navigate = useNavigate();
	const [errors, setErrors] = useState<ErrorField>({
		email: '',
		password: '',
		repeatPassword: '',
	});

	function validate(
		email: string,
		password: string,
		repeatPassword: string
	): boolean {
		if (!email) {
			setErrors({ email: 'Email é obrigatório !!!' });
			return false;
		}

		if (!email.includes('@')) {
			setErrors({ email: 'O Email deve conter (@) para ser válido' });
			return false;
		}

		if (!/^[a-zA-Z0-9._%+-]{3,}@/.test(email)) {
			setErrors({
				email: 'O Email deve conter pelo menos 3 letras antes do (@)',
			});
			return false;
		}

		if (!/(gmail\.com|hotmail\.com|outlook\.com)$/.test(email)) {
			setErrors({
				email:
					'O Email deve ser de um domínio válido (gmail.com, hotmail.com ou outlook.com)',
			});
			return false;
		}

		if (!password) {
			setErrors({ password: 'Password é obrigatório !!!' });
			return false;
		}

		if (password.length < 4) {
			setErrors({ password: 'A Senha deve conter mais de 4 caracteres.' });
			return false;
		}

		if (isSequential(password)) {
			setErrors({
				password:
					'A senha não pode ser um conjunto de caracteres sequenciais (exemplo: 1123456)',
			});
			return false;
		}

		if (password !== repeatPassword) {
			setErrors({ repeatPassword: 'As senhas devem ser iguais.' });
			return false;
		}

		setErrors({});
		return true;
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const email = event.currentTarget.email.value;
		const password = event.currentTarget.password.value;
		const repeatPassword = event.currentTarget.repeatPassword.value;

		if (!validate(email, password, repeatPassword)) {
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
		if (authUsers.success) {
			dispatch(resetSuccess());
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
