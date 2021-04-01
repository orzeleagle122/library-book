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
  AvailableBook,
} from "./BookList.elements";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
  removeFavorite,
  addFavorite,
  getUserLoginAction,
} from "../../../actions";

const BookList = (props) => {
  const {
    id,
    title,
    favorite,
    author,
    genres,
    borrowed,
    isLogin,
    add,
    remove,
    id_user,
    available,
    getUserLogin,
  } = props;

  // useEffect jesli zalogowany to od nowa pobierz listę

  return (
    <FavoriteItem>
      <BookImages>
        <Link to={{pathname: `/book/${id}/${title}`, query: {...props}}}>
          <BookImage src={`/assets/bookImages/${id}.jpg`} alt={title} />
        </Link>
        <BookOrderButtonMobile>Book</BookOrderButtonMobile>
      </BookImages>
      <BookContent>
        <BookTitle>
          <Link
            to={{
              pathname: `/book/${id}/${title}`,
              query: {...props},
            }}
          >
            {title}
          </Link>
          {favorite ? (
            <>
              <FavoriteHearthBroken
                onClick={() => {
                  remove(id_user, id);
                  getUserLogin(localStorage.getItem("loginToken"));
                }}
              />
            </>
          ) : (
            <>
              <FavoriteHearthAdd
                onClick={() => {
                  add(id_user, props);
                }}
              />
            </>
          )}
        </BookTitle>
        <Link to={{pathname: `/book/${id}/${title}`, query: {...props}}}>
          <BookAuthor>{author}</BookAuthor>
          <BookGenres>
            {genres.map((item) => (
              <Genres key={item.id}>{item.genre}</Genres>
            ))}
          </BookGenres>
          <BookInfo>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.  */}
          </BookInfo>
          <Available>
            {borrowed && (
              <>
                (status: borrowed/close) <br />
                <br />
              </>
            )}
            {!borrowed && (
              <AvailableBook available={available >= 1 ? true : false}>
                {available >= 1 ? "available" : "unavailable"}
              </AvailableBook>
            )}
          </Available>
        </Link>
      </BookContent>
      {available >= 1 && (
        <BookOrderButton isLogin={isLogin}>
          <VerticalText>Borrow a book</VerticalText>
        </BookOrderButton>
      )}
    </FavoriteItem>
  );
};

BookList.propTypes = {
  id: PropTypes.number,
  id_user: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  isLogin: PropTypes.bool,
  favorite: PropTypes.bool,
  borrowed: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.node,
    PropTypes.any,
  ]),
  remove: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  genres: PropTypes.array,
  available: PropTypes.number,
  getUserLogin: PropTypes.func.isRequired,
};

const mapStateToProps = ({user}) => {
  const {id} = user.userinfo;
  const id_user = id;
  return {
    id_user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (user_id, book_id) => dispatch(removeFavorite(user_id, book_id)),
    add: (user_id, props) => dispatch(addFavorite(user_id, props)),
    getUserLogin: (token) => dispatch(getUserLoginAction(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
