import { HeaderMui } from '../../components/Header/HeaderMui';
import { FooterMui } from '../../components/Footer/FooterMui';
import { Box, Container } from '@mui/material';
interface DefaultLayoutProps {
	children: React.ReactNode;
}
export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<Box sx={{display: "flex", flexDirection: "column", height: "100vh"}}>
			<HeaderMui />
			<Container sx={{py: 10, flexGrow: 1}}>{children}</Container>
			<FooterMui />
		</Box>
	);
};
