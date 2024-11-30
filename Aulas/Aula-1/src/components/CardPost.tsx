import { Favorite, Share } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Chip,
	Grid2,
	IconButton,
	Rating,
	Typography,
} from '@mui/material';
import { useState } from 'react';

interface CardPostProps {
	author: {
		avatar: string;
		name: string;
	};
	createdAt: Date;
	title: string;
	description: string;
	categories: string[];
	img: {
		src: string;
		alt: string;
	};
	rating: number;
}

export function CardPost({
	author,
	categories,
	createdAt,
	description,
	img,
	rating,
	title,
}: CardPostProps) {
	const [like, setLike] = useState(false);

	const toggleLike = () => {
		setLike((prev) => !prev);
	};

	const handleShared = () => {
		alert(`Shared ${window.location.href}/${title}`);
	};
	return (
		<Card sx={{ minHeight: '100%' }}>
			<CardHeader
				avatar={
					<Avatar
						alt={`Image do ${author.name}`}
						src={author.avatar}
					/>
				}
				title={author.name}
				subheader={createdAt.toLocaleDateString('pt-Br')}
			/>
			<CardMedia
				component='img'
				height='194'
				image={img.src}
				alt={img.alt}
			/>
			<CardContent sx={{ minHeight: 235 }}>
				<Grid2
					container
					mb={2}
					spacing={1}>
					{categories.map((cat, index) => (
						<Grid2 key={index}>
							<Chip
								label={cat}
								size='small'
							/>
						</Grid2>
					))}
				</Grid2>
				<Typography variant='h6'>{title}</Typography>
				<Typography variant='body2'>{description}</Typography>
			</CardContent>
			<CardActions
				disableSpacing
				sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Box>
					<IconButton
						onClick={toggleLike}
						aria-label='add to favorites'>
						<Favorite color={like ? 'error' : 'action'} />
					</IconButton>
					<IconButton
						onClick={handleShared}
						aria-label='share'>
						<Share />
					</IconButton>
				</Box>
				<Rating
					name='half-rating'
					defaultValue={rating}
					precision={0.5}
					readOnly
				/>
			</CardActions>
		</Card>
	);
}
