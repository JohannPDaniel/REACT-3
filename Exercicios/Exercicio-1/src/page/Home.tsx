import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import { MenuMui } from '../components/MenuMui';
import { TypographyMui } from '../components/TypographyMui';
import { Toolbar } from "@mui/material";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard'];

export function Home() {
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
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<TypographyMui
						flexgrowMui={0}
						xsMui='none'
						mdMui='flex'
						variantMui='h6'
					/>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
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
						<Tooltip title='Open settings'>
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}>
								<Avatar
									alt='Remy Sharp'
									src='/static/images/avatar/2.jpg'
								/>
							</IconButton>
						</Tooltip>
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
			</Container>
		</AppBar>
	);
}
