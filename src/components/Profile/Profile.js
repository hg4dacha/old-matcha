import React, { useEffect } from 'react';
import Navbar from '../NavBar/NavBar';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import { RiUser3Fill } from 'react-icons/ri';

const Profile = () => {

    useEffect( () => {
        document.title = 'Profil - Matcha'
    }, [])

    return (
        <div className='BackgroundFirst'>
            <div className='BackgroundSecond'>
                <Navbar />
                <div className='tittleDiv'>
                    <h1 className='FormsTittle center'>
                        <RiUser3Fill size='22' className='iconsFormsTittles' />
                    Profil</h1>
                </div>
                <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                </div>
            </div>
        </div>
    )
}

export default Profile