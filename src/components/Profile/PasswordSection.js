import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { RiErrorWarningLine } from 'react-icons/ri';





const PasswordSection = (props) => {

    // const errorMsg = props.errorMsg ?
    // <Form.Text className='generalError generalErrorDisplay' id='generalError' style={{top:'0'}}><RiErrorWarningLine style={{marginTop: '-2px', marginRight: '2px'}} />Vos entrées ne sont pas valides</Form.Text> :
    // <Form.Text className='generalError' id='generalError' style={{top:'0'}}><RiErrorWarningLine style={{marginTop: '-2px', marginRight: '2px'}} />Vos entrées ne sont pas valides</Form.Text> ;


    // const passwordData = !props.passwordEdit ?
    //     <div className='info-rows'>
    //         <div className='label-and-info'>
    //             <span className='info-label'>Mot de passe</span>
    //             <span className='info-info'>•••••••••••••</span>
    //         </div>
    //         <div className='info-links' onClick={() => props.handleModification('password', props.passwordEdit)}>
    //             <div className='div-links'>
    //                 <div className='setting-and-arrow'>
    //                     <IoSettingsOutline className='setting' />
    //                     <IoIosArrowForward className='arrow' />
    //                 </div>
    //             </div>
    //         </div>
    //     </div> :
    //     <Form className='forms-profile' onSubmit={props.handleSubmitPassword}>
    //     <div className='w-100'>
    //         <Form.Group controlId="currentPassword" className='form-group-profile'>
    //                 <Form.Label>Mot de passe actuel</Form.Label>
    //                 <Form.Control onChange={props.handleChange} type="password" placeholder="" className='form-control-profile' maxLength="250" autoFocus/>
    //         </Form.Group>
    //         <Form.Group controlId="newPassword" className='form-group-profile mt-2'>
    //                 <Form.Label>Nouveau mot de passe</Form.Label>
    //                 <Form.Control onChange={props.handleChange} type="password" placeholder="" className='form-control-profile' maxLength="250"/>
    //                 <Form.Text className="text-muted">6 caract. min, 1 majusc., 1 chiffre et 1 caract. spécial.</Form.Text>
    //         </Form.Group>
    //         <Form.Group controlId="newPasswordConfirmation" className='form-group-profile mt-2'>
    //                 <Form.Label>Confirmer le nouveau mot de passe</Form.Label>
    //                 <Form.Control onChange={props.handleChange} type="password" placeholder="" className='form-control-profile' maxLength="250"/>
    //         </Form.Group>
    //         <div style={{position: 'relative'}}>
    //             {errorMsg}
    //         </div>
    //     </div>
    //     <div className='div-buttons-form-profile'>
    //         <Button variant="primary" type="submit" className='buttons-form-profile'>Enregistrer</Button>
    //         <Button variant="danger" type="button" className='buttons-form-profile' onClick={() => props.handleModification('password', props.passwordEdit)}>Annuler</Button>
    //     </div>
    //     </Form>;

    return (
        <Form.Group as={Row} className="mb-1" controlId={props.id}>
            <Form.Label column sm="2">
                {props.label}
            </Form.Label>
            <Col sm="10">
                <Form.Control
                    value={props.value}
                    onChange={props.handlePasswordChange}
                    placeholder={props.placeholder}
                    type="password"
                    autoComplete='off'
                    maxLength={props.maxLength}
                    className='form-control-profile'
                />
            </Col>
        </Form.Group>
    )

}

export default PasswordSection