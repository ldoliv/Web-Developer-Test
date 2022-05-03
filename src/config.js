
import {Layout} from './layouts';
import {Home, Products, News, Contact, Cart, PrivacyPolicy, NotFound} from './pages';

const appConfig = {
	routes: [
		{
			path: "/",
			element: <Layout />,
			children: [
				{index: true, element: <Home />},
				{path: "/products", element: <Products />},
				{path: "/news", element: <News />},
				{path: "/contact", element: <Contact />},
				{path: "/cart", element: <Cart />, extra: {hideFooter: true}},
				{path: "/privacy-policy", element: <PrivacyPolicy />},
				{path: "*", element: <NotFound />},
			],
		},
	]
}


export {appConfig as default};