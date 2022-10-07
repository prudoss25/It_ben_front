// import React from "react";
// import { useRef, useState, useEffect } from "react";
// import axios from "axios";
// import Aux from '../../hoc/_Aux/_Aux';

// import { Button,Grid,  TextField, Typography } from "@material-ui/core";
// import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';



// import NoticationAlert from "../../components/UI/NotificationAlert/NotificationAlert";
// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';

// const ChangePassword = () => {

//     const [notification, setNotification] = useState({
//         open: false,
//         type: "info",
//         message: "",
//       });
//       const onNotificationClosed = () => {
//         setNotification({
//           open: false,
//           type: "info",
//           message: "",
//         });
//       };


//       const openNotification = (type, message) => {
//         setNotification({
//           open: true,
//           type,
//           message,
//         });
//       };


//     const userRef = useRef();

//     const [user, setUser] = useState('');
//     const [validName, setValidName] = useState(false);
//     const [userFocus, setUserFocus] = useState(false);

//     const [pwd, setPwd] = useState('');
//     const [validPwd, setValidPwd] = useState(false);
//     const [pwdFocus, setPwdFocus] = useState(false);

//     const [matchPwd, setMatchPwd] = useState('');
//     const [validMatch, setValidMatch] = useState(false);
//     const [matchFocus, setMatchFocus] = useState(false);

//     const [showPwd, setShowPwd] = useState(false);


//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setValidName(USER_REGEX.test(user));
//     }, [user])

//     useEffect(() => {
//         setValidPwd(PWD_REGEX.test(pwd));
//         setValidMatch(pwd === matchPwd);
//     }, [pwd, matchPwd])



//             //const preventDefault= ()=>{}

//         const handleClickShowPassword = () => {
//             setShowPwd( !showPwd );
//         };

//         const handleMouseDownPassword = (event) => {
//             event.preventDefault();
//         };






//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const v1 = USER_REGEX.test(user);
//         const v2 = PWD_REGEX.test(pwd);
//         if (!v1 || !v2) {
//             openNotification('error','Invalid Entry');
//             return;
//         }
//         try {
//             // ); REQUEEETTTTEEE BACCCKKKENNNNND a revoir
//             const response = await axios.post(REGISTER_URL,
//                 JSON.stringify({ user, pwd }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             ); 
//            console.log(response.data);
//             console.log(response.accessToken);
//            console.log(JSON.stringify(response))
//             openNotification('success','Changes done');
//             //clear state and controlled inputs
//             //need value attrib on inputs for this
//             setUser('');
//             setPwd('');
//             setMatchPwd('');
//         } catch (err) {
//             if (!err.response) {
//                 openNotification('error','No Server Response');

//             } else if (err.response.status === 409) {
//                 openNotification('error','Username Taken');
//             } else {
//                 openNotification('error','Registration Failed');

//             }

//         }
//     }

//     return (
//         <Aux>

//                 <section>
//                     <h1>Changement de mot de passe</h1>
//                     <form>
//                     <Grid container>
//                         <Grid
//                         item
//                             lg={12}
//                         justifyContent={"space-between"}
//                         alignItems="center"
//                         >
//                         <TextField
//                             required
//                             name="userName"
//                             value={user}
//                             label="username or mail"
//                             id="standard"
//                             variant="standard"
//                             ref={userRef}
//                             autoComplete="off"
//                             onChange={(e) => setUser(e.target.value)}
//                             aria-invalid={validName ? "false" : "true"}
//                             aria-describedby="uidnote"
//                             onFocus={() => setUserFocus(true)}
//                             onBlur={() => setUserFocus(false)}

//                             />
//                             <Grid>
//                             {userFocus && user && !validName ?
//                                 <Typography variant="body2" gutterBottom >
//                                     4 à 24 characteres.<br />
//                                     Doit commencer avec une lettre.<br />
//                                     Lettres, chiffres, underscores, trait d'union autorisés.
//                                 </Typography>
//                                 : <p></p>
//                                }
//                             </Grid>
//                         </Grid>


//                         <Grid
//                             item
//                                 lg={12}
//                             justifyContent={"space-between"}
//                             alignItems="center"
//                             >

//                                 <FormControl >
//                                         <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//                                         <Input
//                                             id="standard-adornment-password"
//                                             required
//                                             type={showPwd ? 'text' : 'password'}
//                                             value={pwd}
//                                             onChange={(e) => setPwd(e.target.value)}
//                                             aria-invalid={validPwd ? "false" : "true"}
//                                             aria-describedby="pwdnote"
//                                             onFocus={() => setPwdFocus(true)}
//                                             onBlur={() => setPwdFocus(false)}
//                                             endAdornment={
//                                             <InputAdornment position="end">
//                                                 <IconButton
//                                                 aria-label="toggle password visibility"
//                                                 onClick={handleClickShowPassword}
//                                                 onMouseDown={handleMouseDownPassword}
//                                                 >
//                                                 {showPwd ? <Visibility /> : <VisibilityOff />}
//                                                 </IconButton>
//                                             </InputAdornment>
//                                             }
//                                         />
//                                 </FormControl>
//                                 <Grid>
//                                 {pwdFocus && !validPwd  ?
//                                 <Typography variant="body2" gutterBottom>
//                                    8 à 24 charactères.<br />
//                                         Doit inclure un Majuscule, un Minuscule, un nombre et un charactère spécial.<br />
//                                         charactères spéciaux autorisés: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>

//                                 </Typography>
//                                 : <p></p>
//                                }

//                                 </Grid>
//                         </Grid>



//                         <Grid
//                             item
//                                 lg={12}
//                             justifyContent={"space-between"}
//                             alignItems="center"
//                             >
//                                 <FormControl >
//                                         <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
//                                         <Input
//                                             id="standard-adornment-password"
//                                             required
//                                             type={showPwd ? 'text' : 'password'}
//                                             onChange={(e) => setMatchPwd(e.target.value)}
//                                             value={matchPwd}
//                                             aria-invalid={validMatch ? "false" : "true"}
//                                             aria-describedby="confirmnote"
//                                             onFocus={() => setMatchFocus(true)}
//                                             onBlur={() => setMatchFocus(false)}
//                                             endAdornment={
//                                             <InputAdornment position="end">
//                                                 <IconButton
//                                                 aria-label="toggle password visibility"
//                                                 onClick={handleClickShowPassword}
//                                                 onMouseDown={handleMouseDownPassword}
//                                                 >
//                                                 {showPwd ? <Visibility /> : <VisibilityOff />}
//                                                 </IconButton>
//                                             </InputAdornment>
//                                             }
//                                         />
//                                 </FormControl>
//                                 <Grid>
//                                 {matchFocus && !validMatch   ?
//                                 <Typography variant="body2" gutterBottom >
//                                   Doit correspondre au mot de passe entré.
//                                 </Typography>
//                                 : <p></p>
//                                }

//                                 </Grid>
//                         </Grid>

//                         <Grid item>
//                                     <Button color="primary" 
//                                     onClick={handleSubmit}
//                                     disabled={!validName || !validPwd || !validMatch ? true : false}
//                                      >
//                                     {" "}
//                                     Valider{" "}
//                                     </Button>  
//                         </Grid>
//                     </Grid>

//                     </form>
//                     <NoticationAlert handleClose={onNotificationClosed} {...notification} />

//                 </section>

//         </Aux>
//     )

// }

// export default ChangePassword








import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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
import axios from "axios";
import {UPDATE_PASSWORD} from "../../Routes";
import {disconnect} from "../../services/reducers/Auth/AuthSlice";
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/


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

const ChangePassword = () => {
  const [matricule, setMatricule] = useState(null);
  const [password, setPassword] = useState(null);
  const [oldPassword, setOldPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
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
    
     const validatePassword = (pwd) => {
        return PWD_REGEX.test(pwd);

    }

   


    const result = dispatch(authenticateUser(matricule,oldPassword))
    
    if(result)
        {
            
                if (confirmPassword === password && confirmPassword !==null && password!==null ){
                    if( !validatePassword(password)){
                        openNotification("error","le mot de passe ne respecte pas les normes ")
                            setPassword(null)
                            setConfirmPassword(null)

                    }
                    else {
                        const updateInfos = {
                            "newPassword": password,
                            "oldPassword": oldPassword,
                            "registrationNumber": matricule
                          }
                        axios
                        .put(UPDATE_PASSWORD, updateInfos)
                        .then((response) => {
                            if (response.status === 204){
                                openNotification("success","Changement de Mot de Passe Réussi! Veuillez vous reconnecter ")
                                dispatch(disconnect())
                                setMatricule(null)
                                setPassword(null)
                                setOldPassword(null)
                                setConfirmPassword(null)
                                history.push("/auth")
                                }
                        })
                        .catch(() => {
                            openNotification("error","Changement de mot de passe Echoué")
                            setMatricule(null)
                            setPassword(null)
                            setOldPassword(null)
                            setConfirmPassword(null)
                        });
                    }    
                    }
                    
                else {
                    openNotification("error","confirmation de mot de passes incorecte")
                        setPassword(null)
                        setConfirmPassword(null)

                }

         }
    else{
            openNotification("error","Ancien Mot de passe incorrect")
                        setPassword(null)
                        setOldPassword(null)
                        setConfirmPassword(null)

        }
  };


  const handleMatriculeChange = (event) => {
    setMatricule(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
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
          Changement de mot de passe
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
            onChange={handleOldPasswordChange}
            value={oldPassword ||""}
            name="oldpassword"
            label="Ancien Mot de Passe"
            type="password"
            id="oldpassword"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handlePasswordChange}
            value={password ||""}
            name="password"
            label="Mot de Passe  (au moins 1 lettre miniscule,1 lettre majuscule et 1 chiffre )"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleConfirmPasswordChange}
            value={confirmPassword ||""}
            name="Password"
            label="Confirmer le nouveau Mot de Passe"
            type="password"
            id="confirmpassword"
            autoComplete="current-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Changer le mot de passe
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
export default ChangePassword;