import React from 'react';
import classes from "./Button.css";
const button = (props) => {

    const classname = [classes.Button, classes.Yellow].join(" ")

    // const style ={
    //     width : props.width,
    // }
    return (
        <button className={classname}  onClick={props.action}>{props.children}</button>
    )

}
export default button;