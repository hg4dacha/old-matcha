import React from 'react';
import FormsHeader from '../FormsHeader/FormsHeader';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdEmail } from 'react-icons/md';
import { IoLockClosed } from 'react-icons/io5';

const ForgotPassword = () => {
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
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control type="email" required />
                                <div className='label-group'>
                                    <MdEmail size='16' className='iconsFormsInputs' />
                                    <Form.Label>Adresse e-mail</Form.Label>
                                </div>
                            </Form.Group>
                            <Link to='/SignIn' className='forgotPassword' >Retour à la connexion</Link>
                            <Button variant="light" type='submit' className='submitBtnLarge'>Envoyer le mail de réinitialisation</Button>
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