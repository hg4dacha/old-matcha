import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../NavBar/NavBar';
import Chat from './Chat';
import Carousel from './Carousel';
import Button from 'react-bootstrap/Button'
import { MdBlock } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { AiFillStar } from 'react-icons/ai';

import jeanma1 from '../../images/jeanma1.jpg'
import jeanma2 from '../../images/jeanma2.jpg'
import jeanma3 from '../../images/jeanma3.jpg'
import selfie from '../../images/selfie.jpg'
import selfie22 from '../../images/selfie22.jpg'


const MemberProfile = () => {

    const UserPhotos = [selfie22, selfie, jeanma1, jeanma2, jeanma3]

    // LIKE DISLIKE ↓↓↓
    const [like, setLike] = useState(false)

    const likeDislike = () => {
        setLike(!like)
    }

    const heart = like ?
                  <Button variant="outline-danger" onClick={likeDislike} style={{boxShadow: '0px 0px 10px 3px white', borderColor: '#dc3545', backgroundColor: '#dc3545'}}>
                      <IoMdHeart className='like-heart' color='darkred' />
                  </Button> :
                  <Button variant="outline-danger" onClick={likeDislike} style={{boxShadow: 'none', borderColor: '#725551'}}>
                      <IoMdHeartEmpty className='like-heart' color='#725551' />
                  </Button> ;

    // FOR PICTURE SIZE ↓↓↓
    const [pictureSize, setPictureSize] = useState(null)

    useEffect( () => {
        const forPictureSize = document.querySelector('.profile-description').offsetHeight
        setPictureSize(forPictureSize)
    }, [])

    window.onresize = () => {
        setPictureSize(document.querySelector('.profile-description').offsetHeight)
    }


    return (
        <Fragment>
            <Navbar />
            <Chat />
            <div className='profile-description'>
                <div className='photos-part'>
                    <div className='photos-list'>
                        <Carousel UserPhotos={UserPhotos} forPictureSize={pictureSize} />
                    </div>
                </div>
                <div className='infos-part'>
                    <div className='infos-list'>
                        <div>
                            <span>username-269428</span>
                            <span className='popularity'><AiFillStar className='star'/>1425°</span>
                            {heart}
                        </div>
                        <div className='centerElementsInPage'><GoPrimitiveDot color='#009432' /><span>En ligne</span></div>
                        <div className='centerElementsInPage'><GoPrimitiveDot color='#353b48' /><span>Hors ligne</span></div>
                        <span>Nom</span>
                        <span>Prenom</span>
                        <span>Age</span>
                        <span>Sexe</span>
                        <span>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</span>
                        <Button variant="danger" className='centerElementsInPage' style={{width: 'fit-content'}} ><MdBlock/>Bloquer</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MemberProfile;