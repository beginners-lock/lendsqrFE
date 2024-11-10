import { UsersPageCard } from '../components/UsersPageCard';
import { UsersPageTable } from '../components/UsersPageTable';
import './../styles/Users.scss';

export const Users = () => {
	return (
		<div id="UsersPage">
			<h3 id="UsersHeader">Users</h3>

			<section id="UsersPageCardContainer">
				<UsersPageCard
					img={'/cardimg1.png'}
					text='USERS'
					value={2453}
				/>
				<UsersPageCard
					img={'/cardimg2.png'}
					text='ACTIVE USERS'
					value={2453}
				/>
				<UsersPageCard
					img={'/cardimg3.png'}
					text='USERS WITH LOANS'
					value={12453}
				/>
				<UsersPageCard
					img={'/cardimg4.png'}
					text='USERS WITH SAVINGS'
					value={102453}
				/>
			</section>

			<UsersPageTable
			
			/>
		</div>
	);
}
