import React, { Fragment } from 'react'
import { Form, Button } from 'react-bootstrap'
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { RiErrorWarningLine } from 'react-icons/ri';





const UserInfoSection = (props) => {

    const errorMsg = props.errorMsg ?
    <Form.Text className='generalError generalErrorDisplay' id='generalError' style={{top:'0'}}><RiErrorWarningLine style={{marginTop: '-2px', marginRight: '2px'}} />L'entrée n'est pas valide</Form.Text> :
    <Form.Text className='generalError' id='generalError' style={{top:'0'}}><RiErrorWarningLine style={{marginTop: '-2px', marginRight: '2px'}} />L'entrée n'est pas valide</Form.Text> ;

    const userInfo = !props.infoEdit ?
    <div className='info-rows'>
        <div className='label-and-info'>
            <span className='info-label'>{props.label}</span>
            <span className='info-info'>{props.info}</span>
        </div>
        <div className='info-links' onClick={() => props.handleModification(props.id, props.infoEdit)}>
            <div className='div-links'>
                <div className='setting-and-arrow'>
                    <IoSettingsOutline className='setting' />
                    <IoIosArrowForward className='arrow' />
                </div>
            </div>
        </div>
    </div> :
    <Form className='forms-profile' onSubmit={props.handleSubmitInfo(props.id, props.infoEdit)}>
        <Form.Group controlId={props.id} className='form-group-profile'>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control onChange={props.handleChange} value={props.info} type='text' placeholder="...." className='form-control-profile' maxLength={props.maxLength} autoFocus/>
            <Form.Text className="text-muted">{props.small}</Form.Text>
            <div style={{position: 'relative'}}>
                {errorMsg}
            </div>
        </Form.Group>
        <div className='div-buttons-form-profile'>
            <Button variant="primary" type="submit" className='buttons-form-profile'>Enregistrer</Button>
            <Button variant="danger" type="button" className='buttons-form-profile' onClick={() => props.handleModification(props.id, props.infoEdit)}>Annuler</Button>
        </div>
    </Form>;

    return (
        <Fragment>
            {userInfo}
            <hr/>
        </Fragment>
    )
}

export default UserInfoSection