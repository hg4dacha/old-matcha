import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../NavBar/NavBar';
import BlockedProfile from './BlockedProfile';
import BlockedUser from './BlockedUser';
import AccessProfile from './AccessProfile';
import AlertMsg from '../AlertMsg/AlertMsg';






const MemberProfile = () => {

    useEffect( () => {
        document.title = 'Profil membre - Matcha'
    }, [])

// --------------------------------------------------------

    // PROFILE DISPLAY ↓↓↓
    const [profileStatus, setProfileStatus] = useState('200')


    const unblockConfirmation = () => {
        setDisplayAlertMsg(prevState => ({...prevState, display: false}))
        setProfileStatus('200')
        handleDisplayAlertMsg("success", "Le profil a été débloqué")
    }

    const blockConfirmation = () => {
        setDisplayAlertMsg(prevState => ({...prevState, display: false}))
        setProfileStatus('302')
        handleDisplayAlertMsg("secondary", "Le profil a été bloqué")
    }


    function ProfileDisplay() {
        if (profileStatus === '302') {
            return <BlockedProfile onUnblockConfirmation={unblockConfirmation} />
        }
        else if (profileStatus === '403') {
            return <BlockedUser />
        }
        else if (profileStatus === '200') {
            return <AccessProfile onBlockingConfirmation={blockConfirmation} />
        }
    }


    // ALERT MSG ↓↓↓
    const [displayAlertMsg, setDisplayAlertMsg] = useState({
                                                            display: false,
                                                            variant: '',
                                                            information: ''
                                                        })

    const handleDisplayAlertMsg = (variant, information) => {

        setDisplayAlertMsg({
                            display : true,
                            variant: variant,
                            information: information,
                        })
        setTimeout( () => {
            setDisplayAlertMsg(prevState => ({...prevState, display: false}))
        }, 4000)
    }

    const alertMessage = displayAlertMsg.display ?
                         <AlertMsg
                            variant={displayAlertMsg.variant}
                            information={displayAlertMsg.information}
                         /> :
                         null ;


    return (
        <Fragment>
            <Navbar />
            {alertMessage}
            <ProfileDisplay />
        </Fragment>
    )
}

export default MemberProfile;