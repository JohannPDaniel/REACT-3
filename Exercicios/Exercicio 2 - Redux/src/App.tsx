import { CssBaseline } from '@mui/material';
import { GlobalStyle } from './config/global/GlobalStyle';
import AppRoutes from './config/routes/AppRoutes';
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
	return (
		<Provider store={store}>
			<AppRoutes />
			<CssBaseline />
			<GlobalStyle />
		</Provider>
	);
}

export default App;
