import './footer.scss';
import {NavLink} from 'react-router-dom';
import Logo from 'components/Logo';
import FooterMenu from 'components/FooterMenu';
import SocialIcons from 'components/SocialIcons';


export function Footer() {
	return (
		<footer className="footer">
			<div className="apps-container h-100">
				<div className="row justify-content-between align-items-center h-100">
					<div className="col-auto">
						<Logo />
					</div>
					<div className="col">
						<FooterMenu />
					</div>
					<div className="col-auto">
						<SocialIcons />
						<div className='footer-secondary'>
							<ul className='footer-links'>
								<li className='navitem'>
									<NavLink className="navlink" to="/privacy-policy">Privacy Policy</NavLink>
								</li>
							</ul>
							<div className='copyright'>© 2017 Google. All Rights Reserved</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
