
import classnames from 'classnames';
import {useLocation, Outlet} from 'react-router-dom';
import Header from 'components/Header';

export function DefaultLayout() {

	const location = useLocation();
	const pageSlug = `page-${location.pathname.slice(1) || 'home'}`;

	return (
		<div className={classnames('page', pageSlug)}>
			<Header />
			<main className='page-body'>
				<Outlet />
			</main>
		</div>
	)
}