import './../styles/TopNavBar.scss';

export const TopNavBar = () => {
    return (
        <nav id="TopNavBar">
            <img alt="companyName" id="CompanyName" src="/companyname.svg"/>

            <div id="TNBSearch">
                <input type="search" placeholder='Search for anything'/>
                <span>
                    <img alt="search" src="/search.png"/>
                </span>
            </div>

            <span id="TNBRight">
                <a>Docs</a>
                
                <img alt="notification" id="TNBNotification" src="/notification.png"/>
                
                <div id="TNBAccount">
                    <img alt="avatar" id="TNBAvatar" src="/avatar.png"/>
                    <span>Adedeji</span>
                    <img alt="dropdown" id="TNBDropdown" src="/dropdown.png"/>
                </div>
            </span>
        </nav>
    )
}
