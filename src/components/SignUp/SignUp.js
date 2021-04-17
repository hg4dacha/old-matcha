import React from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaIdCard } from 'react-icons/fa';
import { RiUserFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import Logo from '../Logo/Logo';

const SignUp = () => {
    return (
        <div className='BackgroundFirst'>
            <div className='BackgroundSecond'>
                <header className='centerElementsInPage FormsHeader'>
                    <Logo width='250' />
                </header>
                <section className='centerElementsInPage FormsSection'>
                    <div className='centerElementsInPage signInFormContent'>
                        <div>
                            <FiEdit size='19' className='iconsFormsTittles' />
                            <span className='FormsTittle'>Inscription</span>
                        </div>
                        <span>Vous avez déjà un compte? <Link to='/SignIn'>Connectez-vous</Link></span>
                        <Form className='forms' autoComplete="off">
                            <Form.Group controlId="formGroupText">
                                <Form.Control type="text" required />
                                <div className='label-group'>
                                    <FaIdCard size='15' className='iconsFormsInputs' />
                                    <Form.Label>Nom</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formGroupText">
                                <Form.Control type="text" required />
                                <div className='label-group'>
                                    <FaIdCard size='15' className='iconsFormsInputs' />
                                    <Form.Label>Prenom</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formGroupText">
                                <Form.Control type="text" required />
                                <div className='label-group'>
                                    <RiUserFill size='16' className='iconsFormsInputs' />
                                    <Form.Label>Nom d'utilisateur</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control type="email" required />
                                <div className='label-group'>
                                    <MdEmail size='16' className='iconsFormsInputs' />
                                    <Form.Label>Adresse e-mail</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control type="password" required />
                                <div className='label-group'>
                                    <BsFillShieldLockFill size='15' className='iconsFormsInputs' />
                                    <Form.Label>Mot de passe</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control type="password" required />
                                <div className='label-group'>
                                    <BsFillShieldLockFill size='15' className='iconsFormsInputs' color='#0a3d62' />
                                    <Form.Label style={{color: '#0a3d62'}}>Confirmer le mot de passe</Form.Label>
                                </div>
                            </Form.Group>
                            <Button variant="light" type='submit' className='submitBtn'>S'inscrire</Button>
                        </Form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SignUp