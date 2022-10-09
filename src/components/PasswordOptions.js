import { Stack, ButtonBase, SvgIcon } from '@mui/material';
import { MdArrowForward } from 'react-icons/md';

import { CharacterOptions, StrengthIndicator } from './';

const PasswordOptions = () => {
	const strengths = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];

	return (
		<Stack
			bgcolor={theme => theme.palette.grey.dark}
			sx={{
				px: { mobile: 2, tablet: 4 },
				pb: { mobile: 2, tablet: 4 },
				pt: { mobile: 2, tablet: 3 }
			}}
		>
			<CharacterOptions />
			{strengths.map((strength, i) => (
				<StrengthIndicator key={i} strength={strength} strengthLevel={i} />
			))}
			<ButtonBase
				sx={theme => ({
					...theme.typography.body1,
					py: 2.5,
					bgcolor: 'primary.main',
					[theme.breakpoints.down('tablet')]: {
						...theme.typography.body2,
						py: 2
					}
				})}
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
