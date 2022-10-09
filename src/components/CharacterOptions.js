import { Stack, Typography, Slider, FormGroup } from '@mui/material';

import { CheckboxLabel } from './';

const CharacterOptions = () => {
	const labels = [
		'Include Uppercase Letters',
		'Include Lowercase Letters',
		'Include Numbers',
		'Include Symbols'
	];

	return (
		<Stack>
			<Stack direction='row'>
				<Typography>Character Length</Typography>
				<Typography>10</Typography>
			</Stack>
			<Slider />
			<FormGroup>
				{labels.map((label, i) => (
					<CheckboxLabel key={i} label={label} />
				))}
			</FormGroup>
		</Stack>
	);
};

export default CharacterOptions;
