import React from 'react';
import PropTypes from 'prop-types';

export const packageName = 'input';

export const FormContext = ReactFormContext;

const errorStyles = {
  color: 'red',
  fontStyle: 'italic',
  fontSize: '12px',
  padding: '5px',
};

export class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: '',
    };
    this.handleValidity = this.handleValidity.bind(this);
  }

  async handleValidity(event) {
    event.preventDefault();

    const {
      tooShort,
      tooLong,
      typeMismatch,
      valueMissing,
    } = event.target.validity;

    const {
      name,
      equalTo,
      equalMessage,
      remote,
      remoteMessage,
      requiredMessage,
      minLengthMessage,
      maxLengthMessage,
      invalidTypeMessage,
    } = this.props;

    let errorMessage = '';
    let noMatch = false;
    let remoteError = false;

    if (equalTo) {
      const currentInput = document.querySelector(`[name='${name}']`).value;
      const equalInput = document.querySelector(`[name='${equalTo}']`).value;
      noMatch = currentInput !== equalInput;
    }

    if (remote) {
      try {
        const response = await fetch(remote);
        const responseMessage = await response.text();
        if (responseMessage === 'true') {
          remoteError = true;
        }
      } catch (exception) {
        console.error(exception);
      }
    }

    if (valueMissing) {
      errorMessage = requiredMessage;
    } else if (typeMismatch) {
      errorMessage = invalidTypeMessage;
    } else if (tooShort) {
      errorMessage = minLengthMessage;
    } else if (tooLong) {
      errorMessage = maxLengthMessage;
    } else if (noMatch) {
      errorMessage = equalMessage;
    } else if (remoteError) {
      errorMessage = remoteMessage;
    }

    this.setState({ errorMessage });
  }

  render() {
    const { errorMessage } = this.state;

    const {
      type,
      name,
      innerRef,
      defaultValue,
      placeholder,
      required,
      minLength,
      maxLength,
      inputProps,
    } = this.props;

    return (
      <>
        <input
          type={type}
          name={name}
          ref={innerRef}
          defaultValue={defaultValue}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          onChange={this.handleValidity}
          onInvalid={this.handleValidity}
          required={required}
          {...inputProps}
        />
        {errorMessage !== '' ? <p style={errorStyles}>{errorMessage}</p> : ''}
      </>
    );
  }
}

Input.defaultProps = {
  innerRef: null,
  defaultValue: '',
  placeholder: '',
  invalidTypeMessage: 'This field does not match it\'s given type.',
  required: false,
  requiredMessage: 'This field is required.',
  minLength: null,
  minLengthMessage: 'This field is too short.',
  maxLength: null,
  maxLengthMessage: 'This field is too long',
  equalTo: null,
  equalMessage: 'These fields don\'t match.',
  remote: null,
  remoteMessage: 'This resource already exists.',
  inputProps: {},
};

Input.propTypes = {
  innerRef: PropTypes.func,
  defaultValue: PropTypes.string,
  type: PropTypes.string.isRequired,
  invalidTypeMessage: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  requiredMessage: PropTypes.string,
  minLength: PropTypes.string,
  minLengthMessage: PropTypes.string,
  maxLength: PropTypes.string,
  maxLengthMessage: PropTypes.string,
  equalTo: PropTypes.string,
  equalMessage: PropTypes.string,
  remote: PropTypes.string,
  remoteMessage: PropTypes.string,
  inputProps: PropTypes.object,
};
