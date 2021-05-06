import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/NavBar';
import Alert from '../Alert/Alert';
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
    const infoChange = {
        lastname: false,
        firstname: false,
        username: false,
        email: false,
        password: false
    }

    const [infoState, setInfoState] = useState(infoChange)

    const handleModification = (info, stateInfo) => {

        // this avoids the modification of several information at the same time
        setInfoState(Object.assign(infoState, infoChange))

        setInfoState({...infoState, [info]: !stateInfo})
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
        console.log(lastname)
    }

    let NAMES_REGEX = /^[a-zA-Z-]{1,30}$/;
    let USERNAME_REGEX = /^[a-zA-Z0-9-_]{1,15}$/;
    let EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})){1,255}$/;
    let PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,255}$/;



    const userInfo = [
        {label: 'Nom', info: lastname, id: 'lastname', type:'text', small: false, stateInfo: infoState.lastname},
        {label: 'Prénom', info: firstname, id: 'firstname', type:'text', small: false, stateInfo: infoState.firstname},
        {label: 'Nom d\'utilisateur', info: username, type:'text', small: 'ex: pseudo, pseudo46, pseudo-46, pseudo_46 (15 car. max).', id: 'username', stateInfo: infoState.username},
        {label: 'E-mail', info: email, type:'email', small: false, id: 'email', stateInfo: infoState.email}
    ]

    const infoUser = userInfo.map( info => {
        return (
            <div key={uuidv4()}>
                {!info.stateInfo ?
                <div className='info-rows'>
                <div className='label-and-info'>
                    <span className='info-label'>{info.label}</span>
                    <span className='info-info'>{info.info}</span>
                </div>
                <div className='info-links' onClick={() => handleModification(info.id, info.stateInfo)}>
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
                    <Button variant="danger" type="button" className='buttons-form-profile' onClick={() => handleModification(info.id, info.stateInfo)}>Annuler</Button>
                </div>
            </Form>}
            <hr/>
        </div>
        )
    })

    const infoPassword = !infoState.password ?
    <div className='info-rows'>
        <div className='label-and-info'>
            <span className='info-label'>Mot de passe</span>
            <span className='info-info'>•••••••••••••</span>
        </div>
        <div className='info-links' onClick={() => handleModification('password', infoState.password)}>
            <div className='div-links'>
                <div className='setting-and-arrow'>
                    <IoSettingsOutline className='setting' />
                    <IoIosArrowForward className='arrow' />
                </div>
            </div>
        </div>
    </div> :
    <Form className='forms-profile'>
    <div className='w-100'>
        <Form.Group controlId="currentPassword" className='form-group-profile'>
                <Form.Label>Mot de passe actuel</Form.Label>
                <Form.Control onChange={handleChange} type="password" placeholder="" className='form-control-profile' autoFocus/>
        </Form.Group>
        <Form.Group controlId="newPassword" className='form-group-profile mt-2'>
                <Form.Label>Nouveau mot de passe</Form.Label>
                <Form.Control onChange={handleChange} type="password" placeholder="" className='form-control-profile'/>
                <Form.Text className="text-muted">6 caract. min, 1 majusc., 1 chiffre et 1 caract. spécial.</Form.Text>
        </Form.Group>
        <Form.Group controlId="newPasswordConfirmation" className='form-group-profile mt-2'>
                <Form.Label>Confirmer le nouveau mot de passe</Form.Label>
                <Form.Control onChange={handleChange} type="password" placeholder="" className='form-control-profile'/>
        </Form.Group>
    </div>
    <div className='div-buttons-form-profile'>
        <Button variant="primary" type="submit" className='buttons-form-profile'>Enregistrer</Button>
        <Button variant="danger" type="button" className='buttons-form-profile' onClick={() => handleModification('password', infoState.password)}>Annuler</Button>
    </div>
</Form>



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
                    <h2 className='personal-information'>Vos informations personelles</h2>
                    <div className='info-container'>
                        {infoUser}
                    </div>
                    <div className='info-container mt-2 mb-5'>
                        <div>
                            {infoPassword}
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile