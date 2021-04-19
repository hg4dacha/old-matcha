import React from 'react';
import FormsHeader from '../FormsHeader/FormsHeader';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoLockOpen } from 'react-icons/io5';

const NewPassword = () => {
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
                        <Form className='forms' autoComplete="off">
                        <Form.Group controlId="formGroupPassword">
                                <Form.Control type="password" required />
                                <div className='label-group'>
                                    <BsFillShieldLockFill size='15' className='iconsFormsInputs' />
                                    <Form.Label>Nouveau mot de passe</Form.Label>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control type="password" required />
                                <div className='label-group'>
                                    <BsFillShieldLockFill size='15' className='iconsFormsInputs' color='#2c3e50' />
                                    <Form.Label style={{color: '#2c3e50'}}>Confirmez le nouveau mot de passe</Form.Label>
                                </div>
                            </Form.Group>
                            <Link to='/ForgotPassword' className='forgotPassword' >Annuler</Link>
                            <Button variant="light" type='submit' className='submitBtnLarge'>Réinitialiser le mot de passe</Button>
                        </Form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NewPassword