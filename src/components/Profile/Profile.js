import React, { useState, useEffect, Fragment } from 'react';
import Navbar from '../NavBar/NavBar';
import Alert from '../Alert/Alert';
import UserInfoSection from './UserInfoSection'
import PasswordSection from './PasswordSection'
import { NAMES_REGEX, USERNAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from '../../other/Regex';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button } from 'react-bootstrap'
import { RiUser3Fill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';





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

    const handleModification = (info, infoEdit) => {

        // ↓ this avoids the modification of several information at the same time
        setInfoEdit(Object.assign(infoEdit, infoEdit$))

        setInfoEdit({...infoEdit, [info]: !infoEdit})
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

    const infoUser = userData.map( info => {
        return (
            <div key={uuidv4()}>
                {!info.infoEdit ?
                <div className='info-rows'>
                    <div className='label-and-info'>
                        <span className='info-label'>{info.label}</span>
                        <span className='info-info'>{info.info}</span>
                    </div>
                    <div className='info-links' onClick={() => handleModification(info.id, info.infoEdit)}>
                        <div className='div-links'>
                            <div className='setting-and-arrow'>
                                <IoSettingsOutline className='setting' />
                                <IoIosArrowForward className='arrow' />
                            </div>
                        </div>
                    </div>
                </div> :
                <Form className='forms-profile'>
                    <Form.Group controlId={info.id} className='form-group-profile'>
                        <Form.Label>{info.label}</Form.Label>
                        <Form.Control onChange={handleChange} value={info.info} type={info.type} placeholder="Entrez le nom" className='form-control-profile' autoFocus/>
                        <Form.Text className="text-muted">{info.small}</Form.Text>
                    </Form.Group>
                    <div className='div-buttons-form-profile'>
                        <Button variant="primary" type="submit" className='buttons-form-profile'>Enregistrer</Button>
                        <Button variant="danger" type="button" className='buttons-form-profile' onClick={() => handleModification(info.id, info.infoEdit)}>Annuler</Button>
                    </div>
                </Form>}
                <hr/>
            </div>
        )
    })


    return (
        <Fragment>
            <Navbar />
            <Alert />
            <div className='page-titles'>
                <h1 className='FormsTittle center'>
                    <RiUser3Fill size='22' className='iconsFormsTittles' />
                    Profil
                </h1>
            </div>
            <div className='big-info-container centerElementsInPage'>
                <h2 className='personal-information'>Vos informations personelles</h2>
                <div className='info-container'>
                    {infoUser}
                    { userData.map( data => {
                        return (
                            <div key={uuidv4()}>
                                <UserInfoSection label={data.label}
                                                info={data.info}
                                                type={data.type}
                                                small={data.small}
                                                id={data.id}
                                                infoEdit={data.infoEdit}
                                                handleModification={handleModification}
                                                handleChange={handleChange}
                                />
                            </div>
                        )
                      })
                    }
                </div>
                <div className='info-container mt-2 mb-5'>
                    <div>
                        <PasswordSection stateOfPasswordSection={infoEdit.password}
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