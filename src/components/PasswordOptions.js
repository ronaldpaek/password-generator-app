import { useState } from 'react';
import { Stack, ButtonBase, SvgIcon } from '@mui/material';
import { MdArrowForward } from 'react-icons/md';

import { CharacterOptions, StrengthIndicator } from './';

const PasswordOptions = () => {
	const strengths = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];

	const [value, setValue] = useState(10);

	const handleChange = (_, newValue) => {
		setValue(newValue);
	};

	return (
		<Stack
			bgcolor={theme => theme.palette.grey.dark}
			sx={{
				px: { mobile: 2, tablet: 4 },
				pb: { mobile: 2, tablet: 4 },
				pt: { mobile: 2, tablet: 3 }
			}}
		>
			<CharacterOptions value={value} handleChange={handleChange} />
			{strengths.map((strength, i) => (
				<StrengthIndicator key={i} strength={strength} strengthLevel={i} value={value} />
			))}
			<ButtonBase
				sx={theme => ({
					...theme.typography.body1,
					py: 2.5,
					bgcolor: 'primary.main',
					'&:hover': {
						bgcolor: theme.palette.grey.dark,
						border: `2px solid ${theme.palette.primary.main}`,
						color: 'primary.main'
					},
					[theme.breakpoints.down('tablet')]: {
						...theme.typography.body2,
						py: 2
					}
				})}
				onClick={() => {}}
			>
				Generate
				<SvgIcon
					component={MdArrowForward}
					sx={{
						fontSize: 16,
						ml: 3
					}}
				/>
			</ButtonBase>
		</Stack>
	);
};

export default PasswordOptions;
