import React from "react";
import Notification from "../../Notification/Notification";
import Disconnect from "../../Disconnect/Disconnect";
import Profil from "../../Profil/Profil";
import Radium from "radium";

const AuthenticationNavs =(props) => {
    const {authenticated} = props
    const styleProfil = {
        '@media(max-width:760px)':{
            display:'none'
        }
    }
    return authenticated ? (
        <div>
            <div>
              <Disconnect />
            </div>
            <div>
              <Notification />
            </div>
            <div style={styleProfil}>
              <Profil />
            </div>
        </div>
    ): (<div></div>)
}

export default Radium(AuthenticationNavs);