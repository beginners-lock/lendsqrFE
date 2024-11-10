import './../styles/UserDetails.scss';

type Props = {
    data: { header: string, value: string}[]
    showBottomBorder: boolean
    columns: 'threeColumn'|'fourColumn'|'fiveColumn'
}

export const UserDetailsGrid = ({ data, showBottomBorder, columns }: Props) => {
    return (
        <div className={`grid ${columns}`} style={{borderBottom:showBottomBorder?'1px solid #213F7D':'none'}}>
            {
                data.map((data)=>{
                    return(
                        <div>
                            <span className='cellheader'>{data.header}</span>
                            <span className='cellvalue'>{data.value}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
