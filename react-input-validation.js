import React from 'react';
import PropTypes from 'prop-types';
import './react-input-validation.css';

export const name = 'react-input-validation';

export class Input extends React.Component {
  constructor(props) {
    super(props);

    this.handleValidity = this.handleValidity.bind(this);
    this.state = {
      errorMessage: '',
    };
  }

  handleValidity(event) {
    event.preventDefault();
  }

  render() {
    const {
      innerRef,
      rules,
      inputProps,
    } = this.props;

    const { errorMessage } = this.state;

    return (
      <React.Fragment>
        <input
          ref={innerRef}
          onChange={this.handleValidity}
          onInvalid={this.handleValidity}
          {...rules}
          {...inputProps}
        />
        <p className="error">{errorMessage}</p>
      </React.Fragment>
    )
  }
}

Input.defaultProps = {
  rules: {
    type: 'text',
    required: false,
    placeholder: '',
    defaultValue: '',
    minLength: null,
    maxLength: null,
    equalTo: null,
  },
  messages: {},
  inputProps: {},
};

Input.propTypes = {
  innerRef: PropTypes.func,
  rules: PropTypes.shape({
    type: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    minLength: PropTypes.string,
    maxLength: PropTypes.string,
    equalTo: PropTypes.string,
    remote: PropTypes.string,
  }),
  messages: PropTypes.shape({

  }),
  onKeyUp: null,
  onKeyDown,
  onKeyPress,
  onChange,
  onInvalid,
  className,
  inputProps: PropTypes.object,
};
