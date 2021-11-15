import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import jeanma1 from '../../images/jeanma1.jpg'
import jeanma2 from '../../images/jeanma2.jpg'
import jeanma3 from '../../images/jeanma3.jpg'


const Carousel$ = () => {

    return (
        <Carousel fade interval={null} className='carousel-div'>

            <Carousel.Item>
                <img className="d-block w-100" src={jeanma1} alt="First photo" />
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={jeanma2} alt="Second photo" />
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={jeanma3} alt="Third photo" />
            </Carousel.Item>

        </Carousel>
    )
}


export default Carousel$;