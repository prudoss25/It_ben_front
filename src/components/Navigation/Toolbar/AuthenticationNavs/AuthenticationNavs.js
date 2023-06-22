import React from "react";
import Notification from "../../Notification/Notification";
import Disconnect from "../../Disconnect/Disconnect";
import Profil from "../../Profil/Profil";
import Radium from "radium";

const AuthenticationNavs =() => {
    // const styleProfil = {
    //     '@media(max-width:760px)':{
    //         display:'none'
    //     }
    // }
    return (
        <div>
            <div>
              <Disconnect />
            </div>
            <div>
              <Notification />
            </div>
            <div>
              <Profil />
            </div>
        </div>
    );
}

export default Radium(AuthenticationNavs);