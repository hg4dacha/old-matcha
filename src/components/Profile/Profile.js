import React, { useEffect } from 'react';
import Navbar from '../NavBar/NavBar';
import { RiUser3Fill } from 'react-icons/ri';

const Profile = () => {

    useEffect( () => {
        document.title = 'Profil - Matcha'
    }, [])

    return (
        <div className='BackgroundFirst'>
            <div className='BackgroundSecond'>
                <Navbar />
                <div className='tittleDiv'>
                    <h1 className='FormsTittle center'>
                        <RiUser3Fill size='22' className='iconsFormsTittles' />
                    Profil</h1>
                </div>
            </div>
        </div>
    )
}

export default Profile