import React, { useState, useEffect, Fragment, useRef } from 'react';
import Navbar from '../NavBar/NavBar';
import UserInformationSection from './UserInformationSection'
import GenderAndOrientation from './GenderAndOrientation'
import TagsBadge from '../MemberProfile/TagsBadge';
import PasswordChangeSection from './PasswordChangeSection'
import Location from './Location'
import AlertMsg from '../AlertMsg/AlertMsg';
import ConfirmWindow from '../ConfirmWindow/ConfirmWindow';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import fr from "date-fns/locale/fr";
import differenceInYears from 'date-fns/differenceInYears';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';
import { NAMES_REGEX, USERNAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from '../../other/Regex';
import { RiErrorWarningLine } from 'react-icons/ri';
import { IoIosCloseCircle } from 'react-icons/io';
import { BsShieldLockFill } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import { IoPinSharp } from 'react-icons/io5';
import { BiCalendarAlt } from 'react-icons/bi';




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
    }, [usersPersonalInformation]);
    
    const prevUsersPersonalInformation = prevUsersPersonalInformationRef.current;
    

    // ON SUBMIT NEW INFORMATION ↓↓↓
    const handleSubmitUpdatedInformation = e => {
        e.preventDefault();

        if ( prevUsersPersonalInformation && prevUsersPersonalInformation !== usersPersonalInformation )
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
                        updateErrorAlert();
                        setInfoDataError(true);
                    }
                }
                else
                {
                    updateErrorAlert();
                    setInfoDataError(true);
                }
            }
        }
    }





// _-_-_-_-_-_-_-_-_- USER AGE SECTION -_-_-_-_-_-_-_-_-_


    // USER AGE ↓↓↓
    const _dateSelected = new Date('1992-06-01T08:59:24.000Z');
    const [dateSelected, setDateSelected] = useState(_dateSelected)

    const _userAge = '30';
    const [userAge, setUserAge] = useState(_userAge)

    const handleDateSelectedChange = (e) => {

        setDateSelected(e);
        (e !== null) &&
        setUserAge(differenceInYears(new Date(), e));
    }


    // PREVIOUS VALUE ↓↓↓
    const prevDateSelectedRef = useRef();

    useEffect( () => {
        prevDateSelectedRef.current = dateSelected;
    }, [dateSelected]);
    
    const prevDateSelected = prevDateSelectedRef.current;


    // INCORRECT DATA ↓↓↓
    const [dateDataError, setDateDataError] = useState(false)


    // ON SUBMIT NEW AGE ↓↓↓
    const handleSubmitUpdatedUserAge = (e) => {
        e.preventDefault();

        if ( prevDateSelected && prevDateSelected !== dateSelected &&
             dateSelected )
        {
            if ( (dateSelected instanceof Date) &&
                 (Object.prototype.toString.call(dateSelected)) &&
                 !(isNaN(dateSelected)) )
            {
                if ( (differenceInYears(new Date(), dateSelected)) > 18 &&
                     (differenceInYears(new Date(), dateSelected)) <= 130 )
                {
                    updateSuccessAlert();
                    setDateDataError(false);
                }
                else
                {
                    updateErrorAlert();
                    setDateDataError(true);
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



    // ORIENTATION (CHECKBOX) ↓↓↓
    const _orientationChecked = {
        maleOrientation: false,
        femaleOrientation: true
    }

    const [orientationChecked, setOrientationChecked] = useState(_orientationChecked)


    // PREVIOUS VALUE ↓↓↓
    const prevGenderCheckedRef = useRef();
    const prevOrientationCheckedRef = useRef();

    useEffect( () => {
        prevGenderCheckedRef.current = genderChecked;
        prevOrientationCheckedRef.current = orientationChecked;
    }, [genderChecked, orientationChecked]);
    
    const prevGenderChecked = prevGenderCheckedRef.current;
    const prevOrientationChecked = prevOrientationCheckedRef.current;


    const handleSubmitUpdatedGenderAndOrientation = e => {
        e.preventDefault();

        if ( (prevGenderChecked && prevGenderChecked !== genderChecked) ||
             (prevOrientationChecked && prevOrientationChecked !== orientationChecked) )
        {
            if ( (typeof(genderChecked.maleGender) === 'boolean') && (typeof(genderChecked.femaleGender) === 'boolean') &&
                 (typeof(orientationChecked.maleOrientation) === 'boolean') && (typeof(orientationChecked.femaleOrientation) === 'boolean') )
            {
                if ( (genderChecked.maleGender !== genderChecked.femaleGender) &&
                     (orientationChecked.maleOrientation === true || orientationChecked.femaleOrientation === true) )
                {
                    console.log(genderChecked.maleGender)
                    updateSuccessAlert();
                }
                else
                {
                    updateErrorAlert();
                }
            }
            else
            {
                updateErrorAlert();
            }
        }
    }





// _-_-_-_-_-_-_-_-_- PROFILE DESCRIPTION SECTION -_-_-_-_-_-_-_-_-_


    const _description = "Je ne suis à la recherche, ni d'une relation éphémère, ni d'amies, ni d'échanges pour combler une solitude. Ma vie est saine, équilibrée, et je souhaite simplement vous rencontrer pour une relation durable, sereine, apaisante, et harmonieuse. Dans laquelle chacun apportera sa joie de vivre, sa « vraie valeur ajoutée » ! Saurai-je être l'épice de votre vie ? Celle qui donnera de la saveur à votre quotidien, fera briller vos yeux, et adoucira vos vieux jours ? Bon, j'arrête là mon délire aromatique, faute de quoi, je vais passer pour un poète illuminé, bercé par les vapeurs d'absinthe !"

    const [description, setDescription] = useState(_description)

    const handleDescriptionChange = e => {
        setDescription(e.target.value)
    }

    // INCORRECT DATA ↓↓↓
    const [descriptionDataError, setDescriptionDataError] = useState(false)


    // SCROLL IN BOTTOM ↓↓↓
    useEffect( () => {
        const scrollChat = document.querySelector('.profile-description-textarea')
        scrollChat.scrollTop = scrollChat.scrollHeight
    }, [])


    // PREVIOUS VALUE ↓↓↓
    const prevDescriptionRef = useRef();

    useEffect( () => {
        prevDescriptionRef.current = description;
    }, [description]);
    
    const prevDescription = prevDescriptionRef.current;
    

    // ON SUBMIT NEW DESCRIPTION ↓↓↓
    const handleSubmitUpdatedDescription = e => {
        e.preventDefault();

        if ( prevDescription && prevDescription !== description )
        {
            if ( description !== '' )
            {
                if ( description.length <= 650 )
                {
                    setDescriptionDataError(false);
                    updateSuccessAlert();
                }
                else
                {
                    updateErrorAlert();
                    setDescriptionDataError(true);
                }
            }
        }
    }


// _-_-_-_-_-_-_-_-_- TAGS SECTION -_-_-_-_-_-_-_-_-_
    
    
    // USER TAGS ↓↓↓
    const _userTags = [
        "actualite",
        "politique",
        "fitness",
        "aventure",
        "geek"
    ]
    
    const [userTags, setUserTags] = useState(_userTags)


    const handleAddTag = (e) => {

        const tagID = e.currentTarget.id
        if ( (userTags.length < 5) && !(userTags.includes(tagID)) )
        {
            setUserTags(prevState => [...prevState, tagID]);
        }
    }


    const handleRemoveTag = (e) => {

        userTags.length > 0 &&
        setUserTags(userTags.filter(tag => tag !== e.currentTarget.id));
    }


    // INCORRECT DATA ↓↓↓
    const [userTagsDataError, setUserTagsDataError] = useState(false)


    // PREVIOUS VALUE ↓↓↓
    const prevUserTagsRef = useRef();

    useEffect( () => {
        prevUserTagsRef.current = userTags;
    }, [userTags]);
    
    const prevUserTags = prevUserTagsRef.current;
    

    // ON SUBMIT NEW TAGS ↓↓↓
    const handleSubmitUpdatedUserTags = e => {
        e.preventDefault();

        if ( prevUserTags && prevUserTags !== userTags )
        {
            if ( userTags.length === 5 )
            {
                setUserTagsDataError(false);
                updateSuccessAlert();
            }
            else
            {
                updateErrorAlert();
                setUserTagsDataError(true);
            }
        }
    }





// _-_-_-_-_-_-_-_-_- USER LOCATION SECTION -_-_-_-_-_-_-_-_-_


    // USER LOCATION ↓↓↓
    const _userLocation = { lat: 48.862725, lng: 2.287592 }
    const [userLocation, setUserLocation] = useState(_userLocation)


    // ACTIVATION OF GEOLOCATION ↓↓↓
    const [geolocationActivated, setGeolocationActivated] = useState(false)

    const enableGeolocation = () => {
        setGeolocationActivated(true);
    }


    // INCORRECT DATA ↓↓↓
    const [userLocationDataError, setUserLocationDataError] = useState({ error: false, msg: '' })


    // PREVIOUS VALUE ↓↓↓
    const prevUserLocationRef = useRef();

    useEffect( () => {
        prevUserLocationRef.current = userLocation;
    }, [userLocation]);
    
    const prevUserLocation = prevUserLocationRef.current;


    // ON SUBMIT NEW LOCATION ↓↓↓
    const handleSubmitUpdatedUserLocation = e => {
        e.preventDefault();

        if ( prevUserLocation && prevUserLocation !== userLocation )
        {
            console.log('OK')
        }
    }




// _-_-_-_-_-_-_-_-_- PASSWORD MODIFICATION SECTION -_-_-_-_-_-_-_-_-_


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
                        updateErrorAlert();
                        setPasswordDataError(true)
                    }
                }
                else
                {
                    updateErrorAlert();
                    setPasswordDataError(true)
                }
            }
            else
            {
                updateErrorAlert();
                setPasswordDataError(true)
            }
        }
    }





// _-_-_-_-_-_-_-_-_- ACCOUNT DELETION SECTION -_-_-_-_-_-_-_-_-_

    const [passwordAccountDeletion, setPasswordAccountDeletion] = useState('');


    const handlePasswordAccountDeletionChange = e => {
        setPasswordAccountDeletion(e.target.value);
    }


    // INCORRECT DATA ↓↓↓
    const [passwordAccountDeletionDataError, setPasswordAccountDeletionDataError] = useState(false)


    // ON CONFIRM ACCOUNT DELETION ↓↓↓
    const handleConfirmAccountDeletion = () => {

        if (passwordAccountDeletion !== '')
        {
            setPasswordAccountDeletionDataError(false);
            setPasswordAccountDeletion('');
        }
        else
        {
            updateErrorAlert();
            setPasswordAccountDeletionDataError(true);
        }
    }


    // CONFIRM WINDOW DATA ↓↓↓
    const deleteAccount = {
        act: "Supprimer mon compte",
        quest: <>supprimer <strong>définitivement</strong> votre compte</>,
        onConfirm: handleConfirmAccountDeletion
    }
    

    // ON SUBMIT ACCOUNT DELETION ↓↓↓
    const handleSubmitAccountDeletion = e => {
        e.preventDefault();

        if (passwordAccountDeletion !== '')
        {
            displayConfirmWindow(deleteAccount);
        }
    }


// _-_-_-_-_-_-_-_-_- DATA SECTION -_-_-_-_-_-_-_-_-_


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
            placeholder: 'ex: pseudo • pseudo46 • pseudo-46 • pseudo_46 • (15 caract max)',
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
            placeholder: 'Saisissez votre MDP actuel',
            maxLength: "250"
        },
        {
            value: userPassword.newPassword,
            id: 'newPassword',
            label: 'Nouveau',
            placeholder: 'Nouveau MDP | 6 caract min • 1 majusc • 1 chiffre • 1 caract spécial',
            maxLength: "250"
        },
        {
            value: userPassword.newPasswordConfirmation,
            id: 'newPasswordConfirmation',
            label: 'Confirmation',
            placeholder: 'Confirmez votre nouveau MDP',
            maxLength: "250"
        }
    ]


    // TAGS DATA ↓↓↓
    const tagsData = ["food", "science", "intello", "coding", "dodo", "bio", "geek", "vegan",
                      "artiste", "meditation", "paresse", "fitness", "aventure", "timide", "marketing",
                      "fastfood", "intelligence", "humour", "cool", "highTech", "globetrotting", "histoire",
                      "shopping", "nature", "sport", "football", "literature", "math", "action", "faitsDivers",
                      "decouverte", "cinema", "musique", "actualite", "politique", "social", "etudes",
                      "cuisine", "humanitaire", "animaux", "environnement", "jeuxVideo", "peinture", "dessin",
                      "ecriture", "lecture", "photographie", "chasse", "randonnee", "marche", "plage", "detente",
                      "automobile", "couture", "innovation", "terroir", "informatique", "marathon", "blogging"]




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

    const updateErrorAlert = () => {
        handleNewAlert({id: uuidv4(),
                        variant: "error",
                        information: "Oups ! Erreur..."})
    }



// _-_-_-_-_-_-_-_-_- CONFIRM WINDOW -_-_-_-_-_-_-_-_-_

    // CONFIRMATION WINDOW ↓↓↓
    const [confirmWindow, setConfirmWindow] = useState(false)

    const displayConfirmWindow = (act) => {
        setMsgConfirmWindow(act)
        setConfirmWindow(true)
    }

    const [msgConfirmWindow, setMsgConfirmWindow] = useState(null)




    return (
        <Fragment>
            {
                alertMessages.map( alert => {
                    return (
                        <AlertMsg
                            key={alert.id}
                            variant={alert.variant}
                            information={alert.information}
                        />
                    )
                })
            }
            {
                confirmWindow &&
                <ConfirmWindow
                    act={msgConfirmWindow.act}
                    quest={msgConfirmWindow.quest}
                    onCancel={setConfirmWindow}
                    onConfirm={msgConfirmWindow.onConfirm}
                />
            }
            <Navbar />
            <div className='big-info-container centerElementsInPage'>
                <h2 className='personal-information'>Vos informations personelles</h2>
                <div className='info-container'>
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
            <hr className='hr-profile'/>
                <h2 className='personal-information'>Date de naissance</h2>
                <div className='info-container'>
                    <Form className='d-flex align-items-center' onSubmit={handleSubmitUpdatedUserAge}>
                        <div className='age-user-label'>Âge</div>
                        <div className='age-user-div'>
                            <div className='age-user'>{`${userAge} ans`}</div>
                            <hr className='hr-age-user'/>
                            <div className='d-flex align-items-center'>
                                <BiCalendarAlt className='calendar-age-user-icon'/>
                                <DatePicker
                                    selected={dateSelected}
                                    onChange={handleDateSelectedChange}
                                    locale={fr}
                                    dateFormat="dd/MM/yyyy"
                                    closeOnScroll={true}
                                    isClearable={true}
                                    fixedHeight
                                    placeholderText="Entrez une date • jj/mm/aaaa"
                                />
                            </div>
                        </div>
                        <button type='submit' className='buttons-form-profile'>
                            Enregistrer
                        </button>
                        {
                        dateDataError &&
                        <Form.Text className='error-update-profile'>
                            <RiErrorWarningLine/>
                            Matcha est réservé aux majeurs
                        </Form.Text>
                        }
                    </Form>
                </div>
            <hr className='hr-profile'/>
                <h2 className='personal-information'>Genre et orientation</h2>
                <div className='info-container'>
                    <Form onSubmit={handleSubmitUpdatedGenderAndOrientation}>
                        <GenderAndOrientation
                            genderChecked={genderChecked}
                            setGenderChecked={setGenderChecked}
                            orientationChecked={orientationChecked}
                            setOrientationChecked={setOrientationChecked}
                        />
                        <button type='submit' className='buttons-form-profile'>
                            Enregistrer
                        </button>
                    </Form>
                </div>
            <hr className='hr-profile'/>
                <h2 className='personal-information'>Votre description</h2>
                <div className='info-container'>
                    <Form onSubmit={handleSubmitUpdatedDescription}>
                        <textarea
                            className='profile-description-textarea'
                            value={description}
                            onChange={handleDescriptionChange}
                            autoComplete='off'
                            placeholder='650 caractères max.'
                            minLength='1'
                            maxLength='650'
                            autoCapitalize='on'
                        >
                        </textarea>
                        <button type='submit' className='buttons-form-profile'>
                                Enregistrer
                        </button>
                        {
                        descriptionDataError &&
                        <Form.Text className='error-update-profile'>
                            <RiErrorWarningLine/>
                            Vos entrées ne sont pas valide
                        </Form.Text>
                        }
                    </Form>
                </div>
            <hr className='hr-profile'/>
                <h2 className='personal-information'>Vos tags</h2>
                <div className='info-container'>
                    <Form onSubmit={handleSubmitUpdatedUserTags}>
                        <div className='tags-section'>
                            { tagsData.map( data => {
                                return (
                                    <div key={uuidv4()} id={data} onClick={handleAddTag} className='tag-list-div'>
                                        <TagsBadge tag={data} />
                                    </div>
                                )
                            })
                            }
                        </div>
                        <div className='user-tags-selected'>
                            { userTags.map( data => {
                                return (
                                    <div key={uuidv4()} id={data} onClick={handleRemoveTag} className='user-tags-div'>
                                        <TagsBadge tag={data} />
                                        <IoIosCloseCircle className='tag-hide' />
                                    </div>
                                )
                            })
                            }
                        </div>
                        <button type='submit' className='buttons-form-profile'>
                            Enregistrer
                        </button>
                        {
                        userTagsDataError &&
                        <Form.Text className='error-update-profile' style={{right: '6%'}}>
                            <RiErrorWarningLine/>
                            Veuillez sélectionner 5 tags de la liste
                        </Form.Text>
                        }
                    </Form>
                </div>
            <hr className='hr-profile'/>
            <h2 className='personal-information'>Votre localisation</h2>
                <div className='info-container'>
                    <Form onSubmit={handleSubmitUpdatedUserLocation}>
                        <div className='user-city-location-container'>
                            <h3 className='user-city-location'><IoPinSharp/>Paris, Ile-de-France (France)</h3>
                            {/* <Button variant="danger" className='reset-city-button'>
                                <RiDeleteBin6Line className='reset-city-icon' />
                            </Button> */}
                            <Button
                                variant="info"
                                disabled={geolocationActivated ? true : false}
                                className='activate-geolocation'
                                onClick={enableGeolocation}
                            >
                                <TiLocation/>Activer la géolocalisation
                            </Button>
                        </div>
                        <Location
                            userLocation={userLocation}
                            setUserLocation={setUserLocation}
                            geolocationActivated={geolocationActivated}
                            setGeolocationActivated={setGeolocationActivated}
                            setUserLocationDataError={setUserLocationDataError}
                        />
                        <button type='submit' className='buttons-form-profile'>
                            Enregistrer
                        </button>
                        {
                        userLocationDataError.error &&
                        <Form.Text className='error-update-profile'>
                            <RiErrorWarningLine/>
                            {userLocationDataError.msg}
                        </Form.Text>
                        }
                    </Form>
                </div>
            <hr className='hr-profile'/>
                <h2 className='personal-information'>Modifier votre mot de passe</h2>
                <div className='info-container mb-5'>
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
            <hr className='hr-profile account-deletion'/>
                <h2 className='personal-information account-deletion'>Supprimer votre compte</h2>
                <div className='info-container account-deletion'>
                    <Form onSubmit={handleSubmitAccountDeletion}>
                        <Form.Group as={Row} className='account-deletion-form-group' controlId='passwordAccountDeletion'>
                            <Form.Label className='account-deletion-label' column sm="2">
                                <BsShieldLockFill className='account-deletion-logo' />
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    value={passwordAccountDeletion}
                                    onChange={handlePasswordAccountDeletionChange}
                                    placeholder='Saisissez votre mot de passe'
                                    type="password"
                                    autoComplete='off'
                                    maxLength='250'
                                    className='form-control-profile-account-deletion'
                                />
                            </Col>
                        </Form.Group>
                        <button type='submit' className='buttons-form-profile account-deletion'>
                            Supprimer mon compte
                        </button>
                        {
                        passwordAccountDeletionDataError &&
                        <Form.Text className='error-update-profile account-deletion'>
                            <RiErrorWarningLine/>
                            Votre entrée n'est pas valide
                        </Form.Text>
                        }
                    </Form>
                </div>
            </div>
        </Fragment>
    )
}


export default Profile