import {
	Grid2,
	Box,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
} from '@mui/material';
import { CreateCount } from './createCount';
import { TitleImage } from "./TitleImage";

export const FormSignIn = () => {
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
			<TitleImage title="Sign in" />
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
				<FormControlLabel
					value='rememberMe'
					control={<Checkbox />}
					label='Remember me'
					labelPlacement='end'
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
