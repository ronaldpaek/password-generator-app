import { Stack, ButtonBase } from '@mui/material';

import { CharacterOptions, StrengthIndicator } from './';

const PasswordOptions = () => {
	const strengths = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];

	return (
		<Stack p={4}>
			<CharacterOptions />
			{strengths.map((strength, i) => (
				<StrengthIndicator key={i} strength={strength} strengthLevel={i} />
      ))}
      <ButtonBase>Generate</ButtonBase>
		</Stack>
	);
};

export default PasswordOptions;
