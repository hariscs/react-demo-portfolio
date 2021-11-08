import Logo from './Logo';
import { Container } from './styles/Container.styled';
import {
	StyledHeader,
	Nav,
	Hero,
	HeroInfo,
	ToolTip,
} from './styles/Header.styled';

import bannerImg from '../assets/banner-img.png';
import Button from './Button';

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
						<ToolTip>It's me</ToolTip>
						<h1>Kareem EzZat</h1>
						<p>
							Senior Creative <span>Designer</span> and Content
							<span> Developer</span>
						</p>
						<Button>Download Cv</Button>
					</HeroInfo>
					<img src={bannerImg} alt='me' />
				</Hero>
			</Container>
		</StyledHeader>
	);
};

export default Header;
