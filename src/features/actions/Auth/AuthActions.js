import axios from "axios";
import { AUTHENTICATE_USER, UPDATE_PASSWORD } from "../../../Routes";
import {
  authenticate,
  disconnect,
  failAuthentication,
  updatePassword,
} from "../../reducers/Auth/AuthSlice";
import { decodeToken } from "react-jwt";

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
  localStorage.removeItem("access_token");
  localStorage.removeItem("token_type");
  dispatch(disconnect());
};
export const authenticateUser = (registrerNumber, password) => (dispatch) => {
  return axios
    .post(AUTHENTICATE_USER, {
      password: password,
      registrationNumber: registrerNumber,
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('access_token',response.data["accessToken"])
        localStorage.setItem('token_type',response.data["type"])
        const credentials = decodeToken(response.data["accessToken"])
        dispatch(saveCredentials(credentials))
        return true;
      }
    })
    .catch(() => {
      dispatch(failAuthentication());
      return false;
    });
};

const saveCredentials = (credentials) => (dispatch) => {
  const credentialItems = {
    user: {
      firstName: credentials["firstName"],
      lastName: credentials["lastName"],
      role: credentials["role"],
      registrationNumber: credentials["registrationNumber"],
      emailAdress:credentials["emailAdress"]
    },
    firstAuthentication:credentials["firstAuthentication"],
  };
  dispatch(authenticate(credentialItems));
}
