import { Box, CssBaseline, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Password, PasswordOptions } from './components';

const theme = createTheme({
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 768,
			desktop: 1440
		}
	},
	palette: {
		primary: {
			main: '#A4FFAF'
		},
		red: {
			main: '#F64A4A'
		},
		orange: {
			main: '#FB7C58'
		},
		yellow: {
			main: '#F8CD65'
		},
		darkGrey: {
			main: '#24232C'
		},
		grey: {
			main: '#817D92',
			dark: '#24232C',
			veryDark: '#18171F'
		},
		white: {
			main: '#E6E5EA'
		}
	},
	typography: {
		fontFamily: 'JetBrains Mono',
		h1: {
			fontSize: 32,
			lineHeight: 5.5,
			fontWeight: 700
		},
		h2: {
			fontSize: 24,
			lineHeight: 4,
			fontWeight: 700
		},
		body1: {
			fontSize: 18,
			lineHeight: 3,
			fontWeight: 700
		}
	}
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				sx={{
					background: 'linear-gradient(180deg, #14131B 0%, #08070B 100%)',
					minHeight: '100vh'
				}}
			>
				<Stack
					component='main'
					spacing={{ mobile: 2, tablet: 3 }}
					m='auto'
					sx={{
						maxWidth: 540
					}}
				>
					<Password />
					<PasswordOptions />
				</Stack>
			</Box>
		</ThemeProvider>
	);
};

export default App;
