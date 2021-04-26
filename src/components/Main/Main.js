import React, { useEffect } from 'react';
import Navbar from '../NavBar/NavBar';
import { TiHome } from 'react-icons/ti';

const Main = () => {

    useEffect( () => {
        document.title = 'Acceuil - Matcha'
    }, [])

    return (
        <div className='BackgroundFirst'>
            <div className='BackgroundSecond'>
                <Navbar />
                <div className='tittleDiv'>
                    <TiHome size='23' className='iconsFormsTittles' />
                    <span className='FormsTittle'>Acceuil</span>
                </div>
            </div>
        </div>
    )
}

export default Main