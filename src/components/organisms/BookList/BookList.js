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
import {connect} from "react-redux";
import {removeFavorite, addFavorite} from "../../../actions";

const BookList = (props, {remove, add}) => {
  // useEffect jesli zalogowany to od nowa pobierz listę

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
        <BookTitle>
          <Link
            to={{
              pathname: `/book/${props.id}/${props.title}`,
              query: {...props},
            }}
          >
            {props.title}
          </Link>
          {props.favorite ? (
            <>
              <FavoriteHearthBroken onClick={() => remove()} />
            </>
          ) : (
            <>
              <FavoriteHearthAdd onClick={() => add()} />
            </>
          )}
        </BookTitle>
        <Link
          to={{pathname: `/book/${props.id}/${props.title}`, query: {...props}}}
        >
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
  remove: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (user_id, book_id) => dispatch(removeFavorite(user_id, book_id)),
    add: (user_id, book_id) => dispatch(addFavorite(user_id, book_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
