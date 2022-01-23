import React, { useState, useEffect, Fragment, useRef } from 'react';
import Navbar from '../NavBar/NavBar';
import UserInformationSection from './UserInformationSection'
import GenderAndOrientation from './GenderAndOrientation'
import PasswordChangeSection from './PasswordChangeSection'
import AlertMsg from '../AlertMsg/AlertMsg';
import Form from 'react-bootstrap/Form'
import { v4 as uuidv4 } from 'uuid';
import { NAMES_REGEX, USERNAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from '../../other/Regex';
import { RiErrorWarningLine } from 'react-icons/ri';





const Profile = () => {

    useEffect( () => {
        document.title = 'Profil - Matcha'
    }, [])





// _-_-_-_-_-_-_-_-_- USER PERSONAL INFORMATION SECTION -_-_-_-_-_-_-_-_-_


    // USER'S PERSONAL INFORMATION ↓↓↓
    const _usersPersonalInformation = {
        lastname: 'Gadacha',
        firstname: 'Honsse',
        username: 'Username93',
        email: 'test@gmail.com'
    }

    const [usersPersonalInformation, setUsersPersonalInformation] = useState(_usersPersonalInformation);

    const handlePersonalInformationChange = e => {
        setUsersPersonalInformation({...usersPersonalInformation, [e.target.id]: e.target.value});
    }


    // INCORRECT DATA ↓↓↓
    const [infoDataError, setInfoDataError] = useState(false)


    // PREVIOUS VALUE ↓↓↓
    const prevUsersPersonalInformationRef = useRef();

    useEffect( () => {
        prevUsersPersonalInformationRef.current = usersPersonalInformation;
    });
    
    const prevUsersPersonalInformation = prevUsersPersonalInformationRef.current;
    

    // ON SUBMIT NEW INFORMATION ↓↓↓
    const handleSubmitUpdatedInformation = e => {
        e.preventDefault();

        if ( prevUsersPersonalInformation !== usersPersonalInformation &&
             prevUsersPersonalInformation !== undefined )
        {
            if ( usersPersonalInformation.lastname !== '' && usersPersonalInformation.firstname !== '' &&
                usersPersonalInformation.username !== '' && usersPersonalInformation.email !== '' )
            {
                if ( !(usersPersonalInformation.lastname.length > 30) && !(usersPersonalInformation.firstname.length > 30) &&
                    !(usersPersonalInformation.username.length > 15) && !(usersPersonalInformation.email.length > 250) )
                {
                    if ( NAMES_REGEX.test(usersPersonalInformation.lastname) && NAMES_REGEX.test(usersPersonalInformation.firstname) &&
                        USERNAME_REGEX.test(usersPersonalInformation.username) && EMAIL_REGEX.test(usersPersonalInformation.email) )
                    {
                        setInfoDataError(false);
                        updateSuccessAlert();
                    }
                    else
                    {
                        setInfoDataError(true);
                    }
                }
                else
                {
                    setInfoDataError(true);
                }
            }
        }
    }






// _-_-_-_-_-_-_-_-_- GENDER AND ORIENTATION SECTION -_-_-_-_-_-_-_-_-_


    // GENDER (RADIO) ↓↓↓
    const _genderChecked = {
        maleGender: true,
        femaleGender: false
    }

    const [genderChecked, setGenderChecked] = useState(_genderChecked)

    const handleGenderChange = () => {
        setGenderChecked({maleGender: !genderChecked.maleGender,
                          femaleGender: !genderChecked.femaleGender})
    }


    // ORIENTATION (CHECKBOX) ↓↓↓
    const _orientationChecked = {
        maleOrientation: false,
        femaleOrientation: true
    }

    const [orientationChecked, setOrientationChecked] = useState(_orientationChecked)

    const handleOrientationChange = e => {
        console.log(e.target.checked)
        setOrientationChecked({...orientationChecked, [e.target.id]: ![e.target.checked]})
    }



// _-_-_-_-_-_-_-_-_- USER PERSONAL INFORMATION SECTION -_-_-_-_-_-_-_-_-_


    // USER PASSWORD ↓↓↓
    const _userPassword = {
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: ''
    }

    const [userPassword, setUserPassword] = useState(_userPassword);
    
    const handlePasswordChange = e => {
        setUserPassword({...userPassword, [e.target.id]: e.target.value});
    }


    // INCORRECT DATA ↓↓↓
    const [passwordDataError, setPasswordDataError] = useState(false)


    // ON SUBMIT NEW PASSWORD ↓↓↓
    const handleSubmitPassword = e => {
        e.preventDefault();

        if (userPassword.currentPassword !== '' && userPassword.newPassword !== '' && userPassword.newPasswordConfirmation !== '')
        {
            if ( !(userPassword.currentPassword.length > 250) &&
                 !(userPassword.newPassword.length > 250) &&
                 !(userPassword.newPasswordConfirmation.length > 250) )
            {
                if ( PASSWORD_REGEX.test(userPassword.newPassword) &&
                     userPassword.newPassword === userPassword.newPasswordConfirmation )
                {
                    if (userPassword.currentPassword)// if the currentPassword === userPassword
                    {
                        setPasswordDataError(false)
                        setUserPassword(
                            {
                            currentPassword: '',
                            newPassword: '',
                            newPasswordConfirmation: ''
                            })
                        updateSuccessAlert();
                    }
                    else
                    {
                        setPasswordDataError(true)
                    }
                }
                else
                {
                    setPasswordDataError(true)
                }
            }
            else
            {
                setPasswordDataError(true)
            }
        }
    }





// _-_-_-_-_-_-_-_-_- SECTION DATA -_-_-_-_-_-_-_-_-_


    // INFORMATION DATA ↓↓↓
    const infoData = [
        {
            value: usersPersonalInformation.lastname,
            id: 'lastname',
            label: 'Nom',
            placeholder: '...',
            maxLength: "30"
        },
        {
            value: usersPersonalInformation.firstname,
            id: 'firstname',
            label: 'Prénom',
            placeholder: '...',
            maxLength: "30"
        },
        {
            value: usersPersonalInformation.username,
            id: 'username',
            label: 'Nom d\'utilisateur',
            placeholder: 'ex: pseudo, pseudo46, pseudo-46, pseudo_46 (15 car. max).',
            maxLength: "15"
        },
        {
            value: usersPersonalInformation.email,
            id: 'email',
            label: 'E-mail',
            placeholder: 'abc@exemple.com',
            maxLength: "250"
        }
    ]


    // PASSWORD DATA ↓↓↓
    const passwordData = [
        {
            value: userPassword.currentPassword,
            id: 'currentPassword',
            label: 'Actuel',
            placeholder: '...',
            maxLength: "250"
        },
        {
            value: userPassword.newPassword,
            id: 'newPassword',
            label: 'Nouveau',
            placeholder: '6 caract. min, 1 majusc., 1 chiffre et 1 caract. spécial.',
            maxLength: "250"
        },
        {
            value: userPassword.newPasswordConfirmation,
            id: 'newPasswordConfirmation',
            label: 'Confirmation',
            placeholder: '...',
            maxLength: "250"
        }
    ]





// _-_-_-_-_-_-_-_-_- ALERT -_-_-_-_-_-_-_-_-_


    const [alertMessages, setAlertMessages] = useState([])


    const handleNewAlert = (newAlert) => {

        setAlertMessages(prevState => prevState.slice(1));
        setAlertMessages(prevState => [...prevState, newAlert]);
    }

    const updateSuccessAlert = () => {
        handleNewAlert({id: uuidv4(),
                        variant: "success",
                        information: "Les données ont été mises à jour."})
    }



    return (
        <Fragment>
            <Navbar />
            {alertMessages.map( (alert, index) => {
                return (
                    <AlertMsg
                        key={alert.id}
                        variant={alert.variant}
                        information={alert.information}
                    />
                )
            })}
            <div className='big-info-container centerElementsInPage'>
                <h2 className='personal-information'>Vos informations personelles</h2>
                <div className='info-container mb-2'>
                    <Form onSubmit={handleSubmitUpdatedInformation}>
                        { infoData.map( data => {
                            return (
                                <UserInformationSection
                                    key={data.id}
                                    value={data.value}
                                    handlePersonalInformationChange={handlePersonalInformationChange}
                                    id={data.id}
                                    label={data.label}
                                    placeholder={data.placeholder}
                                    maxLength={data.maxLength}
                                />
                            )
                          })
                        }
                        <button type='submit' className='buttons-form-profile'>
                            Enregistrer
                        </button>
                        {
                        infoDataError &&
                        <Form.Text className='error-update-profile'>
                            <RiErrorWarningLine/>
                            Vos entrées ne sont pas valide
                        </Form.Text>
                        }
                    </Form>
                </div>
                <div className='info-container mb-2'>
                    <Form onSubmit={null}>
                        <GenderAndOrientation
                            genderChecked={genderChecked}
                            onGenderChange={handleGenderChange}
                            orientationChecked={orientationChecked}
                            onOrientationChange={handleOrientationChange}
                        />
                        <button type='submit' className='buttons-form-profile'>
                            Enregistrer
                        </button>
                    </Form>
                </div>
                <h2 className='personal-information'>Votre description</h2>
                <div className='info-container mb-2'>
                    <Form onSubmit={null}>
                        <textarea></textarea>
                        <button type='submit' className='buttons-form-profile'>
                                Enregistrer
                        </button>
                    </Form>
                </div>
                <h2 className='personal-information'>Modifier votre mot de passe</h2>
                <div className='info-container'>
                    <Form onSubmit={handleSubmitPassword}>
                        { passwordData.map( data => {
                            return (
                                <PasswordChangeSection
                                    key={data.id}
                                    value={data.value}
                                    handlePasswordChange={handlePasswordChange}
                                    id={data.id}
                                    label={data.label}
                                    placeholder={data.placeholder}
                                    maxLength={data.maxLength}
                                />
                            )
                          })
                        }
                        <button type='submit' className='buttons-form-profile'>
                            Enregistrer
                        </button>
                        {
                        passwordDataError &&
                        <Form.Text className='error-update-profile'>
                            <RiErrorWarningLine/>
                            Vos entrées ne sont pas valide
                        </Form.Text>
                        }
                    </Form>
                </div>
            </div>
        </Fragment>
    )
}


export default Profile