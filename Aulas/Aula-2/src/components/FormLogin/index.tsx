import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid2,
	IconButton,
	InputAdornment,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const FormLogin = () => {
	const [showPassword, setShowPassword] = useState(false);
	function handleImplements() {
		alert('Not implementeds !!!');
	}

	return (
		<Grid2
			container
			spacing={2}>
			<Grid2 size={12}>
				<Typography variant='h4'>Sign in</Typography>
			</Grid2>
			<Grid2 size={12}>
				<FormControl fullWidth>
					<FormLabel htmlFor='email'>E-mail</FormLabel>
					<TextField
						id='email'
						placeholder='your@email.com'
						name='email'
						type='email'
					/>
				</FormControl>
			</Grid2>
			<Grid2 size={12}>
				<FormControl fullWidth>
					<FormLabel htmlFor='password'>Password</FormLabel>
					<TextField
						id='password'
						placeholder='*******'
						name='password'
						type={showPassword ? 'text' : 'password'}
						variant='outlined'
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton
										aria-label={
											showPassword
												? 'hide the password'
												: 'display the password'
										}
										onClick={() => setShowPassword((prev) => !prev)}
										edge='end'>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</FormControl>
			</Grid2>
			<Grid2 size={12}>
				<FormControlLabel
					control={<Checkbox />}
					label='Remember me'
				/>
			</Grid2>
			<Grid2 size={12}>
				<Button
					variant='contained'
					fullWidth>
					Sign in
				</Button>
			</Grid2>
			<Grid2
				size={12}
				textAlign='center'>
				<Link
					to='#'
					onClick={handleImplements}>
					Forgot your password?
				</Link>
			</Grid2>
		</Grid2>
	);
};
