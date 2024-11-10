
import { useNavigate } from 'react-router-dom';
import { StarSystem } from '../components/StarSystem';
import { UserDetailsGrid } from '../components/UserDetailsGrid';
import './../styles/UserDetails.scss';
import { useEffect, useState } from 'react';
import { USERS } from '../utils/routes';
import { DataType } from '../utils/types';
import { getMonthlyRange } from '../utils/functions';

type Navs = 'General Details' | 'Documents' | 'Bank Details' | 'Loans' | 'Savings' | 'App and System';

export const UserDetails = () => {
	const navigate = useNavigate();
	
	const [activenav, setActivenav] = useState<Navs>('General Details');
	const [userdetails, setUserdetails] = useState<DataType|null>(null);

	const personalinformation = userdetails ? [
		{ header:'FULL NAME', value: userdetails.fullname }, { header:'PHONE NUMBER', value: userdetails.phone }, 
		{ header:'EMAIL ADDRESS', value: userdetails.email }, { header:'BVN', value: userdetails.bvn.toString() }, 
		{ header:'GENDER', value: userdetails.gender }, { header:'MARITAL STATUS', value: userdetails.maritalstatus }, 
		{ header:'CHILDREN', value: userdetails.children }, { header:'TYPE OF RESIDENCE', value: userdetails.residence }
	] : null;

	const education = userdetails ? [
		{ header:'LEVEL OF EDUCATION', value: userdetails.education }, { header:'EMPLOYMENT STATUS', value: userdetails.employmentstatus }, 
		{ header:'SECTOR OF EMPLOYMENT', value: userdetails.employmentstatus==='Employed' ? userdetails.sector : '' }, 
		{ header:'DURATION OF EMPLOYMENT', value: userdetails.employmentstatus==='Employed' ? userdetails.duration+' years' : '' }, 
		{ header:'OFFICIAL EMAIL', value: userdetails.fullname.split(' ')[0].toLowerCase()+'@lendsqr.com' }, 
		{ header:'MONTHLY INCOME', value: getMonthlyRange(userdetails.monthlyincome) }, 
		{ header:'LOAN REPAYMENT', value: '₦'+userdetails.loanrepayment }
	] : null;

	const socials = userdetails ? [
		{ header:'TWITTER', value: '@'+userdetails.fullname.split(' ').join('_').toLowerCase() }, { header:'FACEBOOK', value: userdetails.fullname }, 
		{ header:'INSTAGRAM', value: '@'+userdetails.fullname.split(' ').join('_').toLowerCase() }
	] : null;

	const guarantor = userdetails ? [
		{ header:'FULL NAME', value: userdetails.guarantor.name }, { header:'PHONE NUMBER', value: userdetails.guarantor.phone }, 
		{ header:'EMAIL ADDRESS', value: userdetails.guarantor.email }, { header:'RELATIONSHIP', value: userdetails.guarantor.relationship }
	] : null

	useEffect(()=>{
		const storage = localStorage.getItem('LendsqrUserDetails');

		if(storage){
			setUserdetails(JSON.parse(storage));
		}else{
			//navigate(USERS);
		}
	}, []);

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
						<span id="UDName">{userdetails && userdetails.fullname}</span>
						<span id="UDId">{userdetails && userdetails.id}</span>
					</div>
					
					<div id="DetailSectionCenter" className='DetailSection'>
						<span id="UDTier">User's Tier</span>
						<StarSystem
							numberOfStars={userdetails ? userdetails.stars : 0}
						/>
					</div>

					<div className='DetailSection'>
						<span id="UDAmount">{userdetails && '₦'+userdetails.bankamount}</span>
						<span id="UDBank">{userdetails && userdetails.banknumber+'/'+userdetails.bankname+' Bank'}</span>
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
					data={personalinformation ? personalinformation : []}
					showBottomBorder={true}
					columns={'fiveColumn'}
				/>

				<p className='Header'>Education and Employment</p>
				<UserDetailsGrid
					data={education ? education : []}
					showBottomBorder={true}
					columns={'fourColumn'}
				/>

				<p className='Header'>Socials</p>
				<UserDetailsGrid
					data={socials ? socials : []}
					showBottomBorder={true}
					columns={'fiveColumn'}
				/>

				<p className='Header'>Guarantor</p>
				<UserDetailsGrid
					data={guarantor ? guarantor : []}
					showBottomBorder={false}
					columns={'fiveColumn'}
				/>
			</div>
		</div>
	)
}
