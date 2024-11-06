import { Routes, Route } from 'react-router-dom'
import './App.scss'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { Users } from './pages/Users'
import { UserDetails } from './pages/UserDetails'

function App() {

	return (
		<div id="App">
			<Routes>
				<Route path="" element={<Signin/>}/>
				<Route path="dashboard" element={<Dashboard/>}>
					<Route path="users" element={<Users/>}/>
					<Route path="userdetails" element={<UserDetails/>}/>
				</Route>
			</Routes>
		</div>
	)
}

export default App
