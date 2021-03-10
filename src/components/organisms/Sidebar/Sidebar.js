import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarButton from '../../atoms/NavbarButton/NavbarButton';
import {
    Wrapper,
    LogoLink,
    LinkList,
    LogoutButton,
    SpanText,
    BsFillPersonFillIcon, 
    BsFillBookmarkFillIcon,
    BsSearchIcon,
    BsHouseDoorFillIcon
} from './Sidebar.elements';

const Sidebar = () => {
    return ( 
        <Wrapper>
            <LogoLink>
                {/* <LogoLink to='/'> */}
            </LogoLink>
            <LinkList>
                <li>
                    <NavLink exact to='/'>
                        <NavbarButton ><BsHouseDoorFillIcon/><SpanText>Home</SpanText> </NavbarButton>
                    </NavLink>                    
                </li>
                <li>
                    <NavLink exact to='/search'>
                        <NavbarButton><BsSearchIcon/><SpanText>Explore</SpanText></NavbarButton>
                    </NavLink> 
                </li>
                <li>
                    <NavLink exact to='/borrowed'>
                        <NavbarButton><BsFillBookmarkFillIcon/><SpanText>Trips</SpanText></NavbarButton>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/login'>
                        <NavbarButton ><BsFillPersonFillIcon/><SpanText>Profile</SpanText></NavbarButton>
                    </NavLink>
                </li>
            </LinkList>
            <LogoutButton>
                <NavLink exact to='/logout'>
                    <NavbarButton ><BsHouseDoorFillIcon/><SpanText>Logout</SpanText> </NavbarButton>
                </NavLink> 
            </LogoutButton>
        </Wrapper>
     );
}
 
export default Sidebar;