import React, {useLayoutEffect, useState} from 'react';
import './modal.scss';


export function Modal(props) {

	const [isOpened, setIsOpened] = useState(false);

	const {isOpen, title, children, className = 'info', closeAfterMs} = props;

	useLayoutEffect(() => {
		(isOpen) ? setIsOpened(true) : setIsOpened(false);

		let timer;

		if (closeAfterMs && isOpen) {
			timer = setTimeout(() => {
				setIsOpened(false);
				props.afterClose();
			}, closeAfterMs)
		}

		return () => {
			clearTimeout(timer)
		}

	}, [isOpen]);


	function handleCloseOverlay() {
		if (!props.ignoreOverlayClick) {
			handleClose();
		}
	}

	function handleClose() {
		setIsOpened(false);
		props.onClose();
	}


	return (
		<div className={`apps-modal ${className} ${isOpened ? 'opened' : ''}`}>

			<div className="overlay" onClick={handleCloseOverlay}></div>
			<div className="apps-modal-outer">
				<div className="apps-modal-close" onClick={handleClose}></div>

				{title && <div className="apps-modal-title mb-2">{title}</div>}

				<div className="apps-modal-content">{children}</div>

			</div>
		</div>
	)
}