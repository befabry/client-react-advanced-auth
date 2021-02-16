import axios from "axios";

import { AUTH_USER } from "./types";
import { UPDATE_FORM_STATE } from "./types";

export const signup = (formProps) => async (dispatch) => {
  const response = await axios.post("http://localhost:3090/signup", formProps);
  // dispatch({ type: AUTH_USER, payload: response.data });
  return response;
};

export const updateFormState = (form, state) => ({
  type: UPDATE_FORM_STATE,
  form,
  payload: state,
});
