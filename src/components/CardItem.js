const CardItem = (props) => {
	return (
		<li>
			<img src={props.src} alt='icon' />
			<h3>{props.title}</h3>
			<p>{props.subtitle}</p>
		</li>
	);
};

export default CardItem;
