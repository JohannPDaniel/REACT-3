import { AppBar, Container } from '@mui/material';
import { ToolbarMui } from './TollbarMui';

export const AppBarMui = () => {
	return (
		<AppBar position='fixed'>
			<Container maxWidth="lg">
				<ToolbarMui />
			</Container>
		</AppBar>
	);
};
