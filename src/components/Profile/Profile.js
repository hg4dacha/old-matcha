import React, { useState, useEffect, Fragment } from 'react';
import Navbar from '../NavBar/NavBar';
import UserInfoSection from './UserInfoSection'
import PasswordSection from './PasswordSection'
import { NAMES_REGEX, USERNAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from '../../other/Regex';
import { v4 as uuidv4 } from 'uuid';
import Alert from 'react-bootstrap/Alert'
import { RiUser3Fill } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai';



const Profile = () => {

    useEffect( () => {
        document.title = 'Profil - Matcha'
    }, [])

// --------------------------------------------------------

    /* modification of user information */
    const infoEdit$ = {
        lastname: false,
        firstname: false,
        username: false,
        email: false,
        password: false
    }

    const [infoEdit, setInfoEdit] = useState(infoEdit$)

    const handleModification = (idInfo, thisInfo) => {

        setInfoEdit(Object.assign(infoEdit, infoEdit$))
        setData(Object.assign(data, data$))
        setErrorDatas(Object.assign(errorDatas, errorDatas$))
        setInfoEdit({...infoEdit, [idInfo]: !thisInfo})
    }

// --------------------------------------------------------

    /* new values */
    const data$ = {
        lastname: 'Gadacha',
        firstname: 'Honsse',
        username: 'Username93',
        email: 'test@gmail.com',
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: ''
    }

    const [data, setData] = useState(data$);
    
    const { lastname, firstname, username, email, currentPassword, newPassword, newPasswordConfirmation } = data
    
    const handleChange = e => {
        setData({...data, [e.target.id]: e.target.value});
    }

    const handleNewValues = () => {
        setInfoEdit(Object.assign(infoEdit, infoEdit$))
        setErrorDatas(Object.assign(errorDatas, errorDatas$))
    }

// --------------------------------------------------------
    
    const errorDatas$ = {
            infosError: false,
            passwordsError: false
    }

    const [errorDatas, setErrorDatas] = useState(errorDatas$)

// --------------------------------------------------------

    const userData = [
        {
            label: 'Nom',
            info: lastname,
            id: 'lastname',
            small: false,
            infoEdit: infoEdit.lastname,
            maxLength: "30"
        },
        {
            label: 'Prénom',
            info: firstname,
            id: 'firstname',
            small: false,
            infoEdit: infoEdit.firstname,
            maxLength: "30"
        },
        {
            label: 'Nom d\'utilisateur',
            info: username,
            small: 'ex: pseudo, pseudo46, pseudo-46, pseudo_46 (15 car. max).',
            id: 'username',
            infoEdit: infoEdit.username,
            maxLength: "15"
        },
        {
            label: 'E-mail',
            info: email,
            small: false,
            id: 'email',
            infoEdit: infoEdit.email,
            maxLength: "250"
        }
    ]

// ----------------------------PASSWORD CHECKING----------------------------

    const handleSubmitPassword = e => {
        e.preventDefault();

        if (currentPassword !== '' && newPassword !== '' && newPasswordConfirmation !== '') {
            if (currentPassword) { // if the currentPassword === userPassword
                if (PASSWORD_REGEX.test(newPassword) && newPassword === newPasswordConfirmation) {
                    handleModification()
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    console.log('"' + newPassword + '" is a new password ✓')

                } else {
                    setErrorDatas({...errorDatas, passwordsError: true})
                }
            } else {
                setErrorDatas({...errorDatas, passwordsError: true})
            }
        }
    }

// ----------------------------INFO CHECKING----------------------------

const handleSubmitInfo = e => {
    e.preventDefault();

    if (lastname !== '' && firstname !== '' && username !== '' && email !== '') {
        if (!NAMES_REGEX.test(lastname) || !NAMES_REGEX.test(firstname) || !USERNAME_REGEX.test(username) || !EMAIL_REGEX.test(email)) {
            setErrorDatas({...errorDatas, infosError: true})
        }
        else {
            handleNewValues()
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            console.log('"' + lastname + '"\n"' + firstname + '"\n"' + username+ '"\nis a new infos ✓')
        }
    }
}


    return (
        <Fragment>
            <Navbar />
            <Alert variant='success' className='complete-profile' style={{border: '2px solid white'}}><AiOutlineCheck className='iconsNavbar'/>Vos informations ont été mis à jour</Alert>
            <div className='page-titles'>
                <h1 className='FormsTittle center'>
                    <RiUser3Fill size='22' className='iconsFormsTittles' />
                    Profil
                </h1>
            </div>
            <div className='big-info-container centerElementsInPage'>
                <h2 className='personal-information'>Vos informations personelles</h2>
                <div className='info-container'>
                    { userData.map( data => {
                        return (
                            <div key={uuidv4()}>
                                <UserInfoSection 
                                    label={data.label}
                                    info={data.info}
                                    small={data.small}
                                    id={data.id}
                                    infoEdit={data.infoEdit}
                                    handleModification={handleModification}
                                    handleChange={handleChange}
                                    handleSubmitInfo={handleSubmitInfo}
                                    errorMsg={errorDatas.infosError}
                                    maxLength={data.maxLength}
                                />
                            </div> )
                        })
                    }
                </div>
                <div className='info-container mt-2' style={{marginBottom: '100px'}}>
                    <div>
                        <PasswordSection 
                            passwordEdit={infoEdit.password}
                            handleModification={handleModification}
                            handleChange={handleChange}
                            handleSubmitPassword={handleSubmitPassword}
                            errorMsg={errorDatas.passwordsError}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Profile