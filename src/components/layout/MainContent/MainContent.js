
import {Outlet} from 'react-router-dom';


export function MainContent() {
	return (
		<main className='main-content p-4'>
			<Outlet />
		</main>
	)
}