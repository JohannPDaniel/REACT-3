import { Grid2, Typography } from '@mui/material';
import { SectionChips } from './../components/SectionChips';
import { CardPost } from '../components/CardPost';
import { blogList } from '../mock/blog-list';

export const Blog = () => {
	return (
		<Grid2
			container
			spacing={2}>
			<Grid2 size={12}>
				<Typography variant='h2'>Blog</Typography>
			</Grid2>
			<Grid2 size={12}>
				<Typography variant='body1'>Blog</Typography>
			</Grid2>
			<SectionChips />

			{blogList.map((post, index) => (
				<Grid2 key={index} size={{xs: 12, sm: 6, md: 6, lg: 4}}>
					<CardPost
						author={post.author}
						categories={post.categories}
						description={post.description}
						img={post.img}
						title={post.title}
						createdAt={post.createdAt}
						rating={post.rating}
					/>
				</Grid2>
			))}
		</Grid2>
	);
};
