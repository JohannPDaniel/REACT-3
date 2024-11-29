import AdbIcon from '@mui/icons-material/Adb';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { TooltipMui } from './TooltipMui';
import { TypographyMui } from './TypographyMui';
import { IconButtonMui } from './IconButtonMui';
import { MenuMui } from './MenuMui';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard'];
export function ToolbarMui() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<Toolbar disableGutters>
			<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
			<TypographyMui
				flexgrowMui={0}
				xsMui='none'
				mdMui='flex'
				variantMui='h6'
			/>

			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
				<IconButtonMui onClose={handleOpenNavMenu} />
				<MenuMui
					anchor={{ anchorUser: anchorElNav }}
					verti1Mui='bottom'
					verti2Mui='top'
					hori1Mui='left'
					hori2Mui='left'
					onClose={handleCloseNavMenu}
					sx={{ display: { xs: 'block', md: 'none' } }}
					pageSettings={pages}
				/>
			</Box>
			<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
			<TypographyMui
				flexgrowMui={1}
				xsMui='flex'
				mdMui='none'
				variantMui='h5'
			/>
			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				{pages.map((page) => (
					<Button
						key={page}
						onClick={handleCloseNavMenu}
						sx={{ my: 2, color: 'white', display: 'block' }}>
						{page}
					</Button>
				))}
			</Box>
			<Box sx={{ flexGrow: 0 }}>
				<TooltipMui onClose={handleOpenUserMenu} />
				<MenuMui
					anchor={{ anchorUser: anchorElUser }}
					verti1Mui='top'
					verti2Mui='top'
					hori1Mui='right'
					hori2Mui='right'
					onClose={handleCloseUserMenu}
					sx={{ mt: '40px' }}
					pageSettings={settings}
				/>
			</Box>
		</Toolbar>
	);
}
