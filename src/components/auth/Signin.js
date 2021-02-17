import React, { Component } from "react";
import { Form, Field } from "react-final-form"; //https://final-form.org/docs/react-final-form/migration/redux-form
import { connect } from "react-redux";

import { signin } from "../../actions";
import FormStateToRedux from "../FormStateToRedux";

class SignIn extends Component {
  onSubmit = (formProps) => {
    //We must return a promise to have the "submitting" as true
    return this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit, submitting, pristine, form }) => (
          <form onSubmit={handleSubmit}>
            <FormStateToRedux form="signin" />
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
            <div>{this.props.errorMessage}</div>
            <button type="submit" disabled={submitting}>
              Sign In!
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

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default connect(mapStateToProps, { signin })(SignIn);
