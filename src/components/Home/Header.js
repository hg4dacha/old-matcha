import React from 'react';
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <header className='mw-100 fixed-top'>
            <div>
                <Logo width='300'/>
            </div>
            <div>
                <a class="btn btn-outline-light sign-in float-right" href="#" role="button">Se connecter</a>
            </div>
        </header>
    );
}

export default Header