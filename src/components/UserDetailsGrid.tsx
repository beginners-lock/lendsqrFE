import './../styles/UserDetails.scss';

type Props = {
    data: { header: string, value: string}[]
    showBottomBorder: boolean
    columns: number
}

export const UserDetailsGrid = ({ data, showBottomBorder, columns }: Props) => {
    return (
        <div className='grid' style={{borderBottom:showBottomBorder?'1px solid #213F7D':'none', gridTemplateColumns:`repeat(${columns}, 1fr)`}}>
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
