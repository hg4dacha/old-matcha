import React, { useState } from 'react'
import Logo from '../Logo/Logo';

const FormsHeader = () => {

    const logoWidthBase = window.screen.width <= 600 ? '210' : '250'
    const [logoWidth, setlogoWidth] = useState(logoWidthBase)

    
    document.querySelector('body').onresize = () => {
        if (window.screen.width <= 600) {
            setlogoWidth('210');
        } else {
            setlogoWidth('250');
        }
    }

    return (
        <header className='centerElementsInPage FormsHeader'>
            <Logo width={logoWidth} />
        </header>
    )
}

export default FormsHeader