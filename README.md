# React Input Validation
React Input Validation makes it simple to validate forms in React.

### Benefits

* Uses the browser's native input validation
* Small Footprint
* JQuery-Free

### Prerequisites
Install React and add the input validation package.

```
meteor npm i --save react react-dom
meteor add jaireddjawed:react-input-validation
```

## Quick Start
Here's an example of validation a form with React Form Validation.

```jsx
import React from 'react';
import { Input } from 'meteor/jaireddjawed:flow-router-react-helpers';

class Form extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    // Handle form submission here...
  }

  render() {
    return (
      <form
        ref={(form) => (this.form = form)}
        onSubmit={this.handleSubmit}
      >
        <div class="form-group">
          <label className="control-label">Full Name</label>
          <Input
            type="text"
            name="full-name"
            required
            requiredMessage="Please enter your full name."
            inputProps={{
              className="form-control"
            }}
          />
        </div>
        <div class="form-group">
          <label className="control-label">E-mail Address</label>
          <Input
            type="email"
            name="email-address"
            required
            requiredMessage="Please enter your email address."
            remote="/check-email-address"
            remoteMessage="This email address already exists."
            inputProps={{
              className="form-control"
            }}
          />
        </div>
        <div class="form-group">
          <button
            type="submit"
            className="btn btn-success btn-block"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
```

## Input Prop Options

### type (string)
  The input data type.
  The allowed options are...

  * text
  * number
  * date
  * datetime-local
  * range
  * email
  * search
  * tel

### name (string)
The name of the input.

### innerRef (function)
Access the input's ref.

### defaultValue (string)
The default input value.

### placeholder (string)
The input's placeholder.

### minLength (string)
The minimum length of the input.

### minLengthMessage (string)
The input's error message when the input is less than the minimum length.

### maxLength (string)
The maximum length of the input.

### maxLengthMessage (string)
The input's error message when the input is greater than the maximum length.

### equalTo (string)
The name of the another input field that the current input field has to be equal to.

### equalToMessage (string)
The error message outputed when the two input fields do not equal each other.

### remote (string)
The path to send the input's data to for server validation. Will show error message the output, "true", is sent back from the server.

### remoteMessage (string)
The input's error message when it does not meet server validation requirements.

### inputProps (Object)
Any addtional props that the input may have.
