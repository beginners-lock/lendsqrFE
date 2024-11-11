import { useEffect, useState } from 'react';
import './../styles/UsersPageCard.scss';
import CountUp from 'react-countup';

type Props = {
    img: string
    text: string
    value: number
}

export const UsersPageCard = ({img, text, value }: Props) => {
	const [prev, setPrev] = useState(0);
	
	useEffect(()=>{
		if(prev===0){
			setTimeout(()=>{ setPrev(value) }, 6000);
		}
	}, [value]);

	return (
		<div className="UsersPageCard">
			<img alt="cardimg" src={img}/>
			<h4>{text}</h4>
			<CountUp start={prev} end={value} delay={0} duration={5} separator={','}>
			{({ countUpRef }) => (
				<span ref={countUpRef} />
			)}
			</CountUp>
		</div>
	)
}
