import React from 'react';
import { AiOutlineMenu } from "react-icons/ai"
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <header className='mw-100'>
            <div className='w120'>
                <AiOutlineMenu color='white'  size='25px'/>
            </div>
            <Logo width='200'/>
            <div className='w120'>
                <a class="btn btn-outline-light sign-in" href="#" role="button">Se connecter</a>
            </div>
        </header>
    );
}

export default Header