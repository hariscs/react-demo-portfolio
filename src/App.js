import { ThemeProvider } from 'styled-components';
import About from './components/About';
import Brands from './components/Brands';
import Header from './components/Header';
import GlobalStyles from './components/styles/Global';

const theme = {
	colors: {
		body: '#fff',
	},

	layouts: {
		tablet: '768px',
		desktop: '1024px',
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Brands />
				<About />
			</>
		</ThemeProvider>
	);
}

export default App;
