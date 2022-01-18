import React from 'react';
import Badge from 'react-bootstrap/Badge'
import { FaSlackHash } from "react-icons/fa";





const TagsBadge = (props) => {

    const badgeStyle = {
        backgroundColor: '#A159F5',
        color: 'whitesmoke',
        width: 'fit-content',
        margin: '1%',
        padding: '5px 10px',
        borderRadius: '50px'
    }

    return (
        <Badge style={badgeStyle} className='centerElementsInPage'>
            <FaSlackHash/>
            {props.tag}
        </Badge>
    )
}

export default TagsBadge;