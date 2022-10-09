import { FormControlLabel, Checkbox } from '@mui/material';

const CheckboxLabel = ({ label }) => {
	return (
		<FormControlLabel control={<Checkbox defaultChecked />} label={label} />
	);
};

export default CheckboxLabel;
