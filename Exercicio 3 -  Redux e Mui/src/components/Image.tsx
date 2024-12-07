import { Grid2 } from '@mui/material';

interface ImageProps {
	src: string;
	alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
	return (
		<Grid2
			size={{ xs: 0, sm: 6, md: 7, lg: 8 }}
			sx={{
				overflow: 'hidden',
				height: '100vh',
				display: { xs: 'none', sm: 'block' },
			}}>
			<img
				src={src}
				alt={alt}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					overflowY: 'hidden',
				}}
			/>
		</Grid2>
	);
};
