import React from "react";
import About from "./containers/About/About";
import Auth from "./containers/Auth/Auth";
import ChangePassword from "./containers/Auth/ChangePassword";
import Contacts from "./containers/Contact/Contact";
import EventsList from "./containers/Evenements/EventsList";
import Home from "./containers/Home/Home";
import InformationsUtiles from "./containers/InformationsUtiles/InformationsUtiles";
import SponsorsList from "./containers/Sponsors/SponsorsList";
import UsersList from "./containers/Users/UsersList";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import StorefrontIcon from '@material-ui/icons/Storefront';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InfoUtilesIcon from "@material-ui/icons/ImportContacts";
import ContactsIcon from "@material-ui/icons/Contacts";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import CachedIcon from '@material-ui/icons/Cached';
import GroupIcon from '@material-ui/icons/Group';
import EventIcon from '@material-ui/icons/Event'; 
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ServiceList from "./containers/Services/ServiceList";
import ServiceDetails from "./containers/MarketPlace/ServiceDetails";
import MarketPlaces from "./containers/MarketPlace/MarketPlaces";
const NavigationRoutes = [
    {
        'icon': <HomeIcon />,
        'name': 'Accueil',
        'path': '/',
        'component': Home,
        'roles': ['All'],
    },
    {
        'icon': <InfoIcon />,
        'name': 'A propos',
        'path': '/about',
        'component': About,
        'roles': ['All'],
    },
    {
        'icon': <ContactsIcon />,
        'name': 'Contacts',
        'path': '/contacts',
        'component': Contacts,
        'roles': ['All'],
    },
    {
        'icon': <InfoUtilesIcon />,
        'name':'Informations Utiles',
        'path':'/infosUtiles',
        'component': InformationsUtiles,
        'roles': ['All']
    },
    {
        'icon': <StorefrontIcon />,
        'name': 'MarketPlace',
        'path': '/marketplaces',
        'component': MarketPlaces,
         'roles': ['All'],
        //'roles': ['PCC','PACC','Tresorier','SGH','SGA','SG','Membre','Commissaire','Communication','RV'],
    },
    {
        'icon': <RoomServiceIcon />,
        'name': 'Service',
        'path': "/service/:idService",
        'component': ServiceDetails,
         'roles': ['All'],
        //'roles': ['PCC','PACC','Tresorier','SGH','SGA','SG','Membre','Commissaire','Communication','RV'],
    },
    {
        'icon': <PowerSettingsNewIcon />,
        'name': 'Connexion',
        'path': '/auth',
        'component': Auth,
        'roles': ['Ano'],
    },
    {
        'icon': <GroupIcon />,
        'name': 'Gestion des Utilisateurs',
        'path': '/users',
        'component': UsersList,
        //'roles': ['PCC','PACC','SGH','SGA','SG'],
        'roles': ['All'],
    },
    {
        'icon': <AccountTreeIcon />,
        'name': 'Gestion des Services',
        'path': '/services',
        'component': ServiceList,
        //'roles': ['PCC','PACC','SGH','SGA','SG'],
        'roles': ['All'],
    },
    {
        'icon': <EventIcon />,
        'name': 'Gestion Evènement',
        'path': '/events',
        'component': EventsList,
        'roles': ['All'],
        //'roles': ['PCC','PACC','SGH','SGA','SG','Communication','CCS'],
    },
    {
        'icon': <BusinessCenterIcon />,
        'name': 'Gestion Sponsors',
        'path': '/sponsors',
        'component': SponsorsList,
        'roles': ['All'],
        //'roles': ['PCC','PACC','SGH','SGA','SG'],
    },
    {
        'icon': <CachedIcon />,
        'name': 'Changement de Mot de Passe',
        'path': '/changepassword',
        'component': ChangePassword,
        // 'roles': ['Ano'],
        'roles': ['PCC','PACC','Tresorier','SGH','SGA','SG','Membre','Commissaire','Communication','RV'],
    },

    


]

const compile = (parentRoute, subRoutes) => {
    return subRoutes.flatMap(subRoute => {
        const newRoute = {
            'icon': subRoute.icon,
            'name': subRoute.name,
            'path': parentRoute.path + subRoute.path,
            'component': subRoute.component,
            'roles': (parentRoute.roles || []).concat((subRoute.roles || [])),
        };
        return (subRoute.routes) ? [...compile(newRoute, subRoute.routes)] : newRoute;
    });
 }
 
 const getRoutes = (role) => {
    const parentRoute = {
        'name': '',
        'path': '',
    };
    const flatRoutes = compile(parentRoute, NavigationRoutes);
    return flatRoutes;
 }
export default getRoutes;