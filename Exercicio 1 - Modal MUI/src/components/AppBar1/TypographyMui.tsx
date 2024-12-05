import { Typography } from '@mui/material';

interface TypographyMuiProps {
    variantMui: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    xsMui: "none" | "flex"
    mdMui: "none" | "flex"
    flexgrowMui: 0 | 1
}

export const TypographyMui = ( { variantMui, xsMui, mdMui, flexgrowMui }: TypographyMuiProps ) => {
	return (
		<Typography
			variant={variantMui}
            noWrap
			component='a'
			href='#app-bar-with-responsive-menu'
			sx={{
				mr: 2,
                display: { xs: xsMui , md: mdMui },
                flexGrow: flexgrowMui,
				fontFamily: 'monospace',
				fontWeight: 700,
				letterSpacing: '.3rem',
				color: 'inherit',
				textDecoration: 'none',
			}}>
			LOGO
		</Typography>
	);
};
