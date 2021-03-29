import React from "react";
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
  FavoriteHearthAdd,
} from "./BookList.elements";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const BookList = (props) => {
  return (
    <FavoriteItem>
      <BookImages>
        <Link
          to={{pathname: `/book/${props.id}/${props.title}`, query: {...props}}}
        >
          <BookImage
            src={`/assets/bookImages/${props.id}.jpg`}
            alt={props.title}
          />
        </Link>
        <BookOrderButtonMobile>Book</BookOrderButtonMobile>
      </BookImages>
      <BookContent>
        <Link
          to={{pathname: `/book/${props.id}/${props.title}`, query: {...props}}}
        >
          <BookTitle>
            {props.title}

            {props.favorite ? (
              <>
                <FavoriteHearthBroken />
              </>
            ) : (
              <>
                <FavoriteHearthAdd />
              </>
            )}
          </BookTitle>
          <BookAuthor>{props.author}</BookAuthor>
          <BookGenres>
            <Genres>#Fantasy</Genres>
            <Genres>#Romanse</Genres>
          </BookGenres>
          <BookInfo>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.  */}
          </BookInfo>
          <Available>
            {props.borrowed && (
              <>
                (here space for status: borrowed or close) <br />
                <br />
              </>
            )}
            {!props.borrowed && <>status: available or unavailable</>}
          </Available>
        </Link>
      </BookContent>
      <BookOrderButton isLogin={props.isLogin}>
        <VerticalText>Borrow a book</VerticalText>
      </BookOrderButton>
    </FavoriteItem>
  );
};

BookList.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  isLogin: PropTypes.bool.isRequired,
  favorite: PropTypes.bool.isRequired,
  borrowed: PropTypes.node,
};

// const mapStateToProps=({user})=>{
//     const {isLogin}=user;
//     return {
//         isLogin
//     }
// }

export default BookList;
