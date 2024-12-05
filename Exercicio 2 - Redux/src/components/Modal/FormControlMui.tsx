import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material';

interface FormControlMui {
	select?: string;
	onChange?: (event: SelectChangeEvent<string>) => void;
}

export const FormControlMui = ({ select, onChange }: FormControlMui) => {
	return (
		<FormControl
			fullWidth
			sx={{ maxWidth: 350 }}>
			<InputLabel id='demo-simple-select-label'>Escolha uma opção</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				name='select-value'
				value={select ?? ''}
				onChange={onChange}
				defaultValue=''
				label='Escolha uma opção'>
				<MenuItem value=''>Escolha uma opção</MenuItem>
				<MenuItem value='entrada'>Entrada</MenuItem>
				<MenuItem value='saída'>Saída</MenuItem>
			</Select>
		</FormControl>
	);
};
