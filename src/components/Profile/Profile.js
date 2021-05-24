import React, { useState, useEffect, Fragment } from 'react';
import Navbar from '../NavBar/NavBar';
import UserInfoSection from './UserInfoSection'
import PasswordSection from './PasswordSection'
import { NAMES_REGEX, USERNAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from '../../other/Regex';
import { v4 as uuidv4 } from 'uuid';
import { RiUser3Fill } from 'react-icons/ri';



const Profile = () => {

    useEffect( () => {
        document.title = 'Profil - Matcha'
    }, [])


    /* modification of user information */
    const infoEdit$ = {
        lastname: false,
        firstname: false,
        username: false,
        email: false,
        password: false
    }

    const [infoEdit, setInfoEdit] = useState(infoEdit$)

    const handleModification = (idInfo, thisInfo) => {

        // ↓ this avoids the modification of several information at the same time
        setInfoEdit(Object.assign(infoEdit, infoEdit$))

        setInfoEdit({...infoEdit, [idInfo]: !thisInfo})
    }


    /* new values */
    const loginData = {
        lastname: 'Gadacha',
        firstname: 'Honsse',
        username: 'Username93',
        email: 'test@gmail.com',
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: ''
    }

    const [data, setData] = useState(loginData);
    
    const { lastname, firstname, username, email, currentPassword, newPassword, newPasswordConfirmation } = data
    
    const handleChange = e => {
    
        setData({...data, [e.target.id]: e.target.value});
        console.log(e.target.value)
    }
    
    
    const userData = [
        {
            label: 'Nom',
            info: lastname,
            id: 'lastname',
            type:'text',
            small: false,
            infoEdit: infoEdit.lastname
        },
        {
            label: 'Prénom',
            info: firstname,
            id: 'firstname',
            type:'text',
            small: false,
            infoEdit: infoEdit.firstname
        },
        {
            label: 'Nom d\'utilisateur',
            info: username,
            type:'text',
            small: 'ex: pseudo, pseudo46, pseudo-46, pseudo_46 (15 car. max).',
            id: 'username',
            infoEdit: infoEdit.username
        },
        {
            label: 'E-mail',
            info: email,
            type:'email',
            small: false,
            id: 'email',
            infoEdit: infoEdit.email
        }
    ]



    return (
        <Fragment>
            <Navbar />
            <div className='page-titles'>
                <h1 className='FormsTittle center'>
                    <RiUser3Fill size='22' className='iconsFormsTittles' />
                    Profil
                </h1>
            </div>
            <div className='big-info-container centerElementsInPage'>
                <h2 className='personal-information'>Vos informations personelles</h2>
                <div className='info-container'>
                    { userData.map( data => {
                        return (
                            <div key={uuidv4()}>
                                <UserInfoSection 
                                    label={data.label}
                                    info={data.info}
                                    type={data.type}
                                    small={data.small}
                                    id={data.id}
                                    infoEdit={data.infoEdit}
                                    handleModification={handleModification}
                                    handleChange={handleChange}
                                />
                            </div> )
                        })
                    }
                </div>
                <div className='info-container mt-2 mb-5'>
                    <div>
                        <PasswordSection 
                            stateOfPasswordSection={infoEdit.password}
                            handleModification={handleModification}
                            handleChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Profile