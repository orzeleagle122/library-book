import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import SearchBookList from '../components/SearchBookList/SearchBookList';
import {Input} from '../components/atoms/Input/Input';
import { 
    searchBook
} from '../actions';

const FavoritePageWrapper=styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
`;
    

const SearchPage = ({searchbooks,search}) => {
    
    const [searchFormValue,setSearchFormValue]=useState('');

    const handleChangeSearchFormValue=(e)=>{
        setSearchFormValue(e.target.value);
        search(e.target.value);
    }

    const map=searchbooks.map(item=><SearchBookList key={item.id} {...item}/>);

    return ( 
        <>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <Input className="input" 
                            type="text" 
                            placeholder="Search title book" 
                            onChange={handleChangeSearchFormValue} 
                            value={searchFormValue}
                        />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </p>
            </div> 

            {searchFormValue.length<=2&&(
                <div className="notification is-warning">
                        <FontAwesomeIcon icon={faExclamationCircle} /> Enter <strong>three</strong> characters to start searching for books.
                </div>
            )}
            <FavoritePageWrapper>{map}</FavoritePageWrapper>
                       
        </>
     );
}

const mapStateToProps=({searchbooks})=>{
    return {searchbooks}
}

const mapDispatchToProps=dispatch=>{
    return {
        search:(phrase)=>dispatch(searchBook(phrase))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchPage);