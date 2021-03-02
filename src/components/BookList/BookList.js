import React from 'react';

const BookList = ({title,year,about,author,types}) => {
    return ( 
        <article className="message is-info">
            <div className="message-header">
                {title} - {year}
                <button className="delete"></button>
            </div>
            <div className="message-body">
                <strong>Author: {author}</strong><br/>
                <strong>Types: {types}</strong><br/>                
                {about}
            </div>
        </article>
     );
}
 
export default BookList;