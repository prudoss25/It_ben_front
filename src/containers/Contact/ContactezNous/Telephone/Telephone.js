import React from "react";
import Aux from "../../../../hoc/_Aux/_Aux";
import telephone from  "../../../../assets/images/telephone.png";
import classes from './Telephone.css';

const Telephone = () => {
    return (
        <Aux>
            <div className={classes.Telephone}>
                <p >
                    <img src={telephone} alt="Telephone"/>
                    <h2>Téléphone</h2>
                </p>
                <ul>
                    <li>060000000</li>
                    <li>061111111</li>
                    <li>062222222</li>
                </ul>
            </div>
        </Aux>
    )
}
export default Telephone