import { Stack, Typography } from '@mui/material';

import { Bar } from './';

const StrengthIndicator = ({ strength, strengthLevel }) => {
	return (
		<Stack direction='row' justifyContent='space-between'>
			<Typography>STRENGTH</Typography>
			<Stack direction='row'>
				<Typography mr={1}>{strength}</Typography>
				<Stack direction='row' spacing={1}>
					{Array.from({ length: 4 }).map((_, i) => (
						<Bar key={i} strengthLevel={strengthLevel} i={i} />
					))}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default StrengthIndicator;
