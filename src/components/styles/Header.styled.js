import styled from 'styled-components';
import bannerImg from '../../assets/banner-bg.jpg';

export const StyledHeader = styled.header`
	border: 1px solid red;
	background-image: url(${bannerImg});
	background-position: center;
	background-size: cover;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1em 0;
	margin-bottom: 2em;

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
	align-items: center;
	justify-content: space-between;

	img {
		display: none;
		width: 40%;
		margin-left: 60px;
	}

	@media (min-width: ${({ theme }) => theme.layouts.desktop}) {
		img {
			display: block;
		}
	}
`;

export const HeroInfo = styled.div`
	margin-right: 10em;
	width: 50%;
	padding: 1.5em 0 10em;

	h1 {
		font-size: 1.8rem;
		margin-bottom: 1em;
	}

	p {
		margin-bottom: 2em;

		span:first-child {
			color: #e55447;
		}

		span {
			color: #90acd1;
		}
	}

	/* tablets media query */
	@media (min-width: ${({ theme }) => theme.layouts.tablet}) {
		h1 {
			font-size: 60px;
		}

		p {
			font-size: 2rem;
		}
	}
`;

export const ToolTip = styled.div`
	background: #90acd1;
	color: #fff;
	padding: 1em;
	width: 5em;
	border-radius: 0.5em;
	position: relative;
	margin-bottom: 1.8em;
	font-weight: 500;

	&::after {
		content: '';
		position: absolute;
		right: 0;
		top: 2.5em;
		width: 0;
		height: 0;
		border-left: 26px solid transparent;
		border-right: 0px solid transparent;
		border-top: 24px solid #90acd1;
	}
`;
