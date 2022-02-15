import React, { useState, useEffect, Fragment } from 'react';
import Alert from 'react-bootstrap/Alert';
import LogoBis from '../Logo/LogoBis';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import fr from "date-fns/locale/fr";
import differenceInYears from 'date-fns/differenceInYears';
import ValidatedInfo from './ValidatedInfo'
import GenderAndOrientation from '../Profile/GenderAndOrientation'
import TagsBadge from '../MemberProfile/TagsBadge';
import Location from '../Profile/Location'
import AlertMsg from '../AlertMsg/AlertMsg';
import { v4 as uuidv4 } from 'uuid';
import { RiErrorWarningLine, RiSaveFill } from 'react-icons/ri';
import { CgCloseO, CgCardHearts } from 'react-icons/cg';
import { TiLocation, TiInfo } from 'react-icons/ti';
import { IoPinSharp, IoMaleFemaleSharp, IoCalendarOutline } from 'react-icons/io5';
import { FaSearchLocation, FaSlackHash } from "react-icons/fa";
import { BsInfoCircle, BsPersonCheck } from "react-icons/bs";
import { BiCalendarAlt } from "react-icons/bi";





const CompleteProfile = () => {

    useEffect( () => {
        document.title = 'Compléter profil - Matcha'
    }, [])





// _-_-_-_-_-_-_-_-_- USER AGE SECTION -_-_-_-_-_-_-_-_-_


    // USER AGE ↓↓↓
    const [dateSelected, setDateSelected] = useState(null)

    const _userAge = '...';
    const [userAge, setUserAge] = useState(_userAge)

    const handleDateSelectedChange = (e) => {

        setDateSelected(e);
        (e !== null) &&
        setUserAge(differenceInYears(new Date(), e));
    }

    
    // INCORRECT DATA ↓↓↓
    const [dateDataError, setDateDataError] = useState(false)
    // ON SUBMIT NEW AGE ↓↓↓
    const userAgeChecking = () => {

        if (dateSelected)
        {
            if ( (dateSelected instanceof Date) &&
                    (Object.prototype.toString.call(dateSelected)) &&
                    !(isNaN(dateSelected)) )
            {
                if ( (differenceInYears(new Date(), dateSelected)) > 18 &&
                    (differenceInYears(new Date(), dateSelected)) <= 130 )
                {
                    setDateDataError(false);
                    return(false);
                }
                else
                {
                    setDateDataError(true);
                    return(true);
                }
            }
        }
        else
        {
            setDateDataError(true);
            return(true);
        }
    }






// _-_-_-_-_-_-_-_-_- GENDER AND ORIENTATION SECTION -_-_-_-_-_-_-_-_-_


    // GENDER (RADIO) ↓↓↓
    const _genderChecked = {
        maleGender: false,
        femaleGender: false
    }

    const [genderChecked, setGenderChecked] = useState(_genderChecked)



    // ORIENTATION (CHECKBOX) ↓↓↓
    const _orientationChecked = {
        maleOrientation: false,
        femaleOrientation: false
    }

    const [orientationChecked, setOrientationChecked] = useState(_orientationChecked)


    // INCORRECT DATA ↓↓↓
    const [genderOrientationDataError, setGenderOrientationDataError] = useState(false)
    // ON SUBMIT NEW GENDER OR ORIENTATION ↓↓↓
    const genderAndOrientationChecking = () => {

        if ( (typeof(genderChecked.maleGender) === 'boolean') && (typeof(genderChecked.femaleGender) === 'boolean') &&
                (typeof(orientationChecked.maleOrientation) === 'boolean') && (typeof(orientationChecked.femaleOrientation) === 'boolean') )
        {
            if ( (genderChecked.maleGender !== genderChecked.femaleGender) &&
                    (orientationChecked.maleOrientation === true || orientationChecked.femaleOrientation === true) )
            {
                setGenderOrientationDataError(false);
                return (false);
            }
            else
            {
                setGenderOrientationDataError(true);
                return(true);
            }
        }
        else
        {
            setGenderOrientationDataError(true);
            return(true);
        }
    }





// _-_-_-_-_-_-_-_-_- PROFILE DESCRIPTION SECTION -_-_-_-_-_-_-_-_-_


    const [description, setDescription] = useState('')

    const handleDescriptionChange = e => {
        setDescription(e.target.value)
    }
    
    
    // INCORRECT DATA ↓↓↓
    const [descriptionDataError, setDescriptionDataError] = useState(false)
    // ON SUBMIT NEW DESCRIPTION ↓↓↓
    const descriptionChecking = () => {

        if ( description !== '' )
        {
            if ( description.length <= 650 )
            {
                setDescriptionDataError(false);
                return (false);
            }
            else
            {
                setDescriptionDataError(true);
                return (true);
            }
        }
        setDescriptionDataError(true);
        return (true);
    }





// _-_-_-_-_-_-_-_-_- TAGS SECTION -_-_-_-_-_-_-_-_-_
    
    
    // USER TAGS ↓↓↓
    const _userTags = []
    
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
    // ON SUBMIT NEW TAGS ↓↓↓
    const userTagsChecking = () => {

        if ( userTags.length === 5 )
        {
            setUserTagsDataError(false);
            return (false);
        }
        else
        {
            setUserTagsDataError(true);
            return (true);
        }
    }





// _-_-_-_-_-_-_-_-_- SUBMIT COMPLEMENTARY INFORMATION -_-_-_-_-_-_-_-_-_


    const handleSubmitComplementaryInformation = e => {
        e.preventDefault();

        const userAgeInvalid = userAgeChecking();
        const genderAndOrientationInvalid = genderAndOrientationChecking();
        const descriptionInvalid = descriptionChecking();
        const userTagsInvalid = userTagsChecking();

        if (userAgeInvalid === false && genderAndOrientationInvalid === false &&
            descriptionInvalid === false && userTagsInvalid === false)
        {
                console.log('SUCCESS')
        }
        else
        {
            updateErrorAlert();
        }
    }





// _-_-_-_-_-_-_-_-_- DATA SECTION -_-_-_-_-_-_-_-_-_


    // INFORMATION DATA ↓↓↓
    const infoData = [
        {
            label: 'Nom',
            info: "Le pen"
        },
        {
            label: 'Prénom',
            info: "Jean-marie"
        },
        {
            label: 'Nom d\'utilisateur',
            info: "Hitler"
        },
        {
            label: 'E-mail',
            info: "test@gmail.com"
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


    const updateErrorAlert = () => {
        handleNewAlert({id: uuidv4(),
                        variant: "error",
                        information: "Oups ! Erreur..."})
    }





 
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
            <header>
                <Alert variant='warning' className='complete-profile-alert'>
                    <div className='complete-profile-logo'><LogoBis width='150' /></div>
                    <TiInfo className='mr-2' />
                    Veuillez compléter votre profil afin d'accéder aux autres services
                </Alert>
            </header>
            <div className='big-info-container centerElementsInPage'>
                <h2 className='personal-information' style={{color: '#0F5132'}}>Vos informations personelles</h2>
                <div className='complete-profile-validated-information-container'>
                    { infoData.map( data => {
                            return (
                                <ValidatedInfo
                                    key={uuidv4()}
                                    label={data.label}
                                    info={data.info}
                                />
                            )
                        })
                    }
                    <BsPersonCheck className='complete-profile-icons' color='#65746E' />
                </div>
                <hr className='hr-profile vf-hr'/>
                <Form className='complete-profile-form' onSubmit={handleSubmitComplementaryInformation}>
                    <h2 className='personal-information'>Date de naissance</h2>
                    <div className='info-container'>
                        <h4 className='complete-profile-indication'><BsInfoCircle className='mr-1' />Définissez votre date de naissance</h4>
                        <div className='d-flex align-items-center'>
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
                            <IoCalendarOutline className='complete-profile-icons'/>
                            {
                            dateDataError &&
                            <div className='error-update-profile-div'>
                                <Form.Text className='error-update-profile'>
                                    <RiErrorWarningLine/>
                                    Matcha est réservé aux majeurs
                                </Form.Text>
                            </div>
                            }
                        </div>
                    </div>
                    <hr className='hr-profile'/>
                    <h2 className='personal-information'>Genre et orientation</h2>
                    <div className='info-container'>
                        <h4 className='complete-profile-indication'><BsInfoCircle className='mr-1' />Définissez votre genre et orientation</h4>
                        <GenderAndOrientation
                            genderChecked={genderChecked}
                            setGenderChecked={setGenderChecked}
                            orientationChecked={orientationChecked}
                            setOrientationChecked={setOrientationChecked}
                        />
                        <IoMaleFemaleSharp className='complete-profile-icons'/>
                        {
                        genderOrientationDataError &&
                        <div className='error-update-profile-div'>
                            <Form.Text className='error-update-profile'>
                                <RiErrorWarningLine />
                                Complétez les informations
                            </Form.Text>
                        </div>
                        }
                    </div>
                    <hr className='hr-profile'/>
                    <h2 className='personal-information'>Description</h2>
                    <div className='info-container'>
                        <h4 className='complete-profile-indication'><BsInfoCircle className='mr-1' />Decrivez-vous en quelques lignes</h4>
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
                        <CgCardHearts className='complete-profile-icons'/>
                        {
                        descriptionDataError &&
                        <div className='error-update-profile-div'>
                            <Form.Text className='error-update-profile'>
                                <RiErrorWarningLine/>
                                Vos entrées ne sont pas valide
                            </Form.Text>
                        </div>
                        }
                    </div>
                    <hr className='hr-profile'/>
                    <h2 className='personal-information'>Tags</h2>
                    <div className='info-container'>
                        <h4 className='complete-profile-indication'><BsInfoCircle className='mr-1' />Sélectionnez 5 tags vous correspondant</h4>
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
                                        <CgCloseO className='tag-hide' />
                                    </div>
                                )
                            })
                            }
                        </div>
                        <FaSlackHash className='complete-profile-icons'/>
                        {
                        userTagsDataError &&
                        <div className='error-update-profile-div'>
                            <Form.Text className='error-update-profile'>
                                <RiErrorWarningLine/>
                                Veuillez sélectionner 5 tags de la liste
                            </Form.Text>
                        </div>
                        }
                    </div>
                    <hr className='hr-profile'/>
                    <h2 className='personal-information'>Localisation</h2>
                    <div className='info-container'>
                        <h4 className='complete-profile-indication'><BsInfoCircle className='mr-1' />Localisez vous</h4>
                        <div className='user-city-location-container'>
                            <h3 className='user-city-location'><IoPinSharp/>...</h3>
                            <Button variant="info" disabled={false} className='activate-geolocation'><TiLocation/>Activer la géolocalisation</Button>
                        </div>
                        <Location/>
                        <FaSearchLocation className='complete-profile-icons'/>
                        {
                        userTagsDataError &&
                        <div className='error-update-profile-div'>
                            <Form.Text className='error-update-profile'>
                                <RiErrorWarningLine />
                                Vos entrées ne sont pas valide
                            </Form.Text>
                        </div>
                        }
                    </div>
                    <hr className='hr-profile'/>
                    <Button variant='primary' className='complete-profile-button' type='submit'>
                        <RiSaveFill className='mr-1' />
                        Enregistrer mes informations
                    </Button>
                </Form>
            </div>
        </Fragment>
        
    )
}

export default CompleteProfile