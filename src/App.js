import { Box, CssBaseline, Container } from '@mui/material';

import { Title, Password, PasswordOptions } from './components';

const App = () => {
	return (
		<Box bgcolor='#F2F2F2' minHeight='100vh'>
			<CssBaseline />
			<Container component='main' disableGutters maxWidth='sm'>
				<Title />
				<Password />
				<PasswordOptions />
			</Container>
		</Box>
	);
};

export default App;
