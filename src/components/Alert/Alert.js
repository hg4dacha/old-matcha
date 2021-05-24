import React, { Fragment } from 'react';
import Alert from 'react-bootstrap/Alert'
import { AiFillWarning } from 'react-icons/ai';

const Alert$ = () => {

    const alert = <div>
        <Alert variant='warning' className='complete-profile'>
            <AiFillWarning style={{marginTop: '-4px', marginRight: '3px'}} />
            Veuillez compléter votre profil afin d'accéder à la liste de suggestions
        </Alert>
    </div>
 
    return (
        <Fragment>
            {alert}
        </Fragment>
        
    )
}

export default Alert$