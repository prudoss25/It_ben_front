import { CategorieList, ServiceListe } from "../../../Constantes"
import { fetchServices,addService,deleteService } from "../../reducers/Service/ServiceSlice"



export const getServiceListes = () => dispatch => {
    var serviceList = [...ServiceListe].map((service) => ({...service, category: getCategoryLabel(service.category)}))
    dispatch(fetchServices(serviceList));
}


export const postService = (service) => dispatch => {
    dispatch(addService(service));
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