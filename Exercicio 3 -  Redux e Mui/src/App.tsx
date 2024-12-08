import { Provider } from "react-redux";
import { GlobalStyle } from './config/Global/GlobalStyle';
import AppRoutes from './config/routes/AppRoutes';
import { store } from "./store";

function App() {
	return (
		<Provider store={store}>
			<AppRoutes />
			<GlobalStyle />
		</Provider>
	);
}

export default App;
