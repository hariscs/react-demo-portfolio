import { StyledBrands } from './styles/Brands.styled.js';
import { Container } from './styles/Container.styled.js';

const Brands = () => {
	return (
		<Container>
			<StyledBrands>
				<a href='/'>
					{/* <img src=""/> */}
					Slide 1
				</a>
			</StyledBrands>
		</Container>
	);
};

export default Brands;
