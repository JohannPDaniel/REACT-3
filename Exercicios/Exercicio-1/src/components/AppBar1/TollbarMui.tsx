import { Adb } from '@mui/icons-material';
import { Box, Button, Toolbar } from '@mui/material';
import { useState } from 'react';
import { IconButtonMui } from './IconButtonMui';
import { MenuMui } from './MenuMui';
import { TooltipMui } from './TooltipMui';
import { TypographyMui } from './TypographyMui';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard'];
export function ToolbarMui() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

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
			<Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
			<Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
