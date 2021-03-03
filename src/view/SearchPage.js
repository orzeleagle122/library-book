import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import SearchBookList from '../components/SearchBookList/SearchBookList';
import {
    searchBook
} from '../actions';

const SearchWrapper=styled.div`
    margin-right: 200px;
    margin-left:200px;
    margin-top:30px;
`;

const SearchPage = ({books}) => {
    const [valueForm,setValueForm]=useState("");

    const onChangeFormValue=(e)=>{
        setValueForm(e.target.value);
    }

    console.log(books);

    return ( 
        <SearchWrapper>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input" 
                            type="text" 
                            placeholder="Search book" 
                            onChange={onChangeFormValue} 
                            value={valueForm}
                        />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </p>
            </div>
            

        </SearchWrapper>
     );
}

const mapStateToProps=({books})=>{
    return {books}
}

export default connect(mapStateToProps)(SearchPage);