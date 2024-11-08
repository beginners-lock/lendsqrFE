import './../styles/UsersPageCard.scss';
import CountUp from 'react-countup';

type Props = {
    img: string
    text: string
    value: number
}

export const UsersPageCard = ({img, text, value }: Props) => {
	return (
		<div className="UsersPageCard">
			<img alt="cardimg" src={img}/>
			<h4>{text}</h4>
			<CountUp start={0} end={value} delay={0} duration={5} separator={','}>
			{({ countUpRef }) => (
				<span ref={countUpRef} />
			)}
			</CountUp>
		</div>
	)
}
