import Logo from 'components/Logo';
import NavMenu from 'components/NavMenu';
import './header.scss';

export function Header() {
	return (
		<header className="header">
			<div className="apps-container h-100">
				<div className="row justify-content-between align-items-center h-100">
					<div className="col-auto">
						<Logo />
					</div>
					<div className="col-auto">
						<NavMenu />
					</div>
				</div>
			</div>
		</header>
	)
}
