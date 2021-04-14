import React from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdEmail } from 'react-icons/md';
import { BsLockFill } from 'react-icons/bs';
import Logo from '../Logo/Logo';

const ForgotPassword = () => {
    return (
        <div className='BackgroundFirst'>
            <div className='BackgroundSecond'>
                <header className='centerElementsInPage FormsHeader'>
                    <Logo width='250' />
                </header>
                <section className='centerElementsInPage FormsSection'>
                    <div className='centerElementsInPage signInFormContent'>
                        <div>
                            <BsLockFill size='25'/>
                            <span className='FormsTittle'>Mot de passe oublié</span>
                        </div>
                        <span><Link to='/SignIn'>Retour à la connexion</Link></span>
                        <Form className='forms' autoComplete="off">
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control type="email" required />
                                <div className='label-group'>
                                    <MdEmail size='16' className='iconSignIn' />
                                    <Form.Label>Adresse e-mail</Form.Label>
                                </div>
                            </Form.Group>
                            <Link to='/ForgotPassword' className='forgotPassword' >Mot de passe oubllié?</Link>
                            <Button variant="light" type='submit' className='submitBtn'>Envoyer l'e-mail de réinitialisation</Button>
                        </Form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ForgotPassword