import React from 'react';
import { Input } from '../components/atoms/Input/Input';
import GenreList from '../components/organisms/GenreList/GenreList';

const AddGenre = () => {
    return ( 
        <>
            <Input placeholder="Enter here genre type to add"/>

            <GenreList/>

        </>
     );
}
 
export default AddGenre;