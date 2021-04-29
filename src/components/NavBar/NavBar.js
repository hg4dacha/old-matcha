import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import LogOut from '../LogOut/LogOut'
import { RiUser3Line } from 'react-icons/ri';
import { VscHome } from 'react-icons/vsc';
import { AiFillStar } from 'react-icons/ai';
import user from '../../images/user.png';

const Navbar$ = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/Main" className='navbar-brand'><Logo width='150' /></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/Main" className='nav-link'><VscHome className='iconsNavbar'/>Acceuil</NavLink>
                    <NavLink to="/Profile" className='nav-link'><RiUser3Line className='iconsNavbar'/>Profil</NavLink>
                </Nav>
                <Nav>
                    <div className='centerElementsInPage' style={{flexDirection: 'row'}}>
                        <span className='popularity'><AiFillStar className='star'/>1425°</span>
                        <img src={user} alt='user' className='profilePicture'/>
                        <NavDropdown title="username-269428" id="collasible-nav-dropdown">
                            <NavLink to="/Profile" className='dropdown-profile'>
                                <RiUser3Line className='icons-dropdown'/>Profil
                            </NavLink>
                            <NavDropdown.Divider />
                            <LogOut/>
                        </NavDropdown>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbar$