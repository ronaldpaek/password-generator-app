import { useState } from 'react';
import { Stack, ButtonBase, SvgIcon } from '@mui/material';
import { MdArrowForward } from 'react-icons/md';

import { CharacterOptions, StrengthIndicator } from './';
import { characters, generateRandomNumber, strengths } from '../constants';
import { usePasswordContext } from '../contexts/PasswordContextProvider';

const PasswordOptions = () => {
	const { setPassword } = usePasswordContext();
	const [value, setValue] = useState(0);
	const [options, setOptions] = useState([]);

	// const [strengthLevel, setStrengthLevel] = useState()

	const handleChange = (_, newValue) => {
		setValue(newValue);
	};

	const handleToggleOption = (option, checked) => {
		if (checked) {
			setOptions(options.filter(o => o !== option));
		} else {
			setOptions(prevOptions => [...prevOptions, option]);
		}
	};

	const handleGeneratePassword = () => {
		let newPassword = '';
		for (let i = 0; i < value; i++) {
			let randomIdx = generateRandomNumber(options.length);
			const key = options[randomIdx].toLowerCase();
			randomIdx = generateRandomNumber(characters[key].length);
			newPassword += characters[key][randomIdx];
		}
		const set = new Set(options);

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
					strengthLevel={i}
					value={value}
				/>
			))}
			<ButtonBase
				disabled={value === 0 || options.length === 0}
				sx={theme => ({
					...theme.typography.body1,
					py: 2.5,
					bgcolor: value === 0 || options.length === 0 ? theme.palette.red.main : 'primary.main',
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
