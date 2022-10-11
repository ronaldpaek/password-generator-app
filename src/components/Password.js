import { useState } from 'react';
import { Stack, Typography, SvgIcon, IconButton } from '@mui/material';
import { MdOutlineFileCopy } from 'react-icons/md';

import { usePasswordContext } from '../contexts/PasswordContextProvider';

const Password = () => {
	const { password } = usePasswordContext();
	const [clicked, setClicked] = useState(false);

	const copyPassword = setClicked => {
		navigator.clipboard.writeText(password);
		setClicked(clicked => !clicked);
		setTimeout(() => {
			setClicked(clicked => !clicked);
		}, 1000);
	};

	return (
		<Stack>
			<Typography
				component='h1'
				variant='h2'
				textAlign='center'
				color='grey.main'
				mb={4}
				sx={theme => ({
					[theme.breakpoints.down('tablet')]: {
						...theme.typography.body2,
						mb: 2
					}
				})}
			>
				Password Generator
			</Typography>
			<Stack
				direction='row'
				justifyContent='space-between'
				alignItems='center'
				px={{ mobile: 2, tablet: 4 }}
				py={2}
				bgcolor={theme => theme.palette.grey.dark}
			>
				<Typography
					component='h2'
					variant='h1'
					sx={theme => ({
						cursor: 'default',
						userSelect: 'none',
						color: theme.palette.white.main,
						...(password === '' && {
							opacity: '0.25',
							mixBlendMode: 'normal'
						}),
						[theme.breakpoints.down('tablet')]: {
							...theme.typography.h2
						}
					})}
				>
					{password === '' ? 'P4$5W0rD!' : password}
				</Typography>
				<Stack direction='row' alignItems='center'>
					<Typography
						variant='body1'
						color='primary.main'
						mr={1}
						sx={theme => ({
							display: clicked ? 'block' : 'none',
							[theme.breakpoints.down('tablet')]: {
								...theme.typography.body2
							}
						})}
					>
						COPIED
					</Typography>
					<IconButton
						sx={theme => ({
							mr: -1,
							color: 'primary.main',
							fontSize: { mobile: 20, tablet: 24 },
							'&:hover': {
								color: theme.palette.white.main,
								cursor: 'pointer'
							}
						})}
						onClick={() => copyPassword(setClicked)}
					>
						<SvgIcon component={MdOutlineFileCopy} />
					</IconButton>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Password;
