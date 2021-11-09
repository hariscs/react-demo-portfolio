import Logo from './Logo';

const Footer = () => {
	return (
		<StyledFooter>
			<Logo />
			<h3>Follow Me</h3>
			<div>
				<a href='/'>facebook</a>
				<a href='/'>twitter</a>
				<a href='/'>dribble</a>
				<a href='/'>behance</a>
			</div>
			<p>Copyright ©All rights reserved | KARMEN is made with by KarimEzZat</p>
		</StyledFooter>
	);
};

export default Footer;
