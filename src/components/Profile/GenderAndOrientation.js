import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const GenderAndOrientation = (props) => {

    return (
        <Fragment>
            <Form.Group as={Row} className="mb-2 d-flex align-items-center">
                <Form.Label column sm="2">
                    Je suis
                </Form.Label>
                <Col sm="10">
                    <Form.Check
                        inline
                        label="Un homme"
                        type='radio'
                        checked={props.genderChecked.maleGender}
                        onChange={props.onGenderChange}
                        name="maleGender"
                        id='maleGender'
                        className='gender-and-orientation'
                    />
                    <Form.Check
                        inline
                        label="Une femme"
                        type='radio'
                        checked={props.genderChecked.femaleGender}
                        onChange={props.onGenderChange}
                        name="femaleGender"
                        id='femaleGender'
                        className='gender-and-orientation'
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-1 d-flex align-items-center">
                <Form.Label column sm="2">
                    Je cherche
                </Form.Label>
                <Col sm="10">
                    <Form.Check
                        inline
                        label="Un homme"
                        type='checkbox'
                        defaultChecked={props.orientationChecked.maleOrientation}
                        onChange={props.onOrientationChange}
                        name="maleOrientation"
                        id='maleOrientation'
                        className='gender-and-orientation'
                    />
                    <Form.Check
                        inline
                        label="Une femme"
                        type='checkbox'
                        defaultChecked={props.orientationChecked.femaleOrientation}
                        onChange={props.onOrientationChange}
                        name="femaleOrientation"
                        id='femaleOrientation'
                        className='gender-and-orientation'
                    />
                </Col>
            </Form.Group>
        </Fragment>

    )

}

export default GenderAndOrientation