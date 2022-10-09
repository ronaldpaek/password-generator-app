import { Box } from '@mui/material';

const Bar = ({ strengthLevel, i }) => {
	return (
		<Box
			sx={{
				width: 10,
				height: 20,
				bgcolor: i <= strengthLevel ? 'primary.main' : 'transparent'
			}}
		/>
	);
};

export default Bar;
