import initialState from "./initialState";
import { SET_CLIENT_ID } from "../constants/actionTypes";

export default function clientId(state=initialState.clientId, {type, id}) {
  if (type === SET_CLIENT_ID) {
    return id;
  }
  return state;
}