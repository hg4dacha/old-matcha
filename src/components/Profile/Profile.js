import React, { useEffect } from 'react';
import Navbar from '../NavBar/NavBar';
import { RiUserFill } from 'react-icons/ri';

const Profile = () => {

    useEffect( () => {
        document.title = 'Profil - Matcha'
    }, [])

    return (
        <div className='BackgroundFirst'>
            <div className='BackgroundSecond'>
                <Navbar />
                <div className='tittleDiv'>
                    <h1 className='FormsTittle'>
                        <RiUserFill size='22' className='iconsFormsTittles' />
                    Profil</h1>
                </div>
            </div>
        </div>
    )
}

export default Profile