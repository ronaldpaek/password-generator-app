import { Stack, Typography } from '@mui/material';

import { Bar } from './';

const StrengthIndicator = ({ strength, strengthLevel, value }) => {
	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			my={4}
			sx={theme => ({
				bgcolor: theme.palette.grey.veryDark,
				px: { mobile: 2, tablet: 4 },
				py: { mobile: 2, tablet: 3 },
				display: Math.floor(value / 5) === strengthLevel ? 'flex' : 'none'
			})}
		>
			<Typography
				variant='body1'
				sx={theme => ({
					color: theme.palette.grey.main,
					[theme.breakpoints.down('tablet')]: {
						...theme.typography.body2
					}
				})}
			>
				STRENGTH
			</Typography>
			<Stack direction='row'>
				<Typography
					variant='h2'
					mr={1}
					sx={theme => ({
						color: theme.palette.white.main,
						[theme.breakpoints.down('tablet')]: {
							...theme.typography.body1
						},
						'@media (max-width: 360px)': {
							display: 'none'
						}
					})}
				>
					{strength}
				</Typography>
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
