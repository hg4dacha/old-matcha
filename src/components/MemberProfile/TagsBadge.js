import React from 'react';
import Badge from 'react-bootstrap/Badge'
import { FaSlackHash } from "react-icons/fa";





const TagsBadge = (props) => {

    const badgeStyle = {
        color: 'rgb(1, 1, 3)',
        width: 'fit-content',
        margin: '1%',
        padding: '5px 10px'
    }

    return (
        <Badge style={badgeStyle} className='centerElementsInPage'>
            <FaSlackHash/>
            {props.tag}
        </Badge>
    )
}

export default TagsBadge;