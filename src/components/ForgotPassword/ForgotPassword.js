import React from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdEmail } from 'react-icons/md';
import { IoLockClosed } from 'react-icons/io5';
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
                            <IoLockClosed size='20' className='iconsFormsTittles' />
                            <span className='FormsTittle'>Mot de passe oublié</span>
                        </div>
                        <span><Link to='/SignIn'>Retour à la connexion</Link></span>
                        <Form className='forms' autoComplete="off">
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control type="email" required />
                                <div className='label-group'>
                                    <MdEmail size='16' className='iconsFormsInputs' />
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

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { BsFillShieldLockFill } from 'react-icons/bs';
// import { IoLockOpen } from 'react-icons/io5';
// import Logo from '../Logo/Logo';

// const NewPassword = () => {
//     return (
//         <div className='BackgroundFirst'>
//             <div className='BackgroundSecond'>
//                 <header className='centerElementsInPage FormsHeader'>
//                     <Logo width='250' />
//                 </header>
//                 <section className='centerElementsInPage FormsSection'>
//                     <div className='centerElementsInPage signInFormContent'>
//                         <div>
//                             <IoLockOpen size='20' className='iconsFormsTittles' />
//                             <span className='FormsTittle'>Nouveau mot de passe</span>
//                         </div>
//                         <span><Link to='/SignIn'>Retour à la connexion</Link></span>
//                         <Form className='forms' autoComplete="off">
//                         <Form.Group controlId="formGroupPassword">
//                                 <Form.Control type="password" required />
//                                 <div className='label-group'>
//                                     <BsFillShieldLockFill size='15' className='iconsFormsInputs' />
//                                     <Form.Label>Nouveau mot de passe</Form.Label>
//                                 </div>
//                             </Form.Group>
//                             <Form.Group controlId="formGroupPassword">
//                                 <Form.Control type="password" required />
//                                 <div className='label-group'>
//                                     <BsFillShieldLockFill size='15' className='iconsFormsInputs' />
//                                     <Form.Label>Confirmez le nouveau mot de passe</Form.Label>
//                                 </div>
//                             </Form.Group>
//                             <Link to='/ForgotPassword' className='forgotPassword' >Mot de passe oubllié?</Link>
//                             <Button variant="light" type='submit' className='submitBtn'>Réinitialiser le mot de passe</Button>
//                         </Form>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     )
// }

// export default NewPassword