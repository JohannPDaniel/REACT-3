import { Box, Button, Grid2, TextField } from '@mui/material';
import { validateEmail, validatePassword } from '../validações/validações';
import { CreateCount } from './CreateCount';
import { TitleImage } from './TitleImage';
import { useState } from 'react';

export const FormSignUp = () => {

const [emailError, setEmailError] = useState<string | null>(null);
const [passwordError, setPasswordError] = useState<string | null>(null);
const [repeatPasswordError, setRepeatPasswordError] = useState<string | null>(
	null
);

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	event.preventDefault();

	const email = event.currentTarget.email.value;
	const password = event.currentTarget.password.value;
	const repeatPassword = event.currentTarget.repeatPassword.value;

	// Validação do email
	const emailValidation = validateEmail(email);
	if (!emailValidation.isValid) {
		setEmailError(emailValidation.errorMessage);
	} else {
		setEmailError(null);
	}

	// Validação de senha
	const passwordValidation = validatePassword(password, repeatPassword);
	if (!passwordValidation.isValid) {
		if (passwordValidation.field === 'password') {
			setPasswordError(passwordValidation.errorMessage);
			setRepeatPasswordError(null);
		} else if (passwordValidation.field === 'repeatPassword') {
			setRepeatPasswordError(passwordValidation.errorMessage);
			setPasswordError(null);
		}
		return; // Retorna sem enviar o formulário
	}

	// Resetando mensagens de erro caso válido
	setPasswordError(null);
	setRepeatPasswordError(null);

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
					error={!!emailError}
					helperText={emailError}
				/>
				<TextField
					type='password'
					label='Password'
					name='password'
					placeholder='Password'
					error={!!passwordError}
					helperText={passwordError}
				/>
				<TextField
					type='password'
					label='Repeat password'
					placeholder='Repeat Password'
					name='repeatPassword'
					error={!!repeatPasswordError}
					helperText={repeatPasswordError}
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
