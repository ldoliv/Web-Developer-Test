
import {NavLink} from 'react-router-dom';
import logo from 'assets/images/APPS.svg';

export function Logo() {
	return (
		<div className="logo">
			<NavLink className="navbtn" to="/">
				<img src={logo} alt="APPS" />
			</NavLink>
		</div>
	)
}