import axios from "axios";
import { FIND_ALL_ENTREPRENEURS, FIND_ALL_USERS } from "../../../Routes";
import { fetchUsers, getEntrepreneurs, reinitialiseCurrentUser } from "../../reducers/User/UserSlice";


export const getUserListe = () => dispatch => {
    return axios
    .get(FIND_ALL_USERS)
    .then((response) => {
        if(response.status === 200) {
            dispatch(fetchUsers(response.data));
            dispatch(reinitialiseCurrentUser());
        }
    })
}

export const getEntrepreneurListe = () => dispatch => {
    return axios
    .get(FIND_ALL_ENTREPRENEURS)
    .then((response) => {
        if(response.status === 200) {
            dispatch(getEntrepreneurs(response.data));
            dispatch(reinitialiseCurrentUser());
        }
    })
}