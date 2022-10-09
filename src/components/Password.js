import { useState } from 'react';
import { usePasswordContext } from '../contexts/PasswordContextProvider';
import { Stack, Typography, SvgIcon } from '@mui/material';
import { MdOutlineFileCopy } from 'react-icons/md';

const Password = () => {
	const { password } = usePasswordContext();
	const [clicked, setClicked] = useState(false);

	const handleClick = setClicked => {
		if (password) {
			navigator.clipboard.writeText(password);
			setClicked(clicked => !clicked);
			setTimeout(() => {
				setClicked(clicked => !clicked);
			}, 1000);
		}
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
				sx={theme => ({
					'&:hover ': {
						cursor: password === '' ? 'default' : 'pointer',
						'& .css-1r28dsc-MuiSvgIcon-root': {
							color:
								password === ''
									? theme.palette.red.main
									: theme.palette.white.main
						}
					}
				})}
				onClick={() => handleClick(setClicked)}
			>
				<Typography
					component='h2'
					variant='h1'
					sx={theme => ({
						cursor: 'cursor',
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
				<Stack direction='row'>
					<Typography
						variant='body1'
						color='primary.main'
						mr={2}
						sx={theme => ({
							display: clicked ? 'block' : 'none',
							[theme.breakpoints.down('tablet')]: {
								...theme.typography.body2
							}
						})}
					>
						COPIED
					</Typography>
					<SvgIcon
						component={MdOutlineFileCopy}
						sx={{
							color: 'primary.main',
							fontSize: { mobile: 20, tablet: 24 }
						}}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Password;
