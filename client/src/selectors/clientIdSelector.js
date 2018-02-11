import { createSelector } from "reselect";
import clientId from "../reducers/clientId";

export const clientIdSelector = createSelector(
  state => state.clientId,
  clientId => clientId
);