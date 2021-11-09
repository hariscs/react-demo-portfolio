import Button from './Button';
import aboutImg from '../assets/about-img.png';

const About = () => {
	return (
		<About>
			<div>
				<h2>About Myself</h2>
				<p>
					I’m a Front End Developer. I have a Passion for Creating Clean,
					Beautiful, Interactive, Minimalistic, Responsive and User Friendly UI,
					Developed by Modular, Scalable and Functional Code. When, while the
					lovely valley teems with vapour around me.
				</p>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<Button>Hire Me</Button>
				<Button>Resume</Button>
			</div>
			<img src={aboutImg} alt='me' />
		</About>
	);
};

export default About;
