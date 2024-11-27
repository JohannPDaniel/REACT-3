import { CssBaseline } from '@mui/material';
import { GlobalStyle } from './config/global/GlobalStyles';
import AppRoutes from './config/routes/AppRoutes';

function App() {
	return (
		<>
			<CssBaseline />
			<GlobalStyle />
			<AppRoutes />
		</>
	);
}

export default App;
