import React, { useState, useEffect } from 'react';
import FormsHeader from '../FormsHeader/FormsHeader';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdEmail } from 'react-icons/md';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { BiNetworkChart } from 'react-icons/bi';


const SignIn = () => {

    useEffect( () => {
        document.title = 'Connexion - Matcha'
    }, [])
    

    const loginData = {
        email: '',
        password: ''
    }
    
    const [data, setData] = useState(loginData);
    
    const { email, password } = data
    
    useEffect( () => {
        const btn = document.querySelector('.submitBtnSmall');
        
        email !== '' && password !== '' ?
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
                            <BiNetworkChart size='28' className='iconsFormsTittles' />
                            <span className='FormsTittle'>Connexion</span>
                        </div>
                        <span className='center paragrInfo'>Pas encore de compte? <Link to='/SignUp' style={{fontStyle: 'initial'}}>Inscrivez-vous</Link></span>
                        <Form className='forms' autoComplete="off" onSubmit={handleSubmit} >
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
                            <Link to='/ForgotPassword' className='forgotPassword' >Mot de passe oubllié?</Link>
                            <Button variant="light" type='submit' className='submitBtnSmall' disabled={true}>Connexion</Button>
                        </Form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SignIn