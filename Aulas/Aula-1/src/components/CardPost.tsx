import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Chip, Grid2 } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const chips = ['Category 1', 'Category 2', 'Category 3'];

export function CardPost() {
	return (
		<Card>
			<CardHeader
				avatar={
					<Avatar
						alt='Remy Sharp'
						src='https://i.pravatar.cc/150?img=1'
					/>
				}
				title='Shrimp and Chorizo Paella'
				subheader='September 14, 2016'
			/>
			<CardMedia
				component='img'
				height='194'
				image='https://fastly.picsum.photos/id/237/500/300.jpg?hmac=31zB7Ceyovr2h1qoOGeI6Pg8iB8wDymSCLEasQlnHIE'
				alt='Paella dish'
			/>
			<CardContent>
				<Grid2
					container
					mb={2}
					spacing={1}>
					{chips.map((chip, index) => (
						<Grid2 key={index}>
							<Chip
								label={chip}
								size='small'
							/>
						</Grid2>
					))}
				</Grid2>
				<Typography variant='h6'>Title</Typography>
				<Typography variant='body2'>Descrição</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label='share'>
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
