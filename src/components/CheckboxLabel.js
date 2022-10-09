import { FormControlLabel, Checkbox } from '@mui/material';

const CheckboxLabel = ({ label }) => {
	return (
		<FormControlLabel
			control={<Checkbox defaultChecked />}
			label={label}
			sx={theme => ({
        '& .MuiFormControlLabel-label': {
          color: theme.palette.white.main,
					...theme.typography.body1,
					[theme.breakpoints.down('tablet')]: {
						...theme.typography.body2
					}
				}
			})}
		/>
	);
};

export default CheckboxLabel;
