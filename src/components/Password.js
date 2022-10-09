import { Stack, Typography, SvgIcon } from '@mui/material';

import { MdOutlineFileCopy } from 'react-icons/md';

const Password = () => {
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
						fontSize: 16,
						lineHeight: '21px',
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
						color: theme.palette.white.main,
						[theme.breakpoints.down('tablet')]: {
							...theme.typography.h2
						}
					})}
				>
					PTx1f5DaFX
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
	);
};

export default Password;
