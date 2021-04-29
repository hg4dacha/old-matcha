import React, { useState, Fragment } from 'react';
import Alert from 'react-bootstrap/Alert'
import { AiFillWarning } from 'react-icons/ai';

const Alert$ = () => {

    const alert = <div>
        <Alert variant='danger' className='complete-profile'>
            <AiFillWarning style={{marginTop: '-4px', marginRight: '3px'}} />
            Veuillez compléter votre profil afin d'accéder à la liste de suggestions
        </Alert>
    </div>

    const [profileNotCompleted, setProfileNotCompleted] = useState(true)

    const ifProfileCompleted = profileNotCompleted && alert
 
    return (
        <Fragment>
            {ifProfileCompleted}
        </Fragment>
        
    )
}

export default Alert$