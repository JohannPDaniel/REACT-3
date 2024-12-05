import { CSSObject, GlobalStyles } from '@mui/material';

const styles: Record<string, CSSObject> = {
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
		fontFamily: "'Poppins', sans-serif",
	},

	a: {
		textDecoration: 'none',
		color: 'black',
	},
};

export function GlobalStyle() {
	return <GlobalStyles styles={styles} />;
}
