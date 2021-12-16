import React, { Fragment, useEffect, useState } from 'react';
import Chat from './Chat';
import Carousel from './Carousel';
import TagsBadge from './TagsBadge';
import Button from 'react-bootstrap/Button'
import { MdBlock } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { IoMdHeartEmpty, IoMdHeart, IoMdFlashlight } from "react-icons/io";
import { AiFillStar } from 'react-icons/ai';
import { GiPositionMarker } from 'react-icons/gi';
import { TiWarningOutline } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import { RiUser3Line } from "react-icons/ri";
import { FiCalendar } from "react-icons/fi";
import { IoMaleFemaleSharp } from "react-icons/io5";





import jeanma1 from '../../images/jeanma1.jpg'
import jeanma2 from '../../images/jeanma2.jpg'
import jeanma3 from '../../images/jeanma3.jpg'
import selfie from '../../images/selfie.jpg'
import selfie22 from '../../images/selfie22.jpg'



const AccessProfile = () => {

    const UserPhotos = [selfie22, selfie, jeanma1, jeanma2, jeanma3]

    // LIKE DISLIKE ↓↓↓
    const [like, setLike] = useState(false)

    const likeDislike = () => {
        setLike(!like)
    }

    const heart = like ?
                  <Button variant="offline-danger" onClick={likeDislike} className='button-like act' style={{boxShadow: '0px 0px 10px 3px white', borderColor: '#dc3545', backgroundColor: '#dc3545'}}>
                      <IoMdHeart className='like-heart' color='darkred' />
                  </Button> :
                  <Button variant="offline-danger" onClick={likeDislike} className='button-like dis' style={{boxShadow: 'none', borderColor: '#725551'}}>
                      <IoMdHeartEmpty className='like-heart' color='#725551' />
                  </Button> ;

    // INLINE OFFLINE ↓↓↓
    const [inline, setInline] = useState(false)

    // const inlineOffline = () => {
    //     setInline(!inline)
    // }

    const connectionState = inline ?
                            <small className='user-connection-status'><GoPrimitiveDot color='#009432' />En ligne</small> :
                            <small className='user-connection-status'><GoPrimitiveDot color='#353b48' />
                                Hors ligne<span className='last-connection'>&nbsp;&nbsp;Dernière connexion le 25/02/22 à 13h46</span>
                            </small> ;

    // FOR PICTURE SIZE ↓↓↓
    const [pictureSize, setPictureSize] = useState(null)

    useEffect( () => {
        setPictureSize(document.querySelector('.profile-description').offsetHeight)
    }, [])

    window.onresize = () => {
        setPictureSize(document.querySelector('.profile-description').offsetHeight)
    }

    // BLUR WHEN OPENING CHAT ↓↓↓
    const [chatState, setChatState] = useState(false)

    const blurFunc = (chatState) => {
        
        setChatState(chatState)

        document.querySelector('.profile-description').classList.contains('profile-blurring') ?
        document.querySelector('.profile-description').classList.remove('profile-blurring') :
        document.querySelector('.profile-description').classList.add('profile-blurring') ;
    }



    return (
        <Fragment>
            <Chat onChatChange={blurFunc} />
            <div className='profile-description'>
                <div className='photos-part'>
                    <div className='photos-list'>
                        <Carousel UserPhotos={UserPhotos} forPictureSize={pictureSize} />
                    </div>
                </div>
                <div className='infos-part'>
                    <div className='infos-list'>
                        <div className='username-global-div'>
                            <div className='username-and-popularity'>
                                <h1 className='username-member-profile'>username-269428</h1>
                                <span className='popularity popularity-member-profile'><AiFillStar className='star'/>1425°</span>
                            </div>
                            {connectionState}
                            {heart}
                        </div>
                        <div>
                            <div className='alignment'><RiUser3Line color='#0a3d62'/>Michel Dupont</div>
                            <div className='alignment'><FiCalendar color='#0a3d62'/>36 ans</div>
                            <div className='alignment'><GiPositionMarker color='#0a3d62'/>Paris, Ile-de-France (France)</div>
                            <div className='alignment'><IoMaleFemaleSharp color='#0a3d62'/>Je suis<span className='bold'>&nbsp;un homme</span></div>
                            <div className='alignment'><BiSearch color='#0a3d62'/>Je cherche<span className='bold'>&nbsp;une femme</span></div>
                        </div>
                        <div className='about-me-div'>
                            <div className='alignment'><IoMdFlashlight style={{transform: 'rotate(90deg)'}}/><span>À propos de moi</span></div>
                            <div className='tags-badge'>
                                <TagsBadge tag='#gourmand' />
                                <TagsBadge tag='#curieux' />
                                <TagsBadge tag='#intello' />
                                <TagsBadge tag='#codeur' />
                                <TagsBadge tag='#dormeur' />
                            </div>
                            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                        </div>
                        <div className='danger-buttons-div'>
                            <Button variant="danger" className='danger-buttons'><MdBlock style={{marginRight: '3px'}}/>Bloquer</Button>
                            <Button variant="danger" className='danger-buttons'><TiWarningOutline style={{marginRight: '3px'}}/>Signaler</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AccessProfile;