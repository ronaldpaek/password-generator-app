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
			<Stack direction='row' justifyContent='space-between' alignItems='center'>
				<Typography
					variant='body1'
					sx={theme => ({
						color: theme.palette.white.main,
						[theme.breakpoints.down('tablet')]: {
							fontSize: 16,
							lineHeight: '21px'
						}
					})}
				>
					Character Length
				</Typography>
				<Typography
					variant='h1'
					sx={theme => ({
						color: 'primary.main',
						[theme.breakpoints.down('tablet')]: {
							...theme.typography.h2
						}
					})}
				>
					10
				</Typography>
			</Stack>
			<Slider
				sx={{
					'& .MuiSlider-thumb': {
						color: theme => theme.palette.white.main
					}
				}}
			/>
			<FormGroup>
				{labels.map((label, i) => (
					<CheckboxLabel key={i} label={label} />
				))}
			</FormGroup>
		</Stack>
	);
};

export default CharacterOptions;
