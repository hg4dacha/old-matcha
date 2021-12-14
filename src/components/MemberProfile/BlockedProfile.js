import React from 'react';
import Button from 'react-bootstrap/Button'
import { BiLockOpenAlt } from "react-icons/bi";


import UserImage from "../../images/user-image.jpg"





const BlockedProfile = () => {

    return (
        <div className='blocked-profile-div'>
            <div className='blocked-profile-contain b-profile'>
                <img src={UserImage} alt='interlocutor' className='blocked-user-image'/>
                <span className='blocked-user-username'>username-269428</span>
                <div className='info-deblocked'>
                    <span className='blocking-information'>username-269428 est bloqué, vous ne pouvez pas accéder à son profil.</span>
                    <Button variant="secondary" className='centerElementsInPage' style={{width: 'fit-content'}}>
                        <BiLockOpenAlt/>Débloquer
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BlockedProfile;