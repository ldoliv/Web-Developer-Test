import {useState} from 'react';
import classnames from 'classnames';
import {NavLink} from 'react-router-dom';
import './navmenu.scss';
import cartIcon from 'assets/images/cart.svg';
import hambIcon from 'assets/images/hamb.svg';

export function NavMenu() {

	const [mobileIsOpen, setMobileIsOpen] = useState(false);

	function toggleMobileMenu() {
		setMobileIsOpen(!mobileIsOpen);
	}

	return (
		<nav className='navmenu'>
			<div className={classnames('mobile d-md-none', {'opened': mobileIsOpen})}>
				<div className='overlay' onClick={toggleMobileMenu}></div>
				<div className="mobile-open-menu d-inline-flex align-items-center" onClick={toggleMobileMenu}>
					<div className='me-3'>Menu</div>
					<img src={hambIcon} alt="Open Mobile Menu" />
				</div>
				<ul className='mobile-menu'>
					<li className='navitem'><NavLink className="navbtn" to="/products" onClick={toggleMobileMenu}>Products</NavLink></li>
					<li className='navitem'><NavLink className="navbtn" to="/news" onClick={toggleMobileMenu}>News</NavLink></li>
					<li className='navitem'><NavLink className="navbtn" to="/contact" onClick={toggleMobileMenu}>Contact</NavLink></li>
					<li className='navitem'><NavLink className="navicon" to="/cart" onClick={toggleMobileMenu}><img src={cartIcon} alt="Open Cart" /></NavLink></li>
				</ul>
			</div>
			<div className="desktop d-none d-md-flex">
				<ul className='d-flex align-items-center'>
					<li className='navitem'><NavLink className="navbtn" to="/products">Products</NavLink></li>
					<li className='navitem'><NavLink className="navbtn" to="/news">News</NavLink></li>
					<li className='navitem'><NavLink className="navbtn" to="/contact">Contact</NavLink></li>
				</ul>
				<ul className='icons d-flex align-items-center ms-2'>
					<li className='navitem'><NavLink className="navicon" to="/cart"><img src={cartIcon} alt="Open Cart" /></NavLink></li>
				</ul>
			</div>
		</nav>
	)
}
