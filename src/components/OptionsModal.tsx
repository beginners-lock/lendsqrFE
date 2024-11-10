import { useNavigate } from 'react-router-dom';
import './../styles/OptionsModal.scss';
import { USERSDETAILS } from '../utils/routes';

type Props = {
	show: boolean
	closemodal: ()=>void
	top: number
	right: number
	activateuser: ()=>void
	blacklistuser: ()=>void
}

export const OptionsModal = ({ show, closemodal, top, right, activateuser, blacklistuser }: Props) => {
	const navigate = useNavigate();

	return (
		<div id="OptionsModal" style={{display:show?'flex':'none', top: top, right: right}} onClick={(e)=>{ e.stopPropagation(); }}>
			<span onClick={()=>{ navigate(USERSDETAILS); closemodal(); }}>
				<img alt="modalview" src="/modalview.png"/>
				View Details
			</span>

			<span onClick={()=>{ blacklistuser(); closemodal(); }}>
				<img alt="modalview" src="/modalcross.png"/>
				Blacklist User
			</span>

			<span onClick={()=>{ activateuser(); closemodal(); }}>
				<img alt="modalview" src="/modalcheck.png"/>
				Activate User
			</span>
		</div>
	)
}
