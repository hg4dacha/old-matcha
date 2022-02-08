import React from 'react';
import { IoArrowForwardCircle } from 'react-icons/io5';



const ValidatedInfo = (props) => {
    return (
        <div className='complete-profile-validated-information-div'>
            <div className='complete-profile-validated-information-label'>{props.label}</div>
            <IoArrowForwardCircle color='#0F5132' />
            <div className='complete-profile-validated-information-info'>{props.info}</div>
        </div>
    )
}

export default ValidatedInfo