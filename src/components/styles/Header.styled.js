import styled from 'styled-components';
import bannerImg from '../../assets/banner-bg.jpg';

export const StyledHeader = styled.header`
	height: 90vh;
	padding: 40px 0;
	border: 1px solid red;
	background-image: url(${bannerImg});
	background-position: center;
	background-size: cover;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;

	div {
		font-size: 2rem;
	}
`;

export const StyledLogo = styled.a`
	color: #90acd1;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.3rem;
	font-weight: 700;
	width: 40px;
	height: 40px;
	border: 3.5px solid #e55447;
	border-radius: 100vh;
`;

export const Hero = styled.div`
	display: flex;
	/* grid-template-columns: 1fr 1fr; */
	gap: 8em;
	align-items: center;
	justify-content: space-between;

	img {
		/* display: none; */
		width: 50%;
	}
`;

export const HeroInfo = styled.div`
	margin-right: 10em;
	width: 50%;

	p {
		font-size: 2rem;
	}

	h1 {
		font-size: 60px;
	}
`;
