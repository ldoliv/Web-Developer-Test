import {NavLink} from 'react-router-dom';
import './navmenu.scss';
import cartIcon from 'assets/images/cart.svg';

export function NavMenu() {
	return (
		<nav className='navmenu'>
			<ul className='d-flex align-items-center'>
				<li className='navitem'><NavLink className="navbtn" to="/products">Products</NavLink></li>
				<li className='navitem'><NavLink className="navbtn" to="/news">News</NavLink></li>
				<li className='navitem'><NavLink className="navbtn" to="/contact">Contact</NavLink></li>
				<li className='navitem'><NavLink className="navicon" to="/cart"><img src={cartIcon} alt="Open Cart" /></NavLink></li>
			</ul>
		</nav>
	)
}
