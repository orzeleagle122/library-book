import React from 'react';
import {
    FavoriteItem,
    BookImages,
    FavoriteHearth,
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
    BookImage
} from './BookList.elements';
import harry from '../../../assets/img/harry.jpg';
import { Link } from 'react-router-dom';

const BookList = (props) => {

    return (        
                <FavoriteItem>
                    <BookImages>
                        <Link to={{ pathname: `/book/${props.title}`, query: {...props}}}> 
                            <BookImage src={`/assets/bookImages/${props.id}.jpg`} alt={props.title} />
                            <FavoriteHearth />
                            {/* <FavoriteHearthBroken /> */}                            
                        </Link>
                        <BookOrderButtonMobile>
                            Book                       
                        </BookOrderButtonMobile> 
                    </BookImages>
                    <BookContent>
                        <Link to={{ pathname: `/book/${props.title}`, query: {...props}}}> 
                            <BookTitle>
                                {props.title}
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
                                15 / 20 pieces of book
                            </Available> 
                        </Link>                       
                    </BookContent>                    
                    <BookOrderButton>
                        <VerticalText>
                           Borrow a book 
                        </VerticalText>                        
                    </BookOrderButton>
                </FavoriteItem>
     );
}
 
export default BookList;