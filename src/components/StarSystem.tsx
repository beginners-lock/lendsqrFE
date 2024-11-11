import './../styles/UserDetails.scss';

type Props = {
    numberOfStars: 0|1|2|3
}

export const StarSystem = ({ numberOfStars }: Props) => {
    return (
        <span id="StarSystem">
            {
                Array(numberOfStars).fill('').map((_, index)=>{
                    return(
                        <img key={"filledstar"+index} alt="filledstar" src="/filledstar.png"/>
                    );
                })
            }

            {
                Array(3-numberOfStars).fill('').map((_, index)=>{
                    return(
                        <img key={"unfilledstar"+index} alt="unfilledstar" src="/unfilledstar.png"/>
                    );
                })
            }
        </span>
    )
}
