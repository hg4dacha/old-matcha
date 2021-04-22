import React, { useState, useEffect } from 'react';
import FormsHeader from '../FormsHeader/FormsHeader';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoLockOpen } from 'react-icons/io5';


const NewPassword = () => {

    useEffect( () => {
        document.title = 'Nouveau mot de passe - Matcha'
    }, [])

    
    const loginData = {
        password: '',
        passwordConfirmation: ''
    }
    
    const [data, setData] = useState(loginData);
    
    const { password, passwordConfirmation } = data
    
    useEffect( () => {
        const btn = document.querySelector('.submitBtnLarge');
        
        password !== '' && passwordConfirmation !== '' ?
        btn.removeAttribute('disabled') :
        btn.setAttribute('disabled', 'true') ;
    })
    
    
    const handleChange = e => {
        
        setData({...data, [e.target.id]: e.target.value});
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
                            <IoLockOpen size='23' className='iconsFormsTittles' />
                            <span className='FormsTittle'>Nouveau mot de passe</span>
                        </div>
                        <span className='center paragrInfo'>Entrer un nouveau mot de passe.</span>
                        <Form className='forms' autoComplete="off" onSubmit={handleSubmit}>
                        <Form.Group controlId="password">
                                <Form.Control onChange={handleChange} value={password} type="password" maxLength="250" required />
                                <div className='label-group'>
                                    <BsFillShieldLockFill size='15' className='iconsFormsInputs' />
                                    <Form.Label>Nouveau mot de passe</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="passwordConfirmation">
                                <Form.Control onChange={handleChange} value={passwordConfirmation} type="password" maxLength="250" required />
                                <div className='label-group'>
                                    <BsFillShieldLockFill size='15' className='iconsFormsInputs' color='#2c3e50' />
                                    <Form.Label style={{color: '#2c3e50'}}>Confirmez le nouveau mot de passe</Form.Label>
                                </div>
                            </Form.Group>
                            <Link to='/ForgotPassword' className='forgotPassword' >Annuler</Link>
                            <Button variant="light" type='submit' className='submitBtnLarge' disabled={true}>Réinitialiser le mot de passe</Button>
                        </Form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NewPassword