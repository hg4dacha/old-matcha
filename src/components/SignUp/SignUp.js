import React, { useState, useEffect } from 'react';
import FormsHeader from '../FormsHeader/FormsHeader';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaIdCard } from 'react-icons/fa';
import { RiUserFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';


const SignUp = () => {

    useEffect( () => {
        document.title = 'Inscription - Matcha'
    }, [])


    const loginData = {
        lastname: '',
        firstname: '',
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    const [data, setData] = useState(loginData);
    
    const { lastname, firstname, username, email, password, passwordConfirmation } = data

    useEffect( () => {
        const btn = document.querySelector('.submitBtnSignUp');
        
        lastname !== '' && firstname !== '' && username !== '' &&
        email !== '' && password !== '' && passwordConfirmation !== '' ?
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
                    <div className='centerElementsInPage formContent signUpSizeContent'>
                        <div className='tittleDiv'>
                            <FiEdit size='21' className='iconsFormsTittles' />
                            <span className='FormsTittle'>Inscription</span>
                        </div>
                        <span className='center paragrInfoSignUp'>Vous avez déjà un compte? <Link to='/SignIn' style={{fontStyle: 'initial'}}>Connectez-vous</Link></span>
                        <Form className='forms' autoComplete="off" onSubmit={handleSubmit} >
                            <Form.Group controlId="lastname">
                                <Form.Control onChange={handleChange} value={lastname} type="text" required />
                                <div className='label-group'>
                                    <FaIdCard size='15' className='iconsFormsInputs' />
                                    <Form.Label>Nom</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="firstname">
                                <Form.Control onChange={handleChange} value={firstname} type="text" required />
                                <div className='label-group'>
                                    <FaIdCard size='15' className='iconsFormsInputs' />
                                    <Form.Label>Prenom</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="username">
                                <Form.Control onChange={handleChange} value={username} type="text" required />
                                <div className='label-group'>
                                    <RiUserFill size='16' className='iconsFormsInputs' />
                                    <Form.Label>Nom d'utilisateur</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Control onChange={handleChange} value={email} type="text" required />
                                <div className='label-group'>
                                    <MdEmail size='16' className='iconsFormsInputs' />
                                    <Form.Label>Adresse e-mail</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Control onChange={handleChange} value={password} type="password" required />
                                <div className='label-group'>
                                    <BsFillShieldLockFill size='15' className='iconsFormsInputs' />
                                    <Form.Label>Mot de passe</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="passwordConfirmation">
                                <Form.Control onChange={handleChange} value={passwordConfirmation} type="password" required />
                                <div className='label-group'>
                                    <BsFillShieldLockFill size='15' className='iconsFormsInputs' color='#2c3e50' />
                                    <Form.Label style={{color: '#2c3e50'}}>Confirmer le mot de passe</Form.Label>
                                </div>
                            </Form.Group>
                            <Button variant="light" type='submit' className='submitBtnSignUp' disabled={true}>S'inscrire</Button>
                        </Form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SignUp