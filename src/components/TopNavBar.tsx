import { useContext } from 'react';
import './../styles/TopNavBar.scss';
import { ActiveModalContext } from '../utils/contexts';

export const TopNavBar = () => {
    const { updateActiveModal } = useContext(ActiveModalContext);

    return (
        <nav id="TopNavBar">
            <img alt="menuburger" id="MenuBurger" src="/menu.png" onClick={()=>{ updateActiveModal('sidebar') }}/>

            <img alt="companyName" id="CompanyName" src="/companyname.svg"/>

            <div id="TNBSearch">
                <input type="search" placeholder='Search for anything'/>
                <span>
                    <img alt="search" src="/search.png"/>
                </span>
            </div>

            <span id="TNBRight">
                <img alt="search" id="searchmobile" src="/search2.png" onClick={()=>{ updateActiveModal('search'); }}/>

                <a>Docs</a>
                
                <img alt="notification" id="TNBNotification" src="/notification.png"/>
                
                <div id="TNBAccount"  onClick={()=>{ updateActiveModal('account'); }}>
                    <img alt="avatar" id="TNBAvatar" src="/avatar.png"/>
                    <span>Adedeji</span>
                    <img alt="dropdown" id="TNBDropdown" src="/dropdown.png"/>
                </div>
            </span>
        </nav>
    )
}
