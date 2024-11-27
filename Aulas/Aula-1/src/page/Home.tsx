import { Button, Typography } from "@mui/material";
import { Fingerprint } from '@mui/icons-material';
export const Home = () => {
	return (
		<>
			<Typography variant='h1'>Olá mundo</Typography>
			<Button>Default</Button>
			<Button
				variant='contained'
				color='success'>
				Default
			</Button>
			<Fingerprint fontSize="large" />
		</>
	);
};
