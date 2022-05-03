import {useState} from 'react';
import './qtyinput.scss';
import plusIcon from 'assets/images/plus.svg';
import minusIcon from 'assets/images/minus.svg';



export function QtyInput(props) {

	const [qty, setQty] = useState(props.value || parseInt(props.min) || 0);

	function isValidQty(val) {
		const {min, max} = props;

		if (!isNaN(min) && val < parseInt(min)) {
			return false;
		}

		if (!isNaN(max) && val > parseInt(max)) {
			return false;
		}

		return true;
	}


	function handleChange(e) {
		const val = e.target.value;

		if (isValidQty(val)) {
			setQty(val);
		}
	}

	function handleSubtract() {
		const nextVal = qty - 1;
		if (isValidQty(nextVal)) {
			setQty(qty - 1);
		}
	}

	function handleAdd() {
		const nextVal = qty + 1;
		if (isValidQty(nextVal)) {
			setQty(qty + 1);
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
					<input type="number" value={qty} onChange={handleChange}></input>
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
