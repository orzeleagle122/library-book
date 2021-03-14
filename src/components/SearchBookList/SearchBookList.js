import React from 'react';
import {connect} from 'react-redux';

const SearchBookList = ({title,genres,about,author,amount}) => {   
    return ( 
        <article className="message is-info">
            <div className="message-header">
                {title} - {amount} copies
            </div>
            <div className="message-body">
                <strong>Author: {author}</strong><br/>
                <strong>Types: {genres}</strong><br/>                
                {about}
            </div>
        </article>
     );
}

 
export default connect(null,null)(SearchBookList);