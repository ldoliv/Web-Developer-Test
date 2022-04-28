import NavMenu from "../NavMenu";
import './header.scss';

export function Header() {
	return (
		<header className="container-fluid">
			<div className="row">
				<div className="col-auto">
					<div className="logo">APPS</div>
				</div>
				<div className="col">
					<NavMenu />
				</div>
			</div>
		</header>
	)
}
