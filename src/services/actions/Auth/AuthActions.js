import { authenticate, disconnect, failAuthentication } from "../../reducers/Auth/AuthSlice"

const setAuthenticationTimeout = () => (dispatch) => {
    setTimeout(() => {
        dispatch(disconnect())
    }, 120 * 1000)
}

export const authenticateUser =  (registrerNumber,password) => (dispatch) => {
    var credentials = {}
    if(registrerNumber === "BEN2022080001" && password === "test2022")
    {
        credentials = {
            user: {
              firstName: "DOSSOU",
              lastName: "Prudence",
              role:"PCC"
            },
            token:"12365MPLKJhs458663smp879251547"
          }
    }
    else if(registrerNumber === "BEN2022080002" && password === "test2022")
    {
        credentials = {
            user: {
              firstName: "AKAKPO",
              lastName: "Joël",
              role:"PACC"
            },
            token:"12365MPLKJhs458663smp879251547"
          }
    }
    else if(registrerNumber === "BEN2022080003" && password === "test2022")
    {
        credentials = {
            user: {
              firstName: "SAGBO",
              lastName: "Michel",
              role:"Membre"
            },
            token:"12365MPLKJhs458663smp879251547"
          }
    }
    else{
        dispatch(failAuthentication())
        return false;
    }
    dispatch(setAuthenticationTimeout())
    dispatch(authenticate(credentials))
    return true;
} 