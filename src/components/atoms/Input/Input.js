import React from 'react';
import {
    StyledInput
} from './Input.elements';

const Input = ({children,placeholder}) => {
    return ( 
        <StyledInput placeholder={placeholder}>
            {children}
        </StyledInput>
     );
}
 
export default Input;