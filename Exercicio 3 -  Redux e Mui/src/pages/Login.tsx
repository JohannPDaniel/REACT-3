import { Grid2 } from '@mui/material';
import { FormSignIn } from '../components/FormSignIn';
import { Image } from '../components/Image';

export const Login = () => {
	return (
		<Grid2 container>
			<Grid2 size={12}>
				<Grid2 container>
					<Image
						src='https://static6.depositphotos.com/1003098/572/i/450/depositphotos_5726112-stock-photo-dramatic-sunset-on-ocean.jpg'
						alt='Entardecer'
					/>
					<FormSignIn />
				</Grid2>
			</Grid2>
		</Grid2>
	);
};
