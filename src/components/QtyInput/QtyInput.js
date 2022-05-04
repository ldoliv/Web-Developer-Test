import './qtyinput.scss';
import plusIcon from 'assets/images/plus.svg';
import minusIcon from 'assets/images/minus.svg';


export function QtyInput(props) {

	const {min, max} = props;
	const value = parseInt(props.value);


	function isValidQty(val) {

		if (isNaN(val)) {
			return false;
		}

		if (!isNaN(min) && val < parseInt(min)) {
			return false;
		}

		if (!isNaN(max) && val > parseInt(max)) {
			return false;
		}

		return true;
	}

	function changeQty(val) {
		props.onChange(val);
	}

	function handleChange(e) {
		const val = parseInt(e.target.value);
		const validInput = e.target.validity.valid;

		if (isValidQty(val) && validInput) {
			changeQty(val);
		}
	}

	function handleSubtract() {
		const nextVal = value - 1;
		if (isValidQty(nextVal)) {
			changeQty(nextVal);
		}
	}

	function handleAdd() {
		const nextVal = value + 1;
		if (isValidQty(nextVal)) {
			changeQty(nextVal);
		}
	}

	return (
		<div className='qty-input'>
			<div className='d-flex align-items-center'>
				<div className="col">
					<div className='control subt' onClick={handleSubtract}>
						<img src={minusIcon} alt="Subtract" />
					</div>
				</div>
				<div className="col-auto">
					<input type="text" pattern="[0-9]+" value={value} onChange={handleChange} ></input>
				</div>
				<div className="col">
					<div className='control add' onClick={handleAdd}>
						<img src={plusIcon} alt="Add" />
					</div>
				</div>
			</div>
		</div>
	)
}
