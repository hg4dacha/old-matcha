import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdEmail } from 'react-icons/md';
import { BsFillShieldLockFill } from 'react-icons/bs';
import Logo from '../Logo/Logo';

const SignIn = () => {
    return (
        <div className='formsContent centerElementsInPage'>
            <div className='signInFormContent centerElementsInPage'>
                <Logo width='250' />
                <Form className='forms' autoComplete="off">
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" required />
                        <div className='label-group'>
                            <MdEmail size='16' className='iconSignIn' />
                            <Form.Label>Adresse e-mail</Form.Label>
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" required />
                        <div className='label-group'>
                            <BsFillShieldLockFill size='15' className='iconSignIn' />
                            <Form.Label>Mot de passe</Form.Label>
                        </div>
                    </Form.Group>
                    <a href='#' className='forgotPassword' >Mot de passe oubllié?</a>
                    <Button variant="light" type='submit' className='submitBtn'>Connexion</Button>
                </Form>
            </div>
        </div>
    )
}

export default SignIn