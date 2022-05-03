
import classnames from 'classnames';
import {useLocation} from 'react-router-dom';


export function Wrapper(props) {

	const location = useLocation();
	const pageSlug = `page-${location.pathname.slice(1) || 'home'}`;
	const otherClasses = props.className || '';

	return (
		<div className={classnames('page', pageSlug, otherClasses)}>
			{props.children}
		</div>
	)
}