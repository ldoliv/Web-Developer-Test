import {useLocation} from 'react-router-dom';
import {Wrapper} from './Wrapper';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import MainContent from 'components/layout/MainContent';
import {getRoute} from 'helpers';


export function Layout() {

	const location = useLocation();
	const route = getRoute(location);
	const hideFooter = route?.extra?.hideFooter;

	return (
		<Wrapper className="d-flex flex-column">
			<div className="col-auto">
				<Header />
			</div>
			<div className="col">
				<MainContent />
			</div>
			{!hideFooter && <div className="col-auto">
				<Footer />
			</div>}
		</Wrapper>
	)
}