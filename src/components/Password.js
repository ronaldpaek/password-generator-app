import { Box, Stack, Typography, SvgIcon } from '@mui/material';

import { MdOutlineFileCopy } from 'react-icons/md';

const Password = () => {
	return (
		<Box px={4}>
			<Typography
				component='h1'
				variant='h1'
				textAlign='center'
				color='grey.main'
			>
				Password Generator
			</Typography>
			<Stack
				direction='row'
				justifyContent='space-between'
				bgcolor={theme => theme.palette.grey.dark}
			>
				<Typography component='h2'>PTx1f5DaFX</Typography>
				<SvgIcon component={MdOutlineFileCopy} />
			</Stack>
		</Box>
	);
};

export default Password;
