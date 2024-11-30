import { Search, ShareRounded } from '@mui/icons-material';
import {
	Grid2,
	Box,
	Chip,
	TextField,
	InputAdornment,
	IconButton,
	useMediaQuery,
} from '@mui/material';

const categories = ['All categories', 'Company', 'Designer', 'Engineering'];

export const SectionChips = () => {
	const mobile = useMediaQuery('(max-width:599px)');
	return (
		<Grid2
			size={12}
			display='flex'
			flexDirection={{ xs: 'column', sm: 'row' }}
			alignItems='center'
			justifyContent='space-between'
			gap={2}>
			<Grid2
				container
				justifyContent="center"
				spacing={1}>
				{categories.map((cat) => (
					<Grid2 key={cat}>
						<Chip
							label={cat}
							size={mobile ? 'small' : 'medium'}
							onClick={() => alert(cat)}
						/>
					</Grid2>
				))}
			</Grid2>
			<Box sx={{ display: 'flex' }}>
				<TextField
					size='small'
					placeholder='Search...'
					sx={{ width: '100%', minWidth: '200px' }}
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position='start'>
									<Search />
								</InputAdornment>
							),
						},
					}}
				/>
				<IconButton>
					<ShareRounded />
				</IconButton>
			</Box>
		</Grid2>
	);
};
