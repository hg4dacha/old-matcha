import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai"
import Logo from '../Logo/Logo';

const Header = () => {

    const widthState = window.screen.width <= 600 ? '18' : '25'

    const [size, setSize] = useState(widthState)

    document.querySelector('body').onresize = () => {
        if (window.screen.width <= 600) {
            setSize('18');
        } else { setSize('25'); }
    };

    return (
        <header className='mw-100'>
            <div className='sidesDivWidth'>
                <AiOutlineMenu color='white' size={size} />
            </div>
            <Logo />
            <div className='sidesDivWidth'>
                <a className="btn btn-outline-light sign-in" href="#" role="button">Se connecter</a>
            </div>
        </header>
    );
}

export default Header