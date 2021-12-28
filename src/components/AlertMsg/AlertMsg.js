import React from 'react';
import Alert from 'react-bootstrap/Alert'
import { AiFillWarning, AiFillCheckCircle } from 'react-icons/ai';
import { RiInformationFill } from 'react-icons/ri';





const AlertMsg = ({variant, information}) => {

    function Icon() {
        if (variant === 'success') {
            return <AiFillCheckCircle className='mr-1' />
        }
        else if (variant === 'secondary') {
            return <RiInformationFill className='mr-1' />
        }
        else if (variant === 'danger') {
            return <AiFillWarning className='mr-1' />
        }
        else
            return null
    }


    return (
            <Alert variant={variant} className='alert-msg'>
                <Icon/>
                {information}
            </Alert>       
    )
}

export default AlertMsg