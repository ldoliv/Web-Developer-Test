import {NavLink} from 'react-router-dom';
import './navmenu.scss';

export function NavMenu() {
	return (
		<nav>
			<ul>
				<li><NavLink to="/products">Products</NavLink></li>
				<li><NavLink to="/news">News</NavLink></li>
				<li><NavLink to="/contact">Contact</NavLink></li>
				<li><NavLink to="/cart">Cart</NavLink></li>
			</ul>
		</nav>
	)
}
