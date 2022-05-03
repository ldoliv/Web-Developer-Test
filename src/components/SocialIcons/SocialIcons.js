import './socialicons.scss';
import googlePlus from 'assets/images/google+.svg';
import facebook from 'assets/images/facebook.svg';
import instagram from 'assets/images/instagram.svg';
import twitter from 'assets/images/twitter.svg';



export function SocialIcons() {
	return (
		<div className='social-icons mb-3'>
			<div className='d-flex align-items-center'>
				<a className="social-icon google-plus" href='https://myaccount.google.com/profile' target="_blank" rel="noreferrer">
					<img src={googlePlus} alt="Google Plus" />
				</a>
				<a className="social-icon facebook" href='https://www.facebook.com/' target="_blank" rel="noreferrer">
					<img src={facebook} alt="Facebook" />
				</a>
				<a className="social-icon instagram" href='https://www.instagram.com/' target="_blank" rel="noreferrer">
					<img src={instagram} alt="Instagram" />
				</a>
				<a className="social-icon twitter" href='https://twitter.com/' target="_blank" rel="noreferrer">
					<img src={twitter} alt="Twitter" />
				</a>
			</div>
		</div>
	)
}
