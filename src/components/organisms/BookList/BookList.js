import React from 'react';
import {
    FavoriteItem,
    BookImages,
    FavoriteHearthBroken,
    BookOrderButtonMobile,
    BookContent,
    BookTitle,
    BookAuthor,
    BookGenres,
    Genres,
    BookInfo,
    Available,
    BookOrderButton,
    VerticalText,
    BookImage,
    FavoriteHearthAdd
} from './BookList.elements';
import { Link } from 'react-router-dom';

const BookList = (props) => {
    // console.log("to: "+props.borrowed);
    return (        
                <FavoriteItem>
                    <BookImages>
                        <Link to={{ pathname: `/book/${props.id}/${props.title}`, query: {...props}}}> 
                            <BookImage src={`/assets/bookImages/${props.id}.jpg`} alt={props.title} />                        
                        </Link>
                        <BookOrderButtonMobile>
                            Book                       
                        </BookOrderButtonMobile> 
                    </BookImages>
                    <BookContent>
                        <Link to={{ pathname: `/book/${props.id}/${props.title}`, query: {...props}}}> 
                            <BookTitle>
                                {props.title} 
                                
                                {props.favorite ? (
                                    <>                                        
                                        <FavoriteHearthBroken /> 
                                    </>
                                ):(
                                    <>
                                        <FavoriteHearthAdd/>    
                                    </>
                                )}
                            </BookTitle>
                            <BookAuthor>
                                {props.author}
                            </BookAuthor>
                            <BookGenres>
                                <Genres>
                                #Fantasy 
                                </Genres>
                                <Genres>
                                    #Romanse
                                </Genres>
                            </BookGenres>
                            <BookInfo>
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.  */}
                            </BookInfo>
                            <Available>
                                {props.borrowed && (
                                    <>
                                        (here space for status: borrowed or close) <br/><br/>
                                    </>
                                )}
                                {!props.borrowed && (
                                    <>
                                        status: available or unavailable
                                    </>
                                )}                                
                            </Available> 
                        </Link>                       
                    </BookContent>                    
                    <BookOrderButton isLogin={props.isLogin}>
                        <VerticalText >
                           Borrow a book 
                        </VerticalText>                        
                    </BookOrderButton>
                </FavoriteItem>
     );
}

// const mapStateToProps=({user})=>{
//     const {isLogin}=user;
//     return {
//         isLogin
//     }
// }
 
export default BookList;