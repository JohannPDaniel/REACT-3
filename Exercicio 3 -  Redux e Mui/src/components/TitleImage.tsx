import { Box, Typography } from '@mui/material';

interface TitleImageProps {
    title: string;
}

export const TitleImage = ({title}: TitleImageProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 1,
				mb: 5,
			}}>
			<img
				src='https://www.growdev.com.br/assets/images/logo_growdev.svg'
				alt='Logo da Growdev'
			/>
			<Typography variant='h4'>{title}</Typography>
		</Box>
	);
};
