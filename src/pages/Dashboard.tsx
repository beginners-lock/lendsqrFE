import { Outlet } from "react-router-dom";
import { SideNavBar } from "../components/SideNavBar";
import { TopNavBar } from "../components/TopNavBar"
import './../styles/Dashboard.scss';

export const Dashboard = () => {
	return (
		<div id="DashboardPage">
			<TopNavBar/>
			<div id="DashboardBottom">
				<SideNavBar/>
				<div id="DashboardBody">
					<Outlet/>
				</div>
			</div>
		</div>
	)
}
