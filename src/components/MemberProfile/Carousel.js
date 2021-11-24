import React, { Fragment, useState } from 'react';




const Carousel$ = ({UserPhotos}) => {


    const [photo, setPhoto] = useState(0)

    const previousImg = () => {
        photo > 0 && photo <= (UserPhotos.length - 1) ?
        setPhoto(photo - 1) :
        setPhoto(UserPhotos.length - 1) ;
    }

    const nextImg = () => {
        photo >= 0 && photo < (UserPhotos.length - 1) ?
        setPhoto(photo + 1) :
        setPhoto(0) ;
    }

    const buttons = UserPhotos.length === 1 ?
                    null                    :
                    <Fragment>
                        <button onClick={previousImg} className="carousel-control-prev btn-prev-nxt" type="button" data-bs-target="#carouselUserImage" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button onClick={nextImg} className="carousel-control-next btn-prev-nxt" type="button" data-bs-target="#carouselUserImage" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </Fragment>             ;
    

    
    return (
        <div id="carouselUserImage" className="carousel slide carousel-div" data-bs-ride="carousel" data-interval="2000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={UserPhotos[photo]} className="d-block w-100 img-fluid" alt="user"/>
                </div>
            </div>
            {buttons}
        </div>
    )
}


export default Carousel$;