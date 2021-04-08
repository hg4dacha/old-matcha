import React from 'react';
import { AiOutlineMenu } from "react-icons/ai"
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <header className='mw-100 fixed-top'>
            <div>
                <AiOutlineMenu color='white'  size='25px'/>
            </div>
            <div>
                <Logo width='200'/>
            </div>
            <div>
                <a class="btn btn-outline-light sign-in" href="#" role="button">Se connecter</a>
            </div>
        </header>
    );
}

export default Header