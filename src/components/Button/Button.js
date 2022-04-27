import React from 'react';


function Button (props) {
    const style ={
        width : props.width,
        backgroundColor:'#FFB900',
        borderRadius : '16px',
        paddingBottom : '5px',
        paddingTop : '5px',
        fontWeight : 'bolder',
        fontSize : '16px',
        border:'solid 1px #FFB900'
    }
    return (
        <button style={style} onclick={props.action}>{props.button}</button>
    )

}
export default Button