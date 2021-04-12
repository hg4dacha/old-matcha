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
                <Form className='forms'>
                    <Form.Group controlId="formGroupEmail">
                        <div>
                            <MdEmail size='18' />
                            <Form.Label>Adresse e-mail</Form.Label>
                        </div>
                        <Form.Control type="email" className='inputStyle' />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <div>
                            <BsFillShieldLockFill size='17' />
                            <Form.Label>Mot de passe</Form.Label>
                        </div>
                        <Form.Control type="password" className='inputStyle' />
                    </Form.Group>
                    <a href='#' >Mot de passe oubllié?</a>
                    <Button variant="light">Connexion</Button>
                </Form>
            </div>
        </div>
    )
}

export default SignIn