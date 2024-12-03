import { CssBaseline } from "@mui/material";
import { GlobalStyle } from './config/global/GlobalStyle';
import AppRoutes from './config/routes/AppRoutes';

function App() {
	return (
		<>
      <AppRoutes />
      <CssBaseline />
			<GlobalStyle />
		</>
	);
}

export default App;
