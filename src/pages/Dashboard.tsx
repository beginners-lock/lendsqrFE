import { Outlet, useNavigate } from "react-router-dom";
import { SideNavBar } from "../components/SideNavBar";
import { TopNavBar } from "../components/TopNavBar"
import './../styles/Dashboard.scss';
import { SearchModal } from "../components/SearchModal";
import { AccountModal } from "../components/AccountModal";
import { useEffect } from "react";
import { SIGNIN } from "../utils/routes";

export const Dashboard = () => {
	const navigate = useNavigate();

	useEffect(()=>{
		const session = localStorage.getItem('LendsqrUser');
		console.log(session);
		if(!session){
			console.log('hey');;
			navigate(SIGNIN);
		}
	}, []);

	return (
		<div id="DashboardPage">
			<TopNavBar/>
			<SearchModal/>
			<AccountModal/>
			<div id="DashboardBottom">
				<SideNavBar/>
				<div id="DashboardBody">
					<Outlet/>
				</div>
			</div>
		</div>
	)
}
