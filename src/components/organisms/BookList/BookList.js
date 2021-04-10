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
  // AvailableBook,
  // RiRadioButtonLineIcon,
  ButtonMobileWrapper,
  BookFavoriteMobile,
  RiHeartAddFillIcon,
  IoHeartDislikeSharpIcon,
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
    // favorite,
    author,
    genres,
    borrowed,
    isLogin,
    add,
    remove,
    id_user,
    available,
    getUserLogin,
    isFavorite,
    favoriteBooks,
    // item,
  } = props;
  // useEffect jesli zalogowany to od nowa pobierz listę

  // if (title.length > 5) {
  //   var smalltitle = title.substring(0, 5);
  // }
  console.log(isFavorite);
  const isLiked = favoriteBooks.findIndex((item2) => item2.id === id);
  const smalltitle = title.substring(0, 50);
  const smallauthor = author.substring(0, 50);

  return (
    <FavoriteItem available={available >= 1 ? true : false}>
      <BookImages>
        <Link to={{pathname: `/book/${id}/${title}`, query: {...props}}}>
          <BookImage src={`/assets/bookImages/book2.png`} alt={title} />
        </Link>
      </BookImages>
      <BookContent>
        <BookTitle>
          <Link
            to={{
              pathname: `/book/${id}/${title}`,
              query: {...props},
            }}
          >
            {title.length > 50 ? `${smalltitle}...` : title}
          </Link>
          <FavoriteHearthAdd
            add={
              favoriteBooks.findIndex((item2) => item2.id === id) >= 0
                ? true
                : false
            }
            onClick={() => {
              add(id_user, id);
            }}
          />
          <FavoriteHearthBroken
            add={
              favoriteBooks.findIndex((item2) => item2.id === id) >= 0
                ? true
                : false
            }
            onClick={() => {
              remove(id_user, id);
              // zwracam liste aktualych
              getUserLogin(localStorage.getItem("loginToken"));
            }}
          />
        </BookTitle>
        <Link to={{pathname: `/book/${id}/${title}`, query: {...props}}}>
          <BookAuthor>
            {author.length > 50 ? `${smallauthor}...` : author}
          </BookAuthor>
          <BookGenres>
            {genres.map((item) => (
              <Genres key={item.id}>{item.name}</Genres>
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
            {/* {!borrowed && (
              <AvailableBook available={available >= 1 ? true : false}>
                {available >= 1 ? "available" : "unavailable"}
              </AvailableBook>
            )} */}
          </Available>
        </Link>
        <ButtonMobileWrapper>
          <BookOrderButtonMobile
            // borrowed={borrowed ? 0 : 1}
            available={available >= 1 ? true : false}
          >
            Book
          </BookOrderButtonMobile>
          <BookFavoriteMobile available={available >= 1 ? true : false}>
            {/* jeśli to serce znajduje sie u uzytkownika w mapstatetopropt to daj serce usunięte */}
            {isLiked < 0 ? (
              <RiHeartAddFillIcon onClick={() => add(id_user, id)} />
            ) : (
              <IoHeartDislikeSharpIcon
                onClick={() => {
                  remove(id_user, id);
                  // zwracam liste aktualych
                  getUserLogin(localStorage.getItem("loginToken"));
                }}
              />
            )}
          </BookFavoriteMobile>
        </ButtonMobileWrapper>
      </BookContent>
      <BookOrderButton isLogin={isLogin} available={available >= 1}>
        <VerticalText>Borrow</VerticalText>
      </BookOrderButton>
    </FavoriteItem>
  );
};

BookList.propTypes = {
  id: PropTypes.number,
  id_user: PropTypes.number,
  title: PropTypes.string,
  smalltitle: PropTypes.string,
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
  favoriteBooks: PropTypes.array,
  available: PropTypes.number,
  getUserLogin: PropTypes.func.isRequired,
  item: PropTypes.node,
  isFavorite: PropTypes.node,
};

const mapStateToProps = ({user}) => {
  const {id, favoriteBooks} = user.userinfo;
  const id_user = id;
  return {
    id_user,
    favoriteBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (user_id, book_id) => dispatch(removeFavorite(user_id, book_id)),
    add: (user_id, id) => dispatch(addFavorite(user_id, id)),
    getUserLogin: (token) => dispatch(getUserLoginAction(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
