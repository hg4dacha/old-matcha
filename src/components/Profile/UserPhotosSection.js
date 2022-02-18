import React, { useState, useEffect, Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import { MdEdit } from "react-icons/md";
import { MdDelete } from 'react-icons/md';


import jeanma1 from '../../images/jeanma1.jpg'
import jeanma2 from '../../images/jeanma2.jpg'
import selfie from '../../images/selfie.jpg'
import selfie22 from '../../images/selfie22.jpg'


const UserPhotosSection = () => {

    return (
        <Fragment>
            <div className='user-photo-img-div'>
                <img src={selfie22} alt='2nd' className='user-photo-img' />
                <label className="user-photo-label" htmlFor="userPhoto2">
                    <MdEdit />
                    <input type="file" id="userPhoto2" className="user-photo-input" />
                </label>
                <div className='user-photo-number-and-delete-div'>
                    <span className='user-photo-number'>#2</span>
                    <button className='user-photo-delete'><MdDelete /></button>
                </div>
            </div>
            <div className='user-photo-img-div'>
                <img src={selfie} alt='3rd' className='user-photo-img' />
                <label className="user-photo-label" htmlFor="userPhoto3">
                    <MdEdit />
                    <input type="file" id="userPhoto3" className="user-photo-input" />
                </label>
                <div className='user-photo-number-and-delete-div'>
                    <span className='user-photo-number'>#3</span>
                    <button className='user-photo-delete'><MdDelete /></button>
                </div>
            </div>
            <div className='user-photo-img-div'>
                <img src={jeanma1} alt='4rd' className='user-photo-img' />
                <label className="user-photo-label" htmlFor="userPhoto4">
                    <MdEdit />
                    <input type="file" id="userPhoto4" className="user-photo-input" />
                </label>
                <div className='user-photo-number-and-delete-div'>
                    <span className='user-photo-number'>#4</span>
                    <button className='user-photo-delete'><MdDelete /></button>
                </div>
            </div>
            <div className='user-photo-img-div'>
                <img src={jeanma2} alt='5th' className='user-photo-img' />
                <label className="user-photo-label" htmlFor="userPhoto5">
                    <MdEdit />
                    <input type="file" id="userPhoto5" className="user-photo-input" />
                </label>
                <div className='user-photo-number-and-delete-div'>
                    <span className='user-photo-number'>#5</span>
                    <button className='user-photo-delete'><MdDelete /></button>
                </div>
            </div>
        </Fragment>
    )

}

export default UserPhotosSection;