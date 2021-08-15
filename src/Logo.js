import './styles/App.scss';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Logo () {
    return (
        <div className = "logo">
          <FontAwesomeIcon className = "inner-logo" icon = {faMusic} />
          <div className = 'inner-logo'>HONG VAN </div>
        </div>
    )
}

export default Logo;