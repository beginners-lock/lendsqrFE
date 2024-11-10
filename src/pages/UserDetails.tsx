
import { useNavigate } from 'react-router-dom';
import { StarSystem } from '../components/StarSystem';
import { UserDetailsGrid } from '../components/UserDetailsGrid';
import './../styles/UserDetails.scss';
import { useState } from 'react';
import { USERS } from '../utils/routes';

type Navs = 'General Details' | 'Documents' | 'Bank Details' | 'Loans' | 'Savings' | 'App and System';

export const UserDetails = () => {
	const navigate = useNavigate();
	
	const [activenav, setActivenav] = useState<Navs>('General Details');

	const personalinformation = [
		{ header:'FULL NAME', value: 'Grace Effiom' }, { header:'PHONE NUMBER', value: '07060780922' }, { header:'EMAIL ADDRESS', value: 'grace@gmail.com' },
		{ header:'BVN', value: '07060780922' }, { header:'GENDER', value: 'Female' }, { header:'MARITAL STATUS', value: 'Single' }, 
		{ header:'CHILDREN', value: 'None' }, { header:'TYPE OF RESIDENCE', value: "Parent's Apartment" }
	];

	const education = [
		{ header:'LEVEL OF EDUCATION', value: 'B Sc.' }, { header:'EMPLOYMENT STATUS', value: 'Employed' }, { header:'SECTOR OF EMPLOYMENT', value: 'FinTech' },
		{ header:'DURATION OF EMPLOYMENT', value: '2 years' }, { header:'OFFICIAL EMAIL', value: 'grace@lendsqr.com' }, { header:'MONTHLY INCOME', value: '₦200,000.00- ₦400,000.00' }, 
		{ header:'LOAN REPAYMENT', value: '40,000' }
	]

	const socials = [
		{ header:'TWITTER', value: '@grace_effiom' }, { header:'FACEBOOK', value: 'Grace Effiom' }, { header:'INSTAGRAM', value: '@grace_effiom' }
	];

	const guarantor = [
		{ header:'FULL NAME', value: 'Debby Ogana' }, { header:'PHONE NUMBER', value: '07060780922' }, { header:'EMAIL ADDRESS', value: 'debby@gmail.com' }, 
		{ header:'RELATIONSHIP', value: 'Sister' }
	]

	return (
		<div id="UsersDetailsPage">
			<div id="UDBackBtnDiv">
				<span id="UDBackBtn" onClick={()=>{ navigate(USERS) }}>
					<img alt="back" src="/back.png"/>
					Back to Users
				</span>
			</div>

			<div id="UserDetailsHeader">
				<h3 id="UsersHeader">User Details</h3>

				<span>
					<button id="blacklistuser" className='UDActionButton'>BLACKLIST USER</button>
					<button id="activateuser" className='UDActionButton'>ACTIVATE USER</button>
				</span>
			</div>

			<div id="UserDetailsBodyTop">
				<div id="Details">
					<img alt="defaultuser" src="/defaultavatar.png"/>

					<div className='DetailSection'>
						<span id="UDName">Grace Effion</span>
						<span id="UDId">LSQFf587g90</span>
					</div>
					
					<div id="DetailSectionCenter" className='DetailSection'>
						<span id="UDTier">User's Tier</span>
						<StarSystem
							numberOfStars={1}
						/>
					</div>

					<div className='DetailSection'>
						<span id="UDAmount">₦200,000.00</span>
						<span id="UDBank">9912345678/Providus Bank</span>
					</div>
				</div>

				<nav>
					<a className={`${activenav==='General Details'?'activenav':'inactivenav'}`} onClick={()=>{ setActivenav('General Details'); }}>General Details</a>
					<a className={`${activenav==='Documents'?'activenav':'inactivenav'}`} onClick={()=>{ setActivenav('Documents'); }}>Documents</a>
					<a className={`${activenav==='Bank Details'?'activenav':'inactivenav'}`} onClick={()=>{ setActivenav('Bank Details'); }}>Bank Details</a>
					<a className={`${activenav==='Loans'?'activenav':'inactivenav'}`} onClick={()=>{ setActivenav('Loans'); }}>Loans</a>
					<a className={`${activenav==='Savings'?'activenav':'inactivenav'}`} onClick={()=>{ setActivenav('Savings'); }}>Savings</a>
					<a className={`${activenav==='App and System'?'activenav':'inactivenav'}`} onClick={()=>{ setActivenav('App and System'); }}>App and System</a>
				</nav>
			</div>

			<div id="UserDetailsBodyBottom">
				<p className='Header'>Personal Information</p>
				<UserDetailsGrid
					data={personalinformation}
					showBottomBorder={true}
					columns={'fiveColumn'}
				/>

				<p className='Header'>Education and Employment</p>
				<UserDetailsGrid
					data={education}
					showBottomBorder={true}
					columns={'fourColumn'}
				/>

				<p className='Header'>Socials</p>
				<UserDetailsGrid
					data={socials}
					showBottomBorder={true}
					columns={'fiveColumn'}
				/>

				<p className='Header'>Guarantor</p>
				<UserDetailsGrid
					data={guarantor}
					showBottomBorder={false}
					columns={'fiveColumn'}
				/>
			</div>
		</div>
	)
}
