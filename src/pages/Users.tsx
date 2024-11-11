import { useState } from 'react';
import { UsersPageCard } from '../components/UsersPageCard';
import { UsersPageTable } from '../components/UsersPageTable';
import './../styles/Users.scss';
import { DataType } from '../utils/types';

export const Users = () => {
	const [data, setData] = useState<DataType[]|null>(null);
	const [users, setUsers] = useState(0);
	const [activateusers, setActiveUsers] = useState(0);
	const [withloans, setWithloans] = useState(0);
	const [withsavings, setWithsavings] = useState(0);

	const updateData = (arg: DataType[]) => {
		setData(arg);
		setUsers(arg.length);
		
		const active = arg.filter(data => data.status==='Active');
		const loans = arg.filter(data => data.withloans);
		const savings = arg.filter(data => data.withsavingss);

		setActiveUsers(active.length);
		setWithloans(loans.length);
		setWithsavings(savings.length);
	}

	return (
		<div id="UsersPage">
			<h3 id="UsersHeader">Users</h3>

			<section id="UsersPageCardContainer">
				<UsersPageCard
					img={'/cardimg1.png'}
					text='USERS'
					value={data ? users : 0}
				/>
				<UsersPageCard
					img={'/cardimg2.png'}
					text='ACTIVE USERS'
					value={data ? activateusers : 0}
				/>
				<UsersPageCard
					img={'/cardimg3.png'}
					text='USERS WITH LOANS'
					value={data ? withloans : 0}
				/>
				<UsersPageCard
					img={'/cardimg4.png'}
					text='USERS WITH SAVINGS'
					value={data ? withsavings : 0}
				/>
			</section>

			<UsersPageTable
				updateCardData={updateData}
			/>
		</div>
	);
}
