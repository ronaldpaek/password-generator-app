import { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

const CheckboxLabel = ({ label, handleToggleOption }) => {
	const [checked, setChecked] = useState(true);
	return (
		<FormControlLabel
			control={
				<Checkbox
					checked={checked}
					onChange={() => {
						setChecked(checked => !checked);
						console.log(checked);
						handleToggleOption(label.split(' ')[1], checked);
					}}
				/>
			}
			label={label}
			sx={theme => ({
				'& .MuiFormControlLabel-label': {
					color: theme.palette.white.main,
					...theme.typography.body1,
					[theme.breakpoints.down('tablet')]: {
						...theme.typography.body2
					}
				},
				'& .MuiCheckbox-root': {
					color: theme => (checked ? 'primary.main' : theme.palette.white.main)
				}
			})}
		/>
	);
};

export default CheckboxLabel;
