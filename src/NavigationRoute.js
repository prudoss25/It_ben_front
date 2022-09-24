import { Contacts } from "@material-ui/icons";
import About from "./containers/About/About";
import Auth from "./containers/Auth/Auth";
import ChangePassword from "./containers/Auth/ChangePassword";
import EventsList from "./containers/Evenements/EventsList";
import Home from "./containers/Home/Home";
import SponsorsList from "./containers/Sponsors/SponsorsList";
import UsersList from "./containers/Users/UsersList";

const NavigationRoutes = [
    {
        'name': 'Changement de Mot de Passe',
        'path': '/changepassword',
        'component': ChangePassword,
        'roles': ['All'],
    },
    {
        'name': 'Connexion',
        'path': '/auth',
        'component': Auth,
        'roles': ['All'],
    },
    {
        'name': 'Accueil',
        'path': '/',
        'component': Home,
        'roles': ['All'],
    },
    {
        'name': 'A propos',
        'path': '/about',
        'component': About,
        'roles': ['All'],
    },
    {
        'name': 'Contacts',
        'path': '/contacts',
        'component': Contacts,
        'roles': ['All'],
    },
    {
        'name': 'users',
        'path': '/users',
        'component': UsersList,
        'roles': ['PCC','PACC','SGH','SGA','SG'],
    },
    {
        'name': 'Gestion Evènement',
        'path': '/events',
        'component': EventsList,
        'roles': ['PCC','PACC','SGH','SGA','SG','Communication','CCS'],
    },
    {
        'name': 'Gestion Sponsors',
        'path': '/sponsors',
        'component': SponsorsList,
        'roles': ['PCC','PACC','SGH','SGA','SG'],
    }
]

const compile = (parentRoute, subRoutes) => {
    return subRoutes.flatMap(subRoute => {
        const newRoute = {
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
    const flatRoutes = compile(parentRoute, NavigationRoutes.filter(route => route.roles.includes(role)|| route.roles.includes('All')));
    return flatRoutes;
 }
export default getRoutes;