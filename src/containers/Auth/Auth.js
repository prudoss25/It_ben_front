import React from "react";
import { useRef, useState, useEffect  } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import { Button,Grid, Link, Typography, TextField } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from "axios";
import NoticationAlert from "../../components/UI/NotificationAlert/NotificationAlert";
const LOGIN_URL = '';






const Auth = (props) => {
  
const userRef = useRef();

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    username: '',

  });
  useEffect(() => {
    userRef.current.focus();
}, [])







  const [notification, setNotification] = useState({
    open: false,
    type: "info",
    message: "",
  });
  const onNotificationClosed = () => {
    setNotification({
      open: false,
      type: "info",
      message: "",
    });
  };

  const openNotification = (type, message) => {
    setNotification({
      open: true,
      type,
      message,
    });
  };


  const preventDefault= ()=>{}

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  



  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      //REQUETTTTTE  BACKENND A REVOIR
        const response = await axios.post(LOGIN_URL,
            JSON.stringify({ values }),
            /*{
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }*/
        );
        console.log(JSON.stringify(response.data));
        const accessToken = response.data.accessToken;
        const roles = response.data.roles;
        openNotification('success', 'Authentification validée');
    } catch (err) {
        if (!err.response) {
          openNotification('error','No Server Response');
          
        } else if (err.response.status === 400) {
          openNotification('error','Missing Username or Password');
          
        } else if (err.response.status === 401) {
          openNotification('error','Unauthorized');
        } else {
          openNotification('error','Login Failed');
          
        }
      
    }
}

    
    //emplacement sur l'interface + modalités d'accès
    //routes pour la vérification + process de vérification
    //username ou matricule?
    //mot de passe...
    //fonctionnalité mot de passe oublié ou pas?

    /*envoi des données vers le back end
gestion des routes autoris&ées
envoi des requetes en ajoutant les tokens
changement de mot de passe par l'utilisateur*/

  

    return (
<Aux>

<form>
<Grid container>
<Grid
  item
    lg={12}
  justifyContent={"space-between"}
  alignItems="center"
>
<TextField
       required
      name="userName"
      value={values.username}
      label="username or mail"
      id="standard"
      variant="standard"
      onChange={handleChange('username')}
      ref={userRef}
      autoComplete="off"
    />
  </Grid>
  <Grid
      item
        lg={12}
      justifyContent={"space-between"}
      alignItems="center"
    >
        <FormControl >
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    required
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
        </FormControl>
  </Grid>
  <Grid item>
            <Button color="primary" onClick={onSubmit} >
              {" "}
              Valider{" "}
            </Button>
          </Grid>
  </Grid>
  </form>
  <Grid>
  <Typography >
  <Link href="#" onClick={preventDefault}>
    Mot de passe oublié? Récupérez-le
  </Link>
</Typography>
  </Grid>

  <NoticationAlert handleClose={onNotificationClosed} {...notification} />



</Aux>

 
 );

};

export default Auth;

