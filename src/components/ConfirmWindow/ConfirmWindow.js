import React from 'react';
import Button from 'react-bootstrap/Button'
import { ImCross } from 'react-icons/im';




const ConfirmWindow = (props) => {


    return (
        <div className='confirm-window'>
            <div className='confirm-window-frame'>
                <div className='confirm-window-top'>
                    <h1 className='confirm-window-title'>{props.act}</h1>
                    <Button onClick={() => props.onCancel(false)} variant="dark" className='centerElementsInPage' style={{width: 'fit-content', height: '100%'}}>
                        <ImCross size='10' />
                    </Button>
                </div>
                <div className='confirm-window-middle'>
                    <div className='ml-3'>Êtes-vous sûr(e) de vouloir<span>&nbsp;{props.quest}&nbsp;</span>?</div>
                </div>
                <div className='confirm-window-bottom'>
                    <Button onClick={() => props.onConfirm()} size='sm' className='confirm-action'>Confirmer</Button>
                    <Button onClick={() => props.onCancel(false)} size='sm' className='cancel-action'>Annuler</Button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmWindow;