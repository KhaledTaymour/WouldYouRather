import { RECEIVE_USERS } from "redux/actionTypes";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
