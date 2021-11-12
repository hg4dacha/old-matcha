import React, { Fragment } from 'react';
import Navbar from '../NavBar/NavBar';
import Chat from './Chat'
import { GoPrimitiveDot } from "react-icons/go";



const MemberProfile = () => {

    return (
        <Fragment>
            <Navbar />
            <Chat />
            <GoPrimitiveDot/>
        </Fragment>
    )
}

export default MemberProfile;