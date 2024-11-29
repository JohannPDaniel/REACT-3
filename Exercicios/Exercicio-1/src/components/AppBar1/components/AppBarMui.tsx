import { AppBar, Container } from '@mui/material';
import { ToolbarMui } from "./TollbarMui";

export const AppBarMui = () => {
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<ToolbarMui />
			</Container>
		</AppBar>
	);
};
