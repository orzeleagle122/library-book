import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import SearchBookList from '../components/SearchBookList/SearchBookList';

const SearchWrapper=styled.div`
    margin-right: 200px;
    margin-left:200px;
    margin-top:30px;
`;

const SearchPage = ({books}) => {
    
    const [searchFormValue,setSearchFormValue]=useState('');


    const handleChangeSearchFormValue=(e)=>{
        setSearchFormValue(e.target.value);
    }

    const titleFilter=books.filter(item=>{          
        if(searchFormValue.length>=3){
            return (
                item.title.includes(searchFormValue)>-1
            )
        }
    });

    const map=titleFilter.map(item=><SearchBookList key={item.id} {...item}/>);

    return ( 
        <SearchWrapper>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input" 
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
            {titleFilter.length<3&&(
                <div className="notification is-warning">
                        <FontAwesomeIcon icon={faExclamationCircle} /> Enter <strong>three</strong> characters to start searching for books.
                </div>
            )}
            {map}

            {/* {titleFilter.length<3?(
                    <div className="notification is-warning">
                    <FontAwesomeIcon icon={faExclamationCircle} /> Enter <strong>three</strong> characters to start searching for books.
            </div>
            ):(
                <>
                    {map}
                </>
            )}            */}
            
        </SearchWrapper>
     );
}

const mapStateToProps=({books})=>{
    return {books}
}

export default connect(mapStateToProps)(SearchPage);