import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { v4 as uuidv4 } from 'uuid';





const Carousel$ = ({UserPhotos}) => {

    const controls = UserPhotos.length === 1 ? false : true ;

    const nodeRef = React.useRef(null);

    return (
        <Carousel nodeRef={nodeRef} fade={true} interval={null} indicators={false} controls={controls} className='carousel-div'>

            {UserPhotos.map( data => {
                return (
                    <Carousel.Item ref={nodeRef} key={uuidv4()}>
                        <img className="d-block w-100" src={data} alt="Utilisateur" />
                    </Carousel.Item>
                )
            })}

        </Carousel>
    )
}


export default Carousel$;