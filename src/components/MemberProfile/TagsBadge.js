import React from 'react';
import Badge from 'react-bootstrap/Badge'





const TagsBadge = (props) => {

    const badgeStyle = {
        backgroundColor: '#8c7ae6',
        color: 'whitesmoke',
        width: 'fit-content',
        margin: '1%'
    }

    return (
        <Badge style={badgeStyle}>
            {props.tag}
        </Badge>
    )
}

export default TagsBadge;