import axios from "axios"
import { CategorieList } from "../../../Constantes"
import { fetchServices,deleteService, setCurrentService, reinitialiseCurrentService } from "../../reducers/Service/ServiceSlice"
import { FIND_ALL_SERVICES, GET_SERVICE, POST_SERVICE, UPDATE_SERVICE } from "../../../Routes"



export const getServiceListes = () => dispatch => {
    return axios
    .get(FIND_ALL_SERVICES)
    .then((response) => {
        if(response.status === 200) {
            var serviceList = [...response.data].map((service) => ({...service, category: getCategoryLabel(service.category)}))
            dispatch(fetchServices(serviceList));
            dispatch(reinitialiseCurrentService());
        }
    })
}

export const getService = (idService) => dispatch => {
    return axios
    .get(`${GET_SERVICE}${idService}`)
    .then((response) => {
        if(response.status === 200)
        {
            const service = response.data
            dispatch(setCurrentService({...service,category: getCategoryLabel(service.category)}))
        }
    })
}

export const putService = (service) => dispatch => {
    return axios
    .put(UPDATE_SERVICE,service)
    .then((response) => {
        if(response.status === 200 ) {
            dispatch(getServiceListes());
            return true;
        }
        return false;
    })
}

export const postService = (service) => dispatch => {
    return axios
    .post(POST_SERVICE,service)
    .then((response) => {
        if(response.status === 200 || response.status === 201 ) {
            dispatch(getServiceListes());
            return true;
        }
        return false;
    })
}

export const removeService = (idService) => dispatch => {
    dispatch(deleteService(idService));
}

export const modifyService = (idService, service) => {
    
}

const getCategoryLabel = (categoryCode) => {
    var category = [...CategorieList].find(cat => cat.value === categoryCode) || [...CategorieList].find(cat => cat.default);
    return category.label;
}