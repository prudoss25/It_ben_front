// import React from "react";
// import { useRef, useState, useEffect  } from "react";
// import Aux from "../../hoc/_Aux/_Aux";
// import { Button,Grid, Link, Typography, TextField } from "@material-ui/core";
// import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import axios from "axios";
// import NoticationAlert from "../../components/UI/NotificationAlert/NotificationAlert";
// const LOGIN_URL = '';

// const Auth = (props) => {

// const userRef = useRef();

//   const [values, setValues] = React.useState({
//     password: '',
//     showPassword: false,
//     username: '',

//   });
//   useEffect(() => {
//     userRef.current.focus();
// }, [])

//   const [notification, setNotification] = useState({
//     open: false,
//     type: "info",
//     message: "",
//   });
//   const onNotificationClosed = () => {
//     setNotification({
//       open: false,
//       type: "info",
//       message: "",
//     });
//   };

//   const openNotification = (type, message) => {
//     setNotification({
//       open: true,
//       type,
//       message,
//     });
//   };

//   const preventDefault= ()=>{}

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const handleClickShowPassword = () => {
//     setValues({ ...values, showPassword: !values.showPassword });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       //REQUETTTTTE  BACKENND A REVOIR
//         const response = await axios.post(LOGIN_URL,
//             JSON.stringify({ values }),
//             /*{
//                 headers: { 'Content-Type': 'application/json' },
//                 withCredentials: true
//             }*/
//         );
//         console.log(JSON.stringify(response.data));
//         const accessToken = response.data.accessToken;
//         const roles = response.data.roles;
//         openNotification('success', 'Authentification validée');
//     } catch (err) {
//         if (!err.response) {
//           openNotification('error','No Server Response');

//         } else if (err.response.status === 400) {
//           openNotification('error','Missing Username or Password');

//         } else if (err.response.status === 401) {
//           openNotification('error','Unauthorized');
//         } else {
//           openNotification('error','Login Failed');

//         }

//     }
// }

//     //emplacement sur l'interface + modalités d'accès
//     //routes pour la vérification + process de vérification
//     //username ou matricule?
//     //mot de passe...
//     //fonctionnalité mot de passe oublié ou pas?

//     /*envoi des données vers le back end
// gestion des routes autoris&ées
// envoi des requetes en ajoutant les tokens
// changement de mot de passe par l'utilisateur*/

//     return (
// <Aux>

// <form>
// <Grid container>
// <Grid
//   item
//     lg={12}
//   justifyContent={"space-between"}
//   alignItems="center"
// >
// <TextField
//        required
//       name="userName"
//       value={values.username}
//       label="username or mail"
//       id="standard"
//       variant="standard"
//       onChange={handleChange('username')}
//       ref={userRef}
//       autoComplete="off"
//     />
//   </Grid>
//   <Grid
//       item
//         lg={12}
//       justifyContent={"space-between"}
//       alignItems="center"
//     >
//         <FormControl >
//                   <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//                   <Input
//                     id="standard-adornment-password"
//                     required
//                     type={values.showPassword ? 'text' : 'password'}
//                     value={values.password}
//                     onChange={handleChange('password')}
//                     endAdornment={
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           onMouseDown={handleMouseDownPassword}
//                         >
//                           {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                         </IconButton>
//                       </InputAdornment>
//                     }
//                   />
//         </FormControl>
//   </Grid>
//   <Grid item>
//             <Button color="primary" onClick={onSubmit} >
//               {" "}
//               Valider{" "}
//             </Button>
//           </Grid>
//   </Grid>
//   </form>
//   <Grid>
//   <Typography >
//   <Link href="#" onClick={preventDefault}>
//     Mot de passe oublié? Récupérez-le
//   </Link>
// </Typography>
//   </Grid>
//   <NoticationAlert handleClose={onNotificationClosed} {...notification} />
// </Aux>
//  );

// };

// export default Auth;

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../../components/Logo/Logo";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../services/actions/Auth/AuthActions";
import NoticationAlert from "../../components/UI/NotificationAlert/NotificationAlert";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        ASEBEM
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Auth = () => {
  const [matricule, setMatricule] = useState(null);
  const [password, setPassword] = useState(null);
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
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(authenticateUser(matricule,password))
    .then((state) => {
      if(state)
      {
        openNotification("success","Authentification Réussie")
        history.push("/")
      }
      else {
        openNotification("error","Authentification Echouée")
        setMatricule(null)
        setPassword(null)
      }
    })    
  };
  const handleMatriculeChange = (event) => {
    setMatricule(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
     { notification.open && (
        <NoticationAlert
          handleClose={() => onNotificationClosed()}
          {...notification}
        />
      ) }
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />
        <Typography component="h1" variant="h5">
          S'auhentifier
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleMatriculeChange}
            value={matricule||""}
            id="matricule"
            label="N° Matricule"
            name="matricule"
            autoComplete="matricule"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handlePasswordChange}
            value={password ||""}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            S'authentifier
          </Button>
          <Grid container alignContent="center">
            <Grid item xs>
              <Link href="#" variant="body2">
                Mot de passe oublié ?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default Auth;