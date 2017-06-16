import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './TextField.css';

class TextField extends Component {

  static propTypes = {
    /**
     * Id for the input (also the label `for` value)
     */
    id: PropTypes.string,
    /**
     * Class name for the component
     */
    className: PropTypes.string,
    /**
     * Name of the input
     */
    name: PropTypes.string,
    /**
     * Type of input  
     * One of: `text`, `email`, `password`
     */
    type: PropTypes.string,
    /**
     * Input placeholder value
     */
    placeholder: PropTypes.string,
    /**
     * Value of the input
     */
    value: PropTypes.string,
    /**
     * Label text
     */
    label: PropTypes.string,
    /**
     * Indicates input is required
     */
    required: PropTypes.bool,
    /**
     * Indicates an error
     */
    error: PropTypes.bool,
    /**
     * Error message to be shown
     */
    errorText: PropTypes.string,
    /**
     * Handler for input change events
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    type: 'text'
  };

  render() {

    let error = this.props.error || this.props.errorText;

    let classNames = [];
    if (this.props.className) classNames.push(this.props.className);
    if (error) classNames.push('error');

    return <div className={classNames.join(' ')}>
      {this.props.label &&
        <label 
          htmlFor={this.props.id}
          className='text-field-label'>
            {this.props.label}
        </label>
      }
      <input
        id={this.props.id}
        className='text-field'
        name={this.props.name}
        type={this.props.type}
        placeholder={this.props.placeholder}
        value={this.props.value}
        required={this.props.required}
        onChange={this.props.onChange}
      />
      { error &&
        <div className='text-field-error'>{this.props.errorText}</div>
      }
    </div>;
    }
}

export default TextField;
