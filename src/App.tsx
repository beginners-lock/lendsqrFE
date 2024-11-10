import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.scss'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { Users } from './pages/Users'
import { UserDetails } from './pages/UserDetails'
import { createContext, useEffect, useState } from 'react'
import { SIGNIN } from './utils/routes'

type modalStates = 'search'|'account'|'sidebar'|null

type activeModalType = {
	activeModal: modalStates;
	updateActiveModal: (modal: modalStates)=>void
}

type SignedUserType = {
	email: string|null
	updateEmail: (arg: string|null)=>void
}

/*type ActiveUser = {

}*/

export const ActiveModalContext = createContext<activeModalType>({ activeModal:null, updateActiveModal:()=>{} });
export const SignedUserContext = createContext<SignedUserType>({ email:null, updateEmail:()=>{} });

function App() {
	const navigate = useNavigate();

	const [email, setEmail] = useState<string|null>(null); //Email used to signin
	const [activeModal, setActiveModal] = useState<modalStates>(null);

	useEffect(()=>{
		//Check local storage if there is a signed in user
		const storage = localStorage.getItem('LendsqrUser');
		console.log(email);

		if(!storage){
			navigate(SIGNIN);	
		}else{
			if(!email){
				updateEmail(storage);
			}
		}
	}, [email]);

	const updateActiveModal = (arg: modalStates) => {
		if(activeModal===arg){
			setActiveModal(null);
		}else{
			setActiveModal(arg);
		}
	}

	const updateEmail = (arg: string|null) => {
		setEmail(arg);
	}

	return (
		<SignedUserContext.Provider value={{ email, updateEmail }}>
		<ActiveModalContext.Provider value={{activeModal, updateActiveModal}}>
			<div id="App">
				<Routes>
					<Route path="" element={<Signin/>}/>
					<Route path="/signin" element={<Signin/>}/>
					<Route path="dashboard" element={<Dashboard/>}>
						<Route path="users" element={<Users/>}/>
						<Route path="userdetails" element={<UserDetails/>}/>
					</Route>
				</Routes>
			</div>
		</ActiveModalContext.Provider>
		</SignedUserContext.Provider>
	)
}

export default App
