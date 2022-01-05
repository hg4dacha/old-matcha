import React, { Fragment, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
        setProfileStatus('200')
        // handleDisplayAlertMsg("success", "Le profil a été débloqué")
        handleNewAlert({variant: "success", information: "Le profil a été débloqué"})
    }

    const blockConfirmation = () => {
        setProfileStatus('302')
        // handleDisplayAlertMsg("secondary", "Le profil a été bloqué")
        handleNewAlert({variant: "secondary", information: "Le profil a été bloqué"})
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
    // const [displayAlertMsg, setDisplayAlertMsg] = useState({
    //                                                         variant: '',
    //                                                         information: ''
    //                                                     })

    // const handleDisplayAlertMsg = (variant, information) => {

    //     setDisplayAlertMsg(prevState => ({
    //                             variant: variant,
    //                             information: information
    //                     }))
    // }

    
    const [alertMessages, setAlertMessages] = useState([])
    
    const handleNewAlert = (newAlert) => {
        setAlertMessages([...alertMessages, newAlert])
    }

    
    // useEffect( () => {
    //     alertMessages.length !== 0 &&
    //         setTimeout( () => {
    //             setAlertMessages(alertMessages.slice(1))
    //             console.log('DELETE!')
    //         } , 6000)
    // }, [alertMessages])

    return (
        <Fragment>
            <Navbar />
            {alertMessages.map( alert => {
                return (
                    <AlertMsg
                        key={uuidv4()}
                        variant={alert.variant}
                        information={alert.information}
                    />
                )
            })}
            <ProfileDisplay />
        </Fragment>
    )
}

export default MemberProfile;