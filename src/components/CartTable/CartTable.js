import './carttable.scss';
import binIcon from 'assets/images/bin.svg';
import QtyInput from 'components/QtyInput';


export function CartTable(props) {

	const {cartItems = []} = props;

	return (
		<div className='cart-table desktop'>
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
					{cartItems.map(cartItem => {
						return (
							<tr key={cartItem.sku}>
								<td className="product">{cartItem.name}, {cartItem.size}</td>
								<td className="price">£{cartItem.price}</td>
								<td className="qty"><QtyInput min="1" max={cartItem.stockLevel} value={cartItem.qty} /></td>
								<td className="cost">£{cartItem.price * cartItem.qty}</td>
								<td className="remove"><img src={binIcon} alt="Remove" /></td>
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
						<td className="cost">£37.96</td>
						<td className="remove"></td>
					</tr>
					<tr>
						<td className="product">VAT at 20%</td>
						<td className="price"></td>
						<td className="qty"></td>
						<td className="cost">£7.59</td>
						<td className="remove"></td>
					</tr>
					<tr>
						<td className="product">Total cost</td>
						<td className="price"></td>
						<td className="qty"></td>
						<td className="cost">£45.55</td>
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
							<button className='btn btn-primary'>Buy Now</button>
						</td>
						<td className="remove"></td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
