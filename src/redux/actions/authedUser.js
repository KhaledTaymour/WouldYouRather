import { SET_AUTHED_USER } from "redux/actionTypes.js";

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}