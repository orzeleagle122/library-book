import React from 'react';
import {connect} from 'react-redux';

const SearchBookList = ({title,year,about,author,types}) => {   
    return ( 
        <article className="message is-info">
            <div className="message-header">
                {title} - {year}
            </div>
            <div className="message-body">
                <strong>Author: {author}</strong><br/>
                <strong>Types: {types}</strong><br/>                
                {about}
            </div>
        </article>
     );
}

 
export default connect(null,null)(SearchBookList);