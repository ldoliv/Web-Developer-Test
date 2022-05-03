// import {matchRoutes} from 'react-router-dom';
import appConfig from 'config.js';



export function getRoute(location) {

	function findRoute(routes = []) {

		for (let i = 0; i < routes.length; i++) {
			const route = routes[i];

			if (route.path === location.pathname) {
				return route;
			} else if (route.children && route.children.length) {
				return findRoute(route.children);
			} else if (i === routes.length - 1) {
				return null;
			}
		}
	}

	return findRoute(appConfig.routes);
}

// export function getRoute(location) {
// 	return matchRoutes(appConfig.routes, location.pathname);
// }