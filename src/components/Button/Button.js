import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Chevron from 'react-icons/lib/fa/chevron-right'
import Spinner from 'react-icons/lib/fa/spinner'

import './Button.css';

/**
 * The only true button.
 */
export default class Button extends React.PureComponent {
	renderContent() {
		if (this.props.isLoading) {
			return (
				<div className="flex">
					<span className="left-icon-spin">
						<Spinner />
					</span>
					Loading
				</div>
			);
		}

		return this.props.children
	}

	render() {
		const {
			size,
			type,
			onClick,
			icon,
			fullWidth,
			isLoading
		} = this.props;

		const btnClass = classNames({
			'button': true,
			'full-width': fullWidth,
			'is-loading': isLoading,
			[type]: true,
		});

		return (
			<button
				className={btnClass}
				onClick={onClick}
				type="button"
			>
				{this.renderContent()}
				{icon && !isLoading ? <span className="right-icon"><Chevron /></span> : null}
			</button>
		);
	}
}

Button.propTypes = {
  /** Button label */
  children: PropTypes.string.isRequired,
  /** The color theme for the button */
  type: PropTypes.oneOf(['primary', 'secondary', 'danger']),
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func.isRequired,
	/** Sets the button width to fill the entire container */
	fullWidth: PropTypes.bool,
  /** Sets the button to a loading state */
  isLoading: PropTypes.bool,
  /** Adds chevron to the right of the label text */
	icon: PropTypes.bool
};

Button.defaultProps = {
	type: 'primary',
	icon: false,
	fullWidth: false,
  isLoading: false
};
