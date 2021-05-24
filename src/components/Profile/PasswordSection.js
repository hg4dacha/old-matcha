import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap'
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';





const PasswordSection = (props) => {

    const passwordData = !props.stateOfPasswordSection ?
        <div className='info-rows'>
            <div className='label-and-info'>
                <span className='info-label'>Mot de passe</span>
                <span className='info-info'>•••••••••••••</span>
            </div>
            <div className='info-links' onClick={() => props.handleModification('password', props.stateOfPasswordSection)}>
                <div className='div-links'>
                    <div className='setting-and-arrow'>
                        <IoSettingsOutline className='setting' />
                        <IoIosArrowForward className='arrow' />
                    </div>
                </div>
            </div>
        </div> :
        <Form className='forms-profile'>
        <div className='w-100'>
            <Form.Group controlId="currentPassword" className='form-group-profile'>
                    <Form.Label>Mot de passe actuel</Form.Label>
                    <Form.Control onChange={props.handleChange} type="password" placeholder="" className='form-control-profile' autoFocus/>
            </Form.Group>
            <Form.Group controlId="newPassword" className='form-group-profile mt-2'>
                    <Form.Label>Nouveau mot de passe</Form.Label>
                    <Form.Control onChange={props.handleChange} type="password" placeholder="" className='form-control-profile'/>
                    <Form.Text className="text-muted">6 caract. min, 1 majusc., 1 chiffre et 1 caract. spécial.</Form.Text>
            </Form.Group>
            <Form.Group controlId="newPasswordConfirmation" className='form-group-profile mt-2'>
                    <Form.Label>Confirmer le nouveau mot de passe</Form.Label>
                    <Form.Control onChange={props.handleChange} type="password" placeholder="" className='form-control-profile'/>
            </Form.Group>
        </div>
        <div className='div-buttons-form-profile'>
            <Button variant="primary" type="submit" className='buttons-form-profile'>Enregistrer</Button>
            <Button variant="danger" type="button" className='buttons-form-profile' onClick={() => props.handleModification('password', props.stateOfPasswordSection)}>Annuler</Button>
        </div>
        </Form>;

    return (
        <Fragment>
            {passwordData}
            <hr/>
        </Fragment>
    )

}

export default PasswordSection