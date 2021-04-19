import React, { useState } from 'react';
import FormsHeader from '../FormsHeader/FormsHeader';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdEmail } from 'react-icons/md';
import { IoLockClosed } from 'react-icons/io5';


const ForgotPassword = () => {


    const loginData = {
        email: ''
    }

    const [data, setData] = useState(loginData);

    const email = data.email


    const btn = document.querySelector('.submitBtnSmall');

    const handleChange = e => {

        setData({...data, [e.target.id]: e.target.value});

        // email !== '' ?
        // btn.removeAttribute('disabled') :
        // btn.setAttribute('disabled', 'true') ;
    }


    return (
        <div className='BackgroundFirst'>
            <div className='BackgroundSecond'>
                <FormsHeader />
                <section className='centerElementsInPage FormsSection'>
                    <div className='centerElementsInPage formContent sectionContentSize'>
                        <div className='tittleDiv'>
                            <IoLockClosed size='23' className='iconsFormsTittles' />
                            <span className='FormsTittle'>Mot de passe oublié</span>
                        </div>
                        <span className='center paragrInfo'>Entrer l'adresse email de votre compte,<br />un mail de réinitialisation vous sera envoyé.</span>
                        <Form className='forms' autoComplete="off">
                            <Form.Group controlId="email">
                                <Form.Control onChange={handleChange} value={email} type="email" required />
                                <div className='label-group'>
                                    <MdEmail size='16' className='iconsFormsInputs' />
                                    <Form.Label>Adresse e-mail</Form.Label>
                                </div>
                            </Form.Group>
                            <Link to='/SignIn' className='forgotPassword' >Retour à la connexion</Link>
                            <Button variant="light" type='submit' className='submitBtnLarge' disabled={true}>Envoyer le mail de réinitialisation</Button>
                        </Form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ForgotPassword