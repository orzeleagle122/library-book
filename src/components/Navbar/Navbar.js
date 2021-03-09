import React from 'react';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './Navbar.elements';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
    return ( 
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Books Logo
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact={1} 
                                    offset={-80}
                                    // activeClass="active"
                                    >
                                About Us
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact={1} 
                                    offset={-80}
                                    // activeClass="active"
                                    >
                                Books
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact={1} 
                                    offset={-80}
                                    // activeClass="active"
                                    >
                                Contact
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact={1} 
                                    offset={-80}
                                    // activeClass="active"
                                    >
                                Sign in
                            </NavLinks>
                        </NavItem>                        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/register">
                            Register
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
     );
}
 
export default Navbar;