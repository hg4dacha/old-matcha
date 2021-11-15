import React, { Fragment } from 'react';
import Navbar from '../NavBar/NavBar';
import Chat from './Chat';
import Carousel from './Carousel';
import Button from 'react-bootstrap/Button'
import { MdBlock } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";



const MemberProfile = () => {

    return (
        <Fragment>
            <Navbar />
            <Chat />
            <div className='profile-description'>
                <div className='photos-part'>
                    <div className='photos-list'>
                        <span>username-269428</span>
                        <div><GoPrimitiveDot/><span>En ligne</span></div>
                        <Carousel/>
                    </div>
                </div>
                <div className='infos-part'>
                    <div className='infos-list'>
                        <span>Nom</span>
                        <span>Prenom</span>
                        <span>Age</span>
                        <span>Sexe</span>
                        <span>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</span>
                        <Button variant="danger"><MdBlock/>Bloquer</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MemberProfile;