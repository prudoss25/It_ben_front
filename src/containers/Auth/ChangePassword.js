import React from "react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Aux from '../../hoc/_Aux/_Aux';

import { Button,Grid,  TextField, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



import NoticationAlert from "../../components/UI/NotificationAlert/NotificationAlert";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const ChangePassword = () => {

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


    const userRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [showPwd, setShowPwd] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])



            //const preventDefault= ()=>{}

        const handleClickShowPassword = () => {
            setShowPwd( !showPwd );
        };

        const handleMouseDownPassword = (event) => {
            event.preventDefault();
        };






    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            openNotification('error','Invalid Entry');
            return;
        }
        try {
            // ); REQUEEETTTTEEE BACCCKKKENNNNND a revoir
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            ); 
           console.log(response.data);
            console.log(response.accessToken);
           console.log(JSON.stringify(response))
            openNotification('success','Changes done');
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err.response) {
                openNotification('error','No Server Response');

            } else if (err.response.status === 409) {
                openNotification('error','Username Taken');
            } else {
                openNotification('error','Registration Failed');

            }

        }
    }

    return (
        <Aux>

                <section>
                    <h1>Changement de mot de passe</h1>
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
                            value={user}
                            label="username or mail"
                            id="standard"
                            variant="standard"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}

                            />
                            <Grid>
                            {userFocus && user && !validName ?
                                <Typography variant="body2" gutterBottom >
                                    4 à 24 characteres.<br />
                                    Doit commencer avec une lettre.<br />
                                    Lettres, chiffres, underscores, trait d'union autorisés.
                                </Typography>
                                : <p></p>
                               }
                            </Grid>
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
                                            type={showPwd ? 'text' : 'password'}
                                            value={pwd}
                                            onChange={(e) => setPwd(e.target.value)}
                                            aria-invalid={validPwd ? "false" : "true"}
                                            aria-describedby="pwdnote"
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                >
                                                {showPwd ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                        />
                                </FormControl>
                                <Grid>
                                {pwdFocus && !validPwd  ?
                                <Typography variant="body2" gutterBottom>
                                   8 à 24 charactères.<br />
                                        Doit inclure un Majuscule, un Minuscule, un nombre et un charactère spécial.<br />
                                        charactères spéciaux autorisés: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>

                                </Typography>
                                : <p></p>
                               }

                                </Grid>
                        </Grid>



                        <Grid
                            item
                                lg={12}
                            justifyContent={"space-between"}
                            alignItems="center"
                            >
                                <FormControl >
                                        <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            required
                                            type={showPwd ? 'text' : 'password'}
                                            onChange={(e) => setMatchPwd(e.target.value)}
                                            value={matchPwd}
                                            aria-invalid={validMatch ? "false" : "true"}
                                            aria-describedby="confirmnote"
                                            onFocus={() => setMatchFocus(true)}
                                            onBlur={() => setMatchFocus(false)}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                >
                                                {showPwd ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                        />
                                </FormControl>
                                <Grid>
                                {matchFocus && !validMatch   ?
                                <Typography variant="body2" gutterBottom >
                                  Doit correspondre au mot de passe entré.
                                </Typography>
                                : <p></p>
                               }

                                </Grid>
                        </Grid>

                        <Grid item>
                                    <Button color="primary" 
                                    onClick={handleSubmit}
                                    disabled={!validName || !validPwd || !validMatch ? true : false}
                                     >
                                    {" "}
                                    Valider{" "}
                                    </Button>  
                        </Grid>
                    </Grid>

                    </form>
                    <NoticationAlert handleClose={onNotificationClosed} {...notification} />

                </section>

        </Aux>
    )

}

export default ChangePassword