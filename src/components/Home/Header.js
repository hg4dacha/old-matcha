import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai"
import Logo from '../Logo/Logo';

const Header = () => {

    const AiOutlineMenuSizeBase = window.screen.width <= 600 ? '18' : '25'
    const [AiOutlineMenuSize, setAiOutlineMenuSize] = useState(AiOutlineMenuSizeBase)


    const logoWidthBase = window.screen.width <= 600 ? '150' : '200'
    const [logoWidth, setlogoWidth] = useState(logoWidthBase)

    
    document.querySelector('body').onresize = () => {
        if (window.screen.width <= 600) {
            setAiOutlineMenuSize('18');
            setlogoWidth('150');
        } else {
            setAiOutlineMenuSize('25');
            setlogoWidth('200');
        }
    };

 

    return (
        <header className='mw-100'>
            <div className='sidesDivWidth'>
                <AiOutlineMenu color='white' size={AiOutlineMenuSize} />
            </div>
            <Logo width={logoWidth} />
            <div className='sidesDivWidth'>
                <a className="btn btn-outline-light sign-in" href="#" role="button">Se connecter</a>
            </div>
        </header>
    );
}

export default Header