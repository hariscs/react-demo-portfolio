import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyles from './components/styles/Global';

const theme = {
	colors: {
		body: '#fff',
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
			</>
		</ThemeProvider>
	);
}

export default App;
