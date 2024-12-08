import { Box, Button, Grid2, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {
	resetErrors,
	setEmailError,
	setPasswordError,
	setRepeatPasswordError,
} from '../store/modules/Errors/ErrorsSlice';
import { validateEmail, validatePassword } from '../validações/validações';
import { CreateCount } from './CreateCount';
import { TitleImage } from './TitleImage';

export const FormSignUp = () => {
	const dispatch = useDispatch();

	const {
		emailError,
		emailMessage,
		passwordError,
		passwordMessage,
		repeatPasswordError,
		repeatPasswordMessage,
	} = useSelector((state: RootState) => state.errors);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const email = event.currentTarget.email.value;
		const password = event.currentTarget.password.value;
		const repeatPassword = event.currentTarget.repeatPassword.value;

		const emailValidation = validateEmail(email);
		if (!emailValidation.isValid) {
			dispatch(
				setEmailError({
					error: true,
					message: emailValidation.errorMessage!,
				})
			);
		} else {
			dispatch(setEmailError({ error: false, message: '' }));
		}

		const passwordValidation = validatePassword(password, repeatPassword);
		if (!passwordValidation.isValid) {
			if (passwordValidation.field === 'password') {
				dispatch(
					setPasswordError({
						error: true,
						message: passwordValidation.errorMessage!,
					})
				);
			} else {
				dispatch(setPasswordError({ error: false, message: '' }));
			}

			if (passwordValidation.field === 'repeatPassword') {
				dispatch(
					setRepeatPasswordError({
						error: true,
						message: passwordValidation.errorMessage!,
					})
				);
			} else {
				dispatch(setRepeatPasswordError({ error: false, message: '' }));
			}
			return;
		}

		dispatch(resetErrors());

		console.log('Formulário enviado com sucesso!');
	};

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
					error={emailError}
					helperText={emailMessage}
				/>
				<TextField
					type='password'
					label='Password'
					name='password'
					placeholder='Password'
					error={passwordError}
					helperText={passwordMessage}
				/>
				<TextField
					type='password'
					label='Repeat password'
					placeholder='Repeat Password'
					name='repeatPassword'
					error={repeatPasswordError}
					helperText={repeatPasswordMessage}
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
