import {useState, useEffect} from "react"
import api from "services/api"
import CartTable from "components/CartTable"
import Modal from "components/Modal";


export function Cart() {

	const [loading, setLoading] = useState(true);
	const [cartItems, setCartItems] = useState([]);
	const [orderSubmited, setOrderSubmited] = useState(false);


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


	function handleUpdate(updatedItems) {
		setCartItems(updatedItems);
	}

	function handleBuy() {
		return api.buyProducts(cartItems)
			.then(() => {
				setOrderSubmited(true);
			})
	}

	return (
		<div className="page-container container">
			<div className="intro mb-5">
				<h1>Your Basket</h1>
				{!orderSubmited && <p>Items you have added to your basket are shown below. Adjust the quantities or remove items before continuing purchase.</p>}
				{orderSubmited && <p>Your products were successfully purchased!</p>}
			</div>

			{loading && <div>Loading...</div>}
			{!loading && !orderSubmited && <CartTable cartItems={cartItems} onUpdate={handleUpdate} onBuy={handleBuy} />}

			{/* <Modal
				className="info"
				isOpen={orderSubmited}
				title='Success'
				onClose={() => setOrderSubmited(false)}
			>
				<div className="">
					Your products were successfully purchased!
				</div>
			</Modal> */}

		</div>
	)
}
