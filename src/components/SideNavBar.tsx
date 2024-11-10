import { useContext, useState } from 'react';
import './../styles/SideNavBar.scss';
import { SideNavOption } from './SideNavOption';
import { ActiveModalContext } from '../App';

export const SideNavBar = () => {
    const { activeModal } = useContext(ActiveModalContext);
    const [activeNav, setActiveNav] = useState('users');

    return (
        <nav id="SideNavBar" className={`${activeModal==='sidebar'?'activesidemodal':'inactivesidemodal'}`}>
        <div id="SideNavScroller">
            <div className="SwitchOrg">
                <img alt="navimg" className="SwitchOrgImg" src="/briefcase.png"/>
                Switch Organization
                <img alt="dropdown" className="SwitchOrgDropdown" src="/sidenavdropdown.png"/>
            </div>

            <SideNavOption
                activenav={activeNav}
                option='Dashboard'
                img='/home.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <div className='SideNavHeader'>CUSTOMERS</div>

            <SideNavOption
                activenav={activeNav}
                option='Users'
                img='/userfriends.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Guarantors'
                img='/users.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Loans'
                img='/sack.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Decision Models'
                img='/handshake.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Savings'
                img='/piggybank.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Loan Requests'
                img='/handover.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Whitelist'
                img='/usercheck.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Karma'
                img='/usertimes.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <div className='SideNavHeader'>BUSINESSES</div>

            <SideNavOption
                activenav={activeNav}
                option='Organization'
                img='/briefcase.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Loan Products'
                img='/handover.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Savings Products'
                img='/bank.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Fees and Charges'
                img='/coins.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Transactions'
                img='/transaction.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Services'
                img='/spin.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Service Account'
                img='/usercog.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Settlements'
                img='/scroll.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Reports'
                img='/chart.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <div className='SideNavHeader'>SETTINGS</div>

            <SideNavOption
                activenav={activeNav}
                option='Preferences'
                img='/sliders.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Fees and Pricing'
                img='/badgepercent.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />

            <SideNavOption
                activenav={activeNav}
                option='Audit logs'
                img='/clipboard.png'
                clickfunction={(nav)=>{setActiveNav(nav);}}
            />
        </div>
        </nav>
    )
}
