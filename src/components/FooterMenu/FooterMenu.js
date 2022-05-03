import {NavLink} from 'react-router-dom';
import './footermenu.scss';

export function FooterMenu() {
	return (
		<nav className='footermenu'>
			<ul className=''>
				<li className='navitem'><NavLink className="navbtn" to="/products">Products</NavLink></li>
				<li className='navitem'><NavLink className="navbtn" to="/news">News</NavLink></li>
				<li className='navitem'><NavLink className="navbtn" to="/contact">Contact</NavLink></li>
				<li className='navitem'><NavLink className="navbtn" to="/cart">Your Cart</NavLink></li>
			</ul>
		</nav>
	)
}
