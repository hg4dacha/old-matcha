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
    

    // ALERT ↓↓↓
    const [alertMessages, setAlertMessages] = useState([])
    
    const handleNewAlert = (newAlert) => {
        setAlertMessages([...alertMessages, newAlert])
    }


    // PROFILE DISPLAY ↓↓↓
    const [profileStatus, setProfileStatus] = useState('200')

    const [componentDisplay, setComponentDisplay] = useState(null)


    useEffect( () => {

        const unblockConfirmation = () => {
            setProfileStatus('200')
            handleNewAlert({variant: "success",
                            information: "Le profil a été débloqué"})
        }
    
        const blockConfirmation = () => {
            setProfileStatus('302')
            handleNewAlert({variant: "secondary",
                            information: "Le profil a été bloqué"})
        }
    
        const onLike = () => {
            handleNewAlert({variant: "success", information: "Le profil a été liké"})
        }
    
        const onDislike = () => {
            handleNewAlert({variant: "secondary", information: "Le profil a été disliké"})
        }

        if (profileStatus === '302') {
            setComponentDisplay(
                <BlockedProfile
                    onUnblockConfirmation={unblockConfirmation}
                />
            )
        }
        else if (profileStatus === '403') {
            setComponentDisplay(
                <BlockedUser />
            )
        }
        else if (profileStatus === '200') {
            setComponentDisplay(
                <AccessProfile
                    onBlockingConfirmation={blockConfirmation}
                    onLike={onLike}
                    onDislike={onDislike}
                />
            )
        }
        else {
            setComponentDisplay(null)
        }

    }, [profileStatus])

    // const unblockConfirmation = () => {
    //     setProfileStatus('200')
    //     handleNewAlert({variant: "success", information: "Le profil a été débloqué"})
    // }

    // const blockConfirmation = () => {
    //     setProfileStatus('302')
    //     handleNewAlert({variant: "secondary", information: "Le profil a été bloqué"})
    // }

    // const onLike = () => {
    //     handleNewAlert({variant: "success", information: "Le profil a été liké"})
    // }

    // const onDislike = () => {
    //     handleNewAlert({variant: "secondary", information: "Le profil a été disliké"})
    // }


    // function ProfileDisplay() {
    //     if (profileStatus === '302') {
    //         return <BlockedProfile onUnblockConfirmation={unblockConfirmation} />
    //     }
    //     else if (profileStatus === '403') {
    //         return <BlockedUser />
    //     }
    //     else if (profileStatus === '200') {
    //         return <AccessProfile
    //                     onBlockingConfirmation={blockConfirmation}
    //                     onLike={onLike}
    //                     onDislike={onDislike}
    //                />
    //     }
    // }


    return (
        <Fragment>
            <Navbar />
            {alertMessages.map( alert => {
                return (
                    <AlertMsg
                        key={uuidv4()}
                        variant={alert.variant}
                        information={alert.information}
                        setAlertMessages={setAlertMessages}
                        alertMessages={alertMessages}
                    />
                )
            })}
            {/* <ProfileDisplay /> */}
            {componentDisplay}
        </Fragment>
    )
}

export default MemberProfile;