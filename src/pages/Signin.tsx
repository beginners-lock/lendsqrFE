import './../styles/Signin.scss';
import { useState } from 'react';

export const Signin = () => {
	const [hide, setHide] = useState(true);

	const toggleHide = () => {
		setHide(prevstate => !prevstate);
	}

	return (
		<div id="SigninPage">
			<div id="SigninLeft">
				<img alt="companyName" id="CompanyName" src="companyname.svg"/>
				<img alt="signinImg" id="SigninImg" src="signinimg.png"/>
			</div>
			<div id="SigninRight">
				<form id="SigninForm">
					<h1>Welcome!</h1>
					<h4>Enter details to login</h4>

					<div className='SigninInputDiv'>
						<input className='SigninFormEmail' placeholder='Email' type="email"/>
					</div>

					<div className='SigninInputDiv'>
						<input className='SigninFormPassword' placeholder='Password' type={hide?"password":"text"}/>
						<span onClick={toggleHide}>{hide?"SHOW":"HIDE"}</span>
					</div>

					<a>FORGOT PASSWORD</a>
					<input id="SigninSubmitBtn" type="submit" value="LOG IN"/>
				</form>
			</div>
		</div>
	)
}
