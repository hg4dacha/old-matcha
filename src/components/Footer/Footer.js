import React from 'react'

const Footer = () => {

    const currentYear = new Date();

    return (
        <footer className='bold'>
            {`© ${currentYear.getFullYear()} Matcha - Project developed by hgadacha`}
        </footer>
    )
}

export default Footer