import { Grid2, Box, TextField, Button } from '@mui/material';
import { CreateCount } from './createCount';
import { TitleImage } from "./TitleImage";

export const FormSignUp = () => {
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
            } }>
            <TitleImage title="Sign up" />
			<Box
				component='form'
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
				/>
				<TextField
					type='password'
					label='Password'
					placeholder='Password'
				/>
				<TextField
					type='password'
					label='Repeat password'
					placeholder='Repeat Password'
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
