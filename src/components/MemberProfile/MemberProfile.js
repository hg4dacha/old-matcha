import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../NavBar/NavBar';
import BlockedProfile from './BlockedProfile';
import BlockedUser from './BlockedUser';
import AccessProfile from './AccessProfile';






const MemberProfile = () => {

    useEffect( () => {
        document.title = 'Profil membre - Matcha'
    }, [])

// --------------------------------------------------------

    // PROFILE DISPLAY ↓↓↓
    const [profileStatus, setProfileStatus] = useState('200')
    

    function ProfileDisplay() {
        if (profileStatus === '302') {
            return <BlockedProfile onUnblockConfirmation={setProfileStatus} />
        }
        else if (profileStatus === '403') {
            return <BlockedUser />
        }
        else if (profileStatus === '200') {
            return <AccessProfile onBlockingConfirmation={setProfileStatus} />
        }
    }


    return (
        <Fragment>
            <Navbar />
            <ProfileDisplay />
        </Fragment>
    )
}

export default MemberProfile;