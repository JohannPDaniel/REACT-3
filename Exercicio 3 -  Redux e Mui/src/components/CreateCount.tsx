import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface CreateCountProps {
    nameLink: string;
    to: string;
}

export const CreateCount = ({nameLink, to}: CreateCountProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				textAlign: 'center',
				gap: 2,
			}}>
			<Link
				to={to}
				style={{ fontSize: 16 }}>
				{nameLink}
			</Link>
			<Typography variant='body2'>
				Copyright &copy;{' '}
				<span style={{ textDecoration: 'underline' }}>Your Website</span> 2024
			</Typography>
		</Box>
	);
};
