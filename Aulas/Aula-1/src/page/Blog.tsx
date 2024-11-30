import { Grid2, Typography } from '@mui/material';
import { SectionChips } from './../components/SectionChips';
import { CardPost } from "../components/CardPost";

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

			<Grid2 size={12}>
				<CardPost />
			</Grid2>
		</Grid2>
	);
};
