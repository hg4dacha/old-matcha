import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/NavBar';
import Alert from '../Alert/Alert';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { RiUser3Fill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';

const Profile = () => {

    useEffect( () => {
        document.title = 'Profil - Matcha'
    }, [])

    const userInfo = [
        {label: 'Nom', Info: 'Gadacha'},
        {label: 'Prénom', Info: 'Ons'},
        {label: 'Nom d\'utilisateur', Info: 'username93'},
        {label: 'E-mail', Info: 'test@gmail.com'},
        {label: 'Mot de passe', Info: '•••••••'},
    ]

    const infoUser = userInfo.map( info => {
        return (
            <div key={uuidv4()}>
                <div className='info-rows'>
                <div className='label-and-info'>
                    <span className='info-label'>{info.label}</span>
                    <span className='info-info'>{info.Info}</span>
                </div>
                <Link to="/#" className='info-links'>
                    <div className='div-links'>
                        <div className='setting-and-arrow'>
                            <IoSettingsOutline className='setting' />
                            <IoIosArrowForward className='arrow' />
                        </div>
                    </div>
                </Link>
            </div>
            <hr/>
        </div>
        )
    })

    return (
        <div className='BackgroundFirst'>
            <div className='BackgroundSecond'>
                <Navbar />
                <Alert />
                <div className='page-titles'>
                    <h1 className='FormsTittle center'>
                        <RiUser3Fill size='22' className='iconsFormsTittles' />
                    Profil</h1>
                </div>
                <div className='big-info-container centerElementsInPage'>
                    <span className='personal-information'>Vos informations personelles</span>
                    <div className='bg-light info-container'>
                        {infoUser}
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Profile