import './../styles/UsersPageTable.scss';

export type StatusTypes = 'Inactive'|'Active'|'Pending'|'Blacklisted';

type Props = {
    status: StatusTypes
}

export const Status = ({ status }: Props) => {
  return (
    <span className="tablestatus" style={{
        background:status==='Inactive'?'#545F7D1A':status==='Active'?'#39CD621A':status==='Pending'?'#E9B2001A':'#E4033B1A',
        color:status==='Inactive'?'#545F7D':status==='Active'?'#39CD62':status==='Pending'?'#E9B200':'#E4033B'
    }}>
        {status}
    </span>
  )
}
