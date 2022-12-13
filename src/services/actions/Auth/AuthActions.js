import axios from "axios";
import { AUTHENTICATE_USER, UPDATE_PASSWORD } from "../../../Routes";
import {
  authenticate,
  disconnect,
  failAuthentication,
  updatePassword,
} from "../../reducers/Auth/AuthSlice";

const setAuthenticationTimeout = () => (dispatch) => {
  setTimeout(() => {
    dispatch(disconnect());
  }, 24 * 60 * 60 * 1000);
};
export const changePassword = ({
  registrationNumber,
  oldPassword,
  newPassword,
}) => (dispatch) => {
  const updateInfos = {
    newPassword: newPassword,
    oldPassword: oldPassword,
    registrationNumber: registrationNumber,
  };
  return axios
    .put(UPDATE_PASSWORD, updateInfos)
    .then((response) => {
      if (response.status === 200) {
        dispatch(updatePassword())
        return true;
      }
      return false;
    })
    .catch(() => false);
};
export const disconnectUser = () => (dispatch) => {
  dispatch(disconnect());
};
export const authenticateUser = (registrerNumber, password) => (dispatch) => {
  var credentials = {};
  return axios
    .post(AUTHENTICATE_USER, {
      password: password,
      registrationNumber: registrerNumber,
    })
    .then((response) => {
      if (response.status === 200) {
        credentials = {
          user: {
            firstName: response.data["firstName"],
            lastName: response.data["lastName"],
            role: response.data["role"],
            registrationNumber: response.data["registrationNumber"]
          },
          firstAuthentication:response.data["firstAuthentication"],
          token: response.data["accessToken"],
        };
        dispatch(setAuthenticationTimeout());
        dispatch(authenticate(credentials));
        return true;
      }
    })
    .catch(() => {
      dispatch(failAuthentication());
      return false;
    });
};
