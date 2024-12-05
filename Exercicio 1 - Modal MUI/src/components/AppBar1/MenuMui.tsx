import { Menu, MenuItem, Typography, SxProps, Theme } from '@mui/material';

interface MenuMuiProps {
	hori1Mui: 'right' | 'left';
	hori2Mui: 'right' | 'left';
	verti1Mui: 'top' | 'bottom';
	verti2Mui: 'top' | 'bottom';
	sx?: SxProps<Theme>; 
	anchor?:
		| { anchorNav: HTMLElement | null }
		| { anchorUser: HTMLElement | null };
	onClose: () => void;
	pageSettings: string[];
}

export const MenuMui = ({
	hori1Mui,
	hori2Mui,
	verti1Mui,
	verti2Mui,
	sx = {}, 
	pageSettings,
	onClose,
	anchor,
}: MenuMuiProps) => {
	const anchorEl =
		anchor && 'anchorNav' in anchor
			? anchor.anchorNav
			: anchor && 'anchorUser' in anchor
			? anchor.anchorUser
			: null;

	return (
		<Menu
			id='menu-appbar'
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: verti1Mui,
				horizontal: hori1Mui,
			}}
			keepMounted
			transformOrigin={{
				vertical: verti2Mui,
				horizontal: hori2Mui,
			}}
			open={Boolean(anchorEl)}
			onClose={onClose}
			sx={sx} 
		>
			{pageSettings.map((page) => (
				<MenuItem
					key={page}
					onClick={onClose}>
					<Typography sx={{ textAlign: 'center' }}>{page}</Typography>
				</MenuItem>
			))}
		</Menu>
	);
};
