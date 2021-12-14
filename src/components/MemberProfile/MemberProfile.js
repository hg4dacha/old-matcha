import React, { Fragment, useEffect } from 'react';
import Navbar from '../NavBar/NavBar';
import BlockedProfile from './BlockedProfile';
import BlockedUser from './BlockedUser';
import AccessProfile from './AccessProfile';






const MemberProfile = () => {

    useEffect( () => {
        document.title = 'Profil membre - Matcha'
    }, [])

// --------------------------------------------------------

    return (
        <Fragment>
            <Navbar />
            {/* <BlockedProfile/> */}
            {/* <BlockedUser/> */}
            <AccessProfile/>
        </Fragment>
    )
}

export default MemberProfile;