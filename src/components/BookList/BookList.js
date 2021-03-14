import React from 'react';
import {connect} from 'react-redux';
import {
    removeBook
} from '../../actions';

const BookList = ({title,publisher,about,author,genres,remove}) => {
    return ( 
        <article className="message is-info">
            <div className="message-header">
                {title} - {publisher}
                <button onClick={remove} className="delete"></button>
            </div>
            <div className="message-body">
                <strong>Author: {author}</strong><br/>
                <strong>Types: {genres}</strong><br/>                
                {about}
            </div>
        </article>
     );
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    //ownProps - all props transferred to component
    // console.log(ownProps);
    const {id}=ownProps;
    return {
        //action creator
        remove:()=>dispatch(removeBook(id)),
    }
}
 
export default connect(null,mapDispatchToProps)(BookList);