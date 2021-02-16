import React, { Component } from "react";
import { Form, Field } from "react-final-form"; //https://final-form.org/docs/react-final-form/migration/redux-form
import { connect } from "react-redux";

import { signup } from "../../actions";
import FormStateToRedux from "../FormStateToRedux";

class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit, submitting, pristine, form }) => (
          <form onSubmit={handleSubmit}>
            <FormStateToRedux form="signup" />
            <fieldset>
              <label>Email</label>
              <Field
                name="email"
                type="text"
                component="input"
                autoComplete="none"
              />
            </fieldset>
            <fieldset>
              <label>Password</label>
              <Field
                name="password"
                type="password"
                component="input"
                autoComplete="none"
              />
            </fieldset>
            <button type="submit" disabled={submitting}>
              Sign Up!
            </button>
            <button
              type="button"
              disabled={pristine || submitting}
              onClick={form.reset}
            >
              Clear Values
            </button>
          </form>
        )}
      </Form>
    );
  }
}

export default connect(null, { signup })(Signup);
