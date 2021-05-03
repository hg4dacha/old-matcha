import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/NavBar';
import Alert from '../Alert/Alert';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button } from 'react-bootstrap'
import { RiUser3Fill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';

const Profile = () => {

    useEffect( () => {
        document.title = 'Profil - Matcha'
    }, [])

    const userInfo = [
        {label: 'Nom', info: 'Gadacha', small: false, id: 'lastname'},
        {label: 'Prénom', info: 'Ons', small: false, id: 'firstname'},
        {label: 'Nom d\'utilisateur', info: 'username93', small: 'ex: pseudo, pseudo46, pseudo-46, pseudo_46 (15 car. max).', id: 'username'},
        {label: 'E-mail', info: 'test@gmail.com', small: false, id: 'email'}
    ]

    const infoUser = userInfo.map( info => {
        return (
            <div key={uuidv4()}>
                <div className='info-rows'>
                <div className='label-and-info'>
                    <span className='info-label'>{info.label}</span>
                    <span className='info-info'>{info.info}</span>
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
            <Form className='forms-profile'>
                <Form.Group controlId={info.id} className='form-group-profile'>
                    <Form.Label>{info.label}</Form.Label>
                    <Form.Control defaultValue={info.info} type="email" placeholder="Entrez le nom" className='form-control-profile' autoFocus/>
                    <Form.Text className="text-muted">{info.small}</Form.Text>
                </Form.Group>
                <div className='div-buttons-form-profile'>
                    <Button variant="primary" type="submit" className='buttons-form-profile'>Enregistrer</Button>
                    <Button variant="danger" type="submit" className='buttons-form-profile'>Annuler</Button>
                </div>
            </Form>
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
                    <div className='info-container'>
                        {infoUser}
                    </div>
                    <div className='info-container mt-2 mb-5'>
                        <div>
                            <div className='info-rows'>
                                <div className='label-and-info'>
                                    <span className='info-label'>Mot de passe</span>
                                    <span className='info-info'>•••••••••••••</span>
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
                        <Form className='forms-profile'>
                            <div className='w-100'>
                                <Form.Group controlId="formBasicEmail" className='form-group-profile'>
                                        <Form.Label>Mot de passe actuel</Form.Label>
                                        <Form.Control type="password" placeholder="Entrez le mot de passe actuel" className='form-control-profile' autoFocus/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='form-group-profile mt-2'>
                                        <Form.Label>Nouveau mot de passe</Form.Label>
                                        <Form.Control type="password" placeholder="Entrez le nouveau mot de passe" className='form-control-profile'/>
                                        <Form.Text className="text-muted">6 caract. min, 1 majusc., 1 chiffre et 1 caract. spécial.</Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='form-group-profile mt-2'>
                                        <Form.Label>Confirmer le nouveau mot de passe</Form.Label>
                                        <Form.Control type="password" placeholder="Entrez le nouveau mot de passe" className='form-control-profile'/>
                                </Form.Group>
                            </div>
                            <div className='div-buttons-form-profile'>
                                <Button variant="primary" type="submit" className='buttons-form-profile'>Enregistrer</Button>
                                <Button variant="danger" type="submit" className='buttons-form-profile'>Annuler</Button>
                            </div>
                        </Form>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Profile