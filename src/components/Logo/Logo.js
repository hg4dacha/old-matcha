import React from 'react';
import logo from '../../images/logo.png';

const Logo = (props) => {
    return <img src={logo} alt='logo' className={props.className} style={{width: props.width + 'px', pointerEvents: 'none'}} draggable="false"/>
}

export default Logo