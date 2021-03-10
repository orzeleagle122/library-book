import React from 'react';
import {
    StyledButton
} from './NavbarButton.elements';


const NavbarButton = ({children}) => {
    return ( 
        <StyledButton>
            {children}
        </StyledButton>
     );
}
 
export default NavbarButton;