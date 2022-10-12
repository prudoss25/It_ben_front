import axios from "axios"
import { AUTHENTICATE_USER } from "../../../Routes"
import { authenticate, disconnect, failAuthentication } from "../../reducers/Auth/AuthSlice"

const setAuthenticationTimeout = () => (dispatch) => {
    setTimeout(() => {
        dispatch(disconnect())
    },24 * 60 * 60 * 1000)
}
export const disconnectUser = () => (dispatch) => {
  dispatch(disconnect())
} 
export const authenticateUser =  (registrerNumber,password) => (dispatch) => {
    var credentials = {}
    return axios.post(AUTHENTICATE_USER,{
      password: password,
      registrationNumber: registrerNumber
    }).then((response) => {
      if(response.status === 200)
      {
        credentials = {
          user: {
            firstName: response.data["firstName"],
            lastName: response.data["lastName"],
            role:response.data["role"]
          },
          token:response.data["accessToken"]
        }
        dispatch(setAuthenticationTimeout())
        dispatch(authenticate(credentials))
        return true;
      }
    })
    .catch(() => {
      dispatch(failAuthentication())
      return false;
    })
    // if(registrerNumber === "BEN2022080001" && password === "test2022")
    // {
    //     credentials = {
    //         user: {
    //           firstName: "DOSSOU",
    //           lastName: "Prudence",
    //           role:"PCC"
    //         },
    //         token:"12365MPLKJhs458663smp879251547"
    //       }
    // }
    // else if(registrerNumber === "BEN2022080002" && password === "test2022")
    // {
    //     credentials = {
    //         user: {
    //           firstName: "AKAKPO",
    //           lastName: "Joël",
    //           role:"PACC"
    //         },
    //         token:"12365MPLKJhs458663smp879251547"
    //       }
    // }
    // else if(registrerNumber === "BEN2022080003" && password === "test2022")
    // {
    //     credentials = {
    //         user: {
    //           firstName: "SAGBO",
    //           lastName: "Michel",
    //           role:"Membre"
    //         },
    //         token:"12365MPLKJhs458663smp879251547"
    //       }
    // }
    // else{
    //     dispatch(failAuthentication())
    //     return false;
    // }
    // dispatch(setAuthenticationTimeout())
    // dispatch(authenticate(credentials))
    // return true;
} 