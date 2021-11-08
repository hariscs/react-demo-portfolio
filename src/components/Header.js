import Logo from './Logo';
import { Container } from './styles/Container.styled';
import { StyledHeader, Nav, Hero, HeroInfo } from './styles/Header.styled';

import bannerImg from '../assets/banner-img.png';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo />
					<div>☰</div>
				</Nav>
				<Hero>
					<HeroInfo>
						<h1>Kareem EzZat</h1>
						<p>Senior Creative Designer and Content Developer</p>
					</HeroInfo>
					<img src={bannerImg} alt='me' />
				</Hero>
			</Container>
		</StyledHeader>
	);
};

export default Header;
