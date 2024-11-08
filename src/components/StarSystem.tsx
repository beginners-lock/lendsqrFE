import './../styles/UserDetails.scss';

type Props = {
    numberOfStars: 0|1|2|3
}

export const StarSystem = ({ numberOfStars }: Props) => {
    return (
        <span id="StarSystem">
            {
                Array(numberOfStars).fill('').map(()=>{
                    return(
                        <img alt="filledstar" src="/filledstar.png"/>
                    );
                })
            }

            {
                Array(3-numberOfStars).fill('').map(()=>{
                    return(
                        <img alt="filledstar" src="/unfilledstar.png"/>
                    );
                })
            }
        </span>
    )
}
