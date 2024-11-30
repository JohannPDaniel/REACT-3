import { Copyright } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";

export const FooterMui = () => {
	return (
		<Box
			component='footer'
			sx={{ py: 4, display: "flex", justifyContent: "center" }}>
			<Typography variant='body1' sx={{display: "flex", alignItems: "center"}}>
				Developed by 19ª edition
			</Typography>
				<Copyright fontSize='medium' sx={{mx: 1}} />
				<Link to='https://www.growdev.com.br/' target="_blank">Growdev</Link>
		</Box>
	);
};
