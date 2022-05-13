import React from 'react';
import classes from "./Button.css";
import PropTypes from 'prop-types';

const button = (props) => {

    const classname = [classes.Button, classes.Yellow].join(" ")


    return (
        <button className={classname}  onClick={props.action}>{props.children}</button>
    )

}
export default button;

button.propTypes = {
    action: PropTypes.func.isRequired,
    children: PropTypes.node
}