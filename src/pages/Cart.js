import {useState, useEffect} from "react"
import api from "services/api"
import CartTable from "components/CartTable"

export function Cart() {

	const [loading, setLoading] = useState(true);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {

		Promise.all([
			api.getCartItems(),
			api.getProducts()
		])
			.then(([cartItems, products]) => {

				// merge each product with corresponding cart item product, in order to have all the required information
				const items = cartItems.map(cartItem => {
					const prod = products.find(prod => prod.sku === cartItem.sku);
					return Object.assign({}, prod, cartItem);
				});
				setCartItems(items);
				setLoading(false);
			})
			.finally(() => {
				setLoading(false);
			})

		return () => {

		}

	}, [])

	return (
		<div className="page-container container">
			<div className="intro mb-5">
				<h1>Your Basket</h1>
				<p>Items you have added to your basket are shown below. Adjust the quantities or remove items before continuing purchase.</p>
			</div>

			{loading && <div>Loading...</div>}
			{!loading && <CartTable cartItems={cartItems} />}

		</div>
	)
}
