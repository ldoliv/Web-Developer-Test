import './carttable.scss';
import binIcon from 'assets/images/bin.svg';
import QtyInput from 'components/QtyInput';


export function CartTable(props) {

	const {cartItems = []} = props;

	function handleQtyChange(qty, sku) {
		const updatedItems = cartItems.slice();
		const updatedItem = updatedItems.find(cartItem => cartItem.sku === sku);
		updatedItem.qty = qty;

		// console.log(updatedItems);
		props.onUpdate(updatedItems);
	}

	function handleRemoveItem(e, sku) {
		const filtered = cartItems.filter(cartItem => cartItem.sku !== sku);

		// console.log(filtered);
		props.onUpdate(filtered);
	}

	function handleBuy(e) {
		e.target.setAttribute('disabled', 'disabled');
		props.onBuy()
			.finally(() => {
				e.target.removeAttribute('disabled');
			})
	}


	const subtotal = cartItems.reduce((sum, obj) => sum + (obj.price * obj.qty), 0);
	const subtVat = subtotal * 0.20;
	const total = subtotal + subtVat;

	const disableBuy = cartItems.length ? false : true;

	return (
		<>
			<div className='cart-desktop d-none d-md-block'>
				<table className="table-items">
					<thead>
						<tr>
							<th className="product">Product</th>
							<th className="price">Price</th>
							<th className="qty">Quantity</th>
							<th className="cost">Cost</th>
							<th className="remove"></th>
						</tr>
					</thead>
					<tbody>
						{cartItems.map((cartItem, index) => {

							const cost = (cartItem.price * cartItem.qty).toFixed(2);

							return (
								<tr key={cartItem.sku}>
									<td className="product">{cartItem.name}, {cartItem.size ? cartItem.size : 'one size'}</td>
									<td className="price">£{cartItem.price}</td>
									<td className="qty">
										<QtyInput min="1" max={cartItem.stockLevel} value={cartItem.qty} onChange={(qty) => handleQtyChange(qty, cartItem.sku)} />
									</td>
									<td className="cost">£{cost}</td>
									<td className="remove">
										<div className="remove-item" onClick={(e) => handleRemoveItem(e, cartItem.sku)}>
											<img src={binIcon} alt="Remove" />
										</div>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>

				<table className="table-subtotals">
					<tbody>
						<tr>
							<td className="product">Subtotal</td>
							<td className="price"></td>
							<td className="qty"></td>
							<td className="cost">{subtotal ? `£${subtotal.toFixed(2)}` : `-----`}</td>
							<td className="remove"></td>
						</tr>
						<tr>
							<td className="product">VAT at 20%</td>
							<td className="price"></td>
							<td className="qty"></td>
							<td className="cost">{subtVat ? `£${subtVat.toFixed(2)}` : `-----`}</td>
							<td className="remove"></td>
						</tr>
						<tr>
							<td className="product">Total cost</td>
							<td className="price"></td>
							<td className="qty"></td>
							<td className="cost">{total ? `£${total.toFixed(2)}` : `-----`}</td>
							<td className="remove"></td>
						</tr>
					</tbody>
				</table>

				<table className="table-submit">
					<tbody>
						<tr>
							<td className="product"></td>
							<td className="price"></td>
							<td className="qty"></td>
							<td className="cost">
								<button className='btn btn-primary' disabled={disableBuy} onClick={handleBuy}>Buy Now</button>
							</td>
							<td className="remove"></td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='cart-mobile d-md-none'>

				{cartItems.length > 0 &&
					<div className='cart-items'>

						{cartItems.map((cartItem, index) => {

							const cost = (cartItem.price * cartItem.qty).toFixed(2);

							return (
								<div className='cart-item' key={cartItem.sku}>
									<div className='product'>{cartItem.name}, {cartItem.size ? cartItem.size : 'one size'}</div>
									<div className='row justify-content-between'>
										<div className='col-auto label'>Price</div>
										<div className='col text-end'>£{cartItem.price}</div>
									</div>
									<div className='row justify-content-between'>
										<div className='col-auto label'>Quantity</div>
										<div className='col text-end'>
											<QtyInput min="1" max={cartItem.stockLevel} value={cartItem.qty} onChange={(qty) => handleQtyChange(qty, cartItem.sku)} />
										</div>
									</div>
									<div className='row justify-content-between'>
										<div className='col-auto label'>Cost</div>
										<div className='col text-end'>£{cost}</div>
									</div>
									<div className='row justify-content-between'>
										<div className='col-auto label'>Remove</div>
										<div className='col text-end'>
											<div className="remove-item" onClick={(e) => handleRemoveItem(e, cartItem.sku)}>
												<img src={binIcon} alt="Remove" />
											</div>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				}

				<div className="subtotals">
					<div className='row justify-content-between'>
						<div className="col-auto product">Subtotal</div>
						<div className="col text-end">{subtotal ? `£${subtotal.toFixed(2)}` : `-----`}</div>
					</div>
					<div className='row justify-content-between'>
						<div className="col-auto product">VAT at 20%</div>
						<div className="col text-end">{subtVat ? `£${subtVat.toFixed(2)}` : `-----`}</div>
					</div>
					<div className='row justify-content-between'>
						<div className="col-auto product">Total cost</div>
						<div className="col text-end">{total ? `£${total.toFixed(2)}` : `-----`}</div>
					</div>
				</div>

				<div className="submit text-end">
					<button className='btn btn-primary' disabled={disableBuy} onClick={handleBuy}>Buy Now</button>
				</div>
			</div>
		</>
	)
}
