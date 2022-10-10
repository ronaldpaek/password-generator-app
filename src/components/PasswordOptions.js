import { useState } from 'react';
import { Stack, ButtonBase, SvgIcon } from '@mui/material';
import { MdArrowForward } from 'react-icons/md';

import { CharacterOptions, StrengthIndicator } from './';
import {
	characters,
	generateRandomNumber,
	strengths,
	getPasswordStrength
} from '../constants';
import { usePasswordContext } from '../contexts/PasswordContextProvider';

const PasswordOptions = () => {
	const { setPassword } = usePasswordContext();
	const [value, setValue] = useState(0);
	const [options, setOptions] = useState([]);
	const [strengthLevel, setStrengthLevel] = useState(0);

	const getStrengthLevel = () => {
		if (!options.length || value === 0) {
			setStrengthLevel(0);
			return;
		}
		const lowerCased = options.map(option => option.toLowerCase());
		setStrengthLevel(getPasswordStrength(lowerCased, value));
	};

	const handleChange = (_, newValue) => {
		setValue(newValue);
		getStrengthLevel();
	};

	const handleToggleOption = (option, checked) => {
		if (checked) {
			setOptions(options.filter(o => o !== option));
		} else {
			setOptions(prevOptions => [...prevOptions, option]);
		}
		getStrengthLevel();
	};

	const handleGeneratePassword = () => {
		if (!options.length || value === 0) {
			setPassword('');
			return;
		}

		let newPassword = '';
		for (let i = 0; i < value; i++) {
			let randomIdx = generateRandomNumber(options.length);
			const key = options[randomIdx].toLowerCase();
			randomIdx = generateRandomNumber(characters[key].length);
			newPassword += characters[key][randomIdx];
		}

		setPassword(newPassword);
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
			<CharacterOptions
				value={value}
				handleChange={handleChange}
				handleToggleOption={handleToggleOption}
			/>
			{strengths.map((strength, i) => (
				<StrengthIndicator
					key={i}
					strength={strength}
					i={i}
					strengthLevel={strengthLevel}
					value={value}
				/>
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
				onClick={handleGeneratePassword}
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
