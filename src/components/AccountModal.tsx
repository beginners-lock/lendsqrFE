import { useContext } from 'react';
import './../styles/Dashboard.scss';
import { ActiveModalContext, SignedUserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { SIGNIN } from '../utils/routes';

export const AccountModal = () => {
    const { activeModal } = useContext(ActiveModalContext);
    const { updateEmail } = useContext(SignedUserContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('LendsqrUser');
        updateEmail(null);
        navigate(SIGNIN);
    }

    return (
        <div id="AccountModal" className={`${activeModal==='account'?'activeaccountmodal':'inactiveaccountmodal'}`}>
            <span style={{color:'#213F7D', fontWeight:600}} id="accountModalName">Adedeji</span>

            <a>Docs</a>
                
            <span style={{color:'#213F7D'}} id="accountModalNotification">
                <img alt="notification" src="/notification.png"/>
                Notifications
            </span>

            <span style={{color:'#BE123C'}} onClick={()=>{ logout(); }}>
                <img alt="logout" src="/logout.png"/>    
                Sign out
            </span>
        </div>
    )
}
