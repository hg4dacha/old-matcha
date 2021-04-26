import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { BiUser } from 'react-icons/bi';
import { VscHome } from 'react-icons/vsc';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import user from '../../images/user.png';

const Navbar1 = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/Main" className='navbar-brand'><Logo width='150' /></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/Main" className='nav-link'><VscHome className='iconsNavbar'/>Acceuil</Link>
                    <Link to="/Profile" className='nav-link'><BiUser className='iconsNavbar'/>Profil</Link>
                </Nav>
                <Nav>
                    <div className='centerElementsInPage' style={{flexDirection: 'row'}}>
                        <span className='popularity'><AiFillStar className='star'/>1425°</span>
                        <img src={user} className='profilePicture'/>
                        <NavDropdown title="username-269428" id="collasible-nav-dropdown">
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#"><AiOutlinePoweroff className='iconsNavbar'/>Déconnexion</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbar1