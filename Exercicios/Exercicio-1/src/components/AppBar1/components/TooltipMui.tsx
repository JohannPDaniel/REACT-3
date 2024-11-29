import { Tooltip, IconButton, Avatar } from '@mui/material';

interface TooltipMuiProps {
	onClose?: (event: React.MouseEvent<HTMLElement>) => void;
}


export const TooltipMui = ({onClose}: TooltipMuiProps) => {
	return (
		<Tooltip title='Open settings'>
			<IconButton
				onClick={onClose}
				sx={{ p: 0 }}>
				<Avatar
					alt='Remy Sharp'
					src='/static/images/avatar/2.jpg'
				/>
			</IconButton>
		</Tooltip>
	);
};
