import { useNavigate } from 'react-router-dom';
import './../styles/Signin.scss';
import { useContext, useRef, useState } from 'react';
import { USERS } from '../utils/routes';
import { SignedUserContext } from '../utils/contexts';

export const Signin = () => {
	const { updateEmail } = useContext(SignedUserContext);

	const navigate = useNavigate();

	const emailRef = useRef<HTMLInputElement|null>(null);
	const [hide, setHide] = useState(true);
	const [showerror, setShowerror] = useState(false);

	const toggleHide = () => {
		setHide(prevstate => !prevstate);
	}

	const signin = () => {
		setShowerror(false);
		const email = emailRef.current!.value.trim();

		if(email!=='' && email.length>12 && email.includes('@')){
			updateEmail(email);
			localStorage.setItem('LendsqrUser', email);
			navigate(USERS)
		}else{
			setShowerror(true);
		}
	}

	return (
		<div id="SigninPage">
			<div id="SigninLeft">
				<div>
					<img alt="companyName" id="CompanyName" src="companyname.svg"/>
				</div>
				<img alt="signinImg" id="SigninImg" src="signinimg.png"/>
			</div>
			<div id="SigninRight">
				<form id="SigninForm">
					<h1>Welcome!</h1>
					<h4>Enter details to login</h4>

					<div className='SigninInputDiv'>
						<input ref={emailRef} className='SigninFormEmail' placeholder='Email' type="email" required/>
					</div>
					<span className='inputerror' style={{display:showerror?'flex':'none'}}>Invalid Email</span>

					<div className='SigninInputDiv'>
						<input className='SigninFormPassword' placeholder='Password' type={hide?"password":"text"}/>
						<span onClick={toggleHide}>{hide?"SHOW":"HIDE"}</span>
					</div>

					<a>FORGOT PASSWORD</a>
					<input id="SigninSubmitBtn" type="submit" value="LOG IN" onClick={(e)=>{ e.preventDefault(); signin(); }}/>
				</form>
			</div>
		</div>
	)
}
