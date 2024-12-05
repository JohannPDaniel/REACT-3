import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface IconButtonMuiProps {
    onClose?: (event: React.MouseEvent<HTMLElement>) => void
}

export const IconButtonMui = ({onClose}: IconButtonMuiProps) => {

	return (
		<IconButton
			size='large'
			aria-label='account of current user'
			aria-controls='menu-appbar'
			aria-haspopup='true'
			onClick={onClose}
			color='inherit'>
			<MenuIcon />
		</IconButton>
	);
};
