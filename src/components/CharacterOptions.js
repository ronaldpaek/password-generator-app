import { useState } from 'react';
import { Stack, Typography, Slider, FormGroup } from '@mui/material';

import { CheckboxLabel } from './';

const CharacterOptions = () => {
	const labels = [
		'Include Uppercase Letters', // 65-90
		'Include Lowercase Letters', // 97-122
		'Include Numbers', //0-9
		'Include Symbols' //!@#$%^&*
	];

	const [options, setOptions] = useState([
		'Uppercase',
		'Lowercase',
		'Numbers',
		'Symbols'
	]);

	const handleToggleOption = () => {};

	return (
		<Stack>
			<Stack direction='row' justifyContent='space-between' alignItems='center'>
				<Typography
					variant='body1'
					sx={theme => ({
						color: theme.palette.white.main,
						[theme.breakpoints.down('tablet')]: {
							...theme.typography.body2
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
						color: theme => theme.palette.white.main,
						'&:hover': {
							color: theme => theme.palette.grey.veryDark
						}
					}
				}}
			/>
			<FormGroup>
				{labels.map((label, i) => (
					<CheckboxLabel
						key={i}
						label={label}
						handleToggleOption={handleToggleOption}
					/>
				))}
			</FormGroup>
		</Stack>
	);
};

export default CharacterOptions;
