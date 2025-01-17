import React from "react";
import Aux from "../../hoc/_Aux/_Aux";

const SearchEngine = () => {
    return(
        <Aux>
            <iframe style={{width:"100%"}}title="Vérification de Membre" id="searchEngine" src="https://asebem-engine.web.app/"/>
        </Aux>
    )
}

export default SearchEngine;