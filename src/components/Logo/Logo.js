import React from 'react';
import logo from '../../images/logo.png';

const Logo = (props) => {
    return <img src={logo} alt='logo' className='rounded mx-auto d-block' style={{width: props.width + 'px'}}/>
}

export default Logo