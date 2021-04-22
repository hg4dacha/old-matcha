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
import { RiErrorWarningLine } from 'react-icons/ri';
import { TiInfoOutline } from 'react-icons/ti';
// import Alert from 'react-bootstrap/Alert'


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

    let EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleSubmit = e => {
        e.preventDefault()

        if (!EMAIL_REGEX.test(data.email)) {
            document.querySelector('#emailError').classList.add('smallErrorDisplay')
        }
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
                                <Form.Control onChange={handleChange} value={lastname} type="text" maxLength="30" required />
                                <div className='label-group'>
                                    <FaIdCard size='15' className='iconsFormsInputs' />
                                    <Form.Label>Nom</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="firstname">
                                <Form.Control onChange={handleChange} value={firstname} type="text" maxLength="30" required />
                                <div className='label-group'>
                                    <FaIdCard size='15' className='iconsFormsInputs' />
                                    <Form.Label>Prenom</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="username">
                                <Form.Control onChange={handleChange} value={username} type="text" maxLength="15" required />
                                <div className='label-group'>
                                    <RiUserFill size='16' className='iconsFormsInputs' />
                                    <Form.Label>Nom d'utilisateur</Form.Label>
                                </div>
                                <Form.Text className='smallOnFocus'>ex: pseudo, pseudo46, pseudo-46, pseudo_46 (15 car. max).</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Control onChange={handleChange} value={email} type="text" maxLength="250" required />
                                <div className='label-group'>
                                    <MdEmail size='16' className='iconsFormsInputs' />
                                    <Form.Label>Adresse e-mail</Form.Label>
                                </div>
                                <Form.Text className='smallOnError' id='emailError'><RiErrorWarningLine style={{marginTop: '-2px', marginRight: '2px'}} />Adresse e-mail non valide</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Control onChange={handleChange} value={password} type="password" maxLength="250" required />
                                <div className='label-group'>
                                    <BsFillShieldLockFill size='15' className='iconsFormsInputs' />
                                    <Form.Label>Mot de passe</Form.Label>
                                </div>
                                <Form.Text className='smallOnFocus'><TiInfoOutline style={{marginTop: '-2px', marginRight: '2px'}} />6 caract. min, 1 majusc., 1 chiffre ou 1 caract. spécial.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="passwordConfirmation">
                                <Form.Control onChange={handleChange} value={passwordConfirmation} type="password" maxLength="250" required />
                                <div className='label-group'>
                                    <BsFillShieldLockFill size='15' className='iconsFormsInputs' color='#2c3e50' />
                                    <Form.Label style={{color: '#2c3e50'}}>Confirmer le mot de passe</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Text className='smallOnError'><RiErrorWarningLine style={{marginTop: '-2px', marginRight: '2px'}} />Certaines de vos entrées ne sont pas valides</Form.Text>
                            <Button variant="light" type='submit' className='submitBtnSignUp' disabled={true}>S'inscrire</Button>
                        </Form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SignUp