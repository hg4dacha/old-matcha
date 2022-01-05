import React, { useEffect, useState } from 'react';
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

    const [show, setShow] = useState(true)

    useEffect( () => {

        let countDown = setTimeout( () => {
            setShow(false)
        } , 6000)

        return () => {
            clearTimeout(countDown)
        }

    }, [])


    return (
            <Alert variant={variant} show={show} transition={null} id='alert' className='alert-msg'>
                <Icon/>
                {information}
            </Alert>
    )
}

export default AlertMsg