import React, { useState, useEffect } from 'react';
import FormsHeader from '../FormsHeader/FormsHeader';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdEmail } from 'react-icons/md';
import { IoLockClosed } from 'react-icons/io5';


const ForgotPassword = () => {

    useEffect( () => {
        document.title = 'Mot de passe oublié - Matcha'
    }, [])


    const loginData = {
        email: ''
    }
    
    const [data, setData] = useState(loginData);
    
    const { email } = data

    useEffect( () => {
        const btn = document.querySelector('.submitBtnLarge');
        
        email !== '' ?
        btn.removeAttribute('disabled') :
        btn.setAttribute('disabled', 'true') ;
    })
    
    
    const handleChange = e => {
        
        setData({email: e.target.value});
    }
    
    const handleSubmit = e => {
        e.preventDefault()
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
                        <Form className='forms' autoComplete="off" onSubmit={handleSubmit} >
                            <Form.Group controlId="email">
                                <Form.Control onChange={handleChange} value={email} type="text" required />
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