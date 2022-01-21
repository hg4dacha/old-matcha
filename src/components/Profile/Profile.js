import React, { useState, useEffect, Fragment } from 'react';
import Navbar from '../NavBar/NavBar';
import UserInfoSection from './UserInfoSection'
import PasswordSection from './PasswordSection'
import AlertMsg from '../AlertMsg/AlertMsg';
import { NAMES_REGEX, USERNAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from '../../other/Regex';
import { v4 as uuidv4 } from 'uuid';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import { RiUser3Fill } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai';

import { RiErrorWarningLine } from 'react-icons/ri';


const Profile = () => {

    useEffect( () => {
        document.title = 'Profil - Matcha'
    }, [])

// --------------------------------------------------------

    /* modification of user information */
    // const infoEdit$ = {
    //     lastname: false,
    //     firstname: false,
    //     username: false,
    //     email: false,
    //     password: false
    // }

    // const [infoEdit, setInfoEdit] = useState(infoEdit$)

    // const handleModification = (idInfo, thisInfo) => {

    //     setInfoEdit(Object.assign(infoEdit, infoEdit$))
    //     setData(Object.assign(data, _data)) // /!\  À revoir. Lors de l'enregistrement de la nouvelle info puis le click sur 'annuler' ou 'modifier' l'info revient à l'origine.
    //     setErrorDatas(Object.assign(errorDatas, errorDatas$))
    //     setInfoEdit({...infoEdit, [idInfo]: !thisInfo})
    // }

// --------------------------------------------------------

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



    // const handleNewValues = (idInfo, thisInfo) => {
    //     setInfoEdit(Object.assign(infoEdit, infoEdit$))
    //     setErrorDatas(Object.assign(errorDatas, errorDatas$))
    //     setInfoEdit({...infoEdit, [idInfo]: !thisInfo})
    // }

// --------------------------------------------------------
    
    const errorDatas$ = {
            infosError: false,
            passwordsError: false
    }

    const [errorDatas, setErrorDatas] = useState(errorDatas$)

// --------------------------------------------------------

    const userData = [
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

// ----------------------------PASSWORD CHECKING----------------------------

    const handleSubmitPassword = e => {
        e.preventDefault();

        // if (currentPassword !== '' && newPassword !== '' && newPasswordConfirmation !== '') {
        //     if (currentPassword) { // if the currentPassword === userPassword
        //         if (PASSWORD_REGEX.test(newPassword) && newPassword === newPasswordConfirmation) {
        //             handleModification();
        //             document.body.scrollTop = document.documentElement.scrollTop = 0
        //             updateSuccessAlert();
        //             console.log('"' + newPassword + '" is a new password ✓');

        //         } else {
        //             setErrorDatas({...errorDatas, passwordsError: true})
        //         }
        //     } else {
        //         setErrorDatas({...errorDatas, passwordsError: true})
        //     }
        // }
    }

// ----------------------------INFO CHECKING----------------------------

const handleSubmitUpdatedInformation = e => {
    e.preventDefault();

    if (usersPersonalInformation.lastname !== '' && usersPersonalInformation.firstname !== '' &&
        usersPersonalInformation.username !== '' && usersPersonalInformation.email !== '')
    {
        if (!NAMES_REGEX.test(usersPersonalInformation.lastname) || !NAMES_REGEX.test(usersPersonalInformation.firstname) ||
            !USERNAME_REGEX.test(usersPersonalInformation.username) || !EMAIL_REGEX.test(usersPersonalInformation.email))
        {
            setErrorDatas({...errorDatas, infosError: true})
        }
        else
        {
            updateSuccessAlert();
            // document.body.scrollTop = document.documentElement.scrollTop = 0;
            console.log(_usersPersonalInformation);
            console.log('"' + usersPersonalInformation.lastname + '"\n"' + usersPersonalInformation.firstname + '"\n"' + usersPersonalInformation.username+ '"\nis a new infos ✓');
        }
    }
}


    // ALERT ↓↓↓
    const [alertMessages, setAlertMessages] = useState([])


    const handleNewAlert = (newAlert) => {

        setAlertMessages(prevState => prevState.slice(1));
        setAlertMessages(prevState => [...prevState, newAlert]);
    }

    const updateSuccessAlert = () => {
        handleNewAlert({variant: "success",
                        information: "Les données ont été mises à jour."})
    }



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
            <div className='big-info-container centerElementsInPage'>
                <h2 className='personal-information'>Vos informations personelles</h2>
                <div className='info-container mb-2'>
                    <Form onSubmit={handleSubmitUpdatedInformation}>
                        { userData.map( (data, index) => {
                            return (
                                <UserInfoSection
                                    key={index}
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
                        <Form.Text className='error-update-profile'>
                            <RiErrorWarningLine/>
                            L'entrée n'est pas valide
                        </Form.Text>
                    </Form>
                </div>
                <h2 className='personal-information'>Modifier votre mot de passe</h2>
                <div className='info-container'>
                    <Form onSubmit={handleSubmitPassword}>
                        { passwordData.map( (data, index) => {
                            return (
                                <PasswordSection
                                    key={index}
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
                        <Form.Text className='error-update-profile'>
                            <RiErrorWarningLine/>
                            L'entrée n'est pas valide
                        </Form.Text>
                    </Form>
                </div>
            </div>
        </Fragment>
    )
}

export default Profile