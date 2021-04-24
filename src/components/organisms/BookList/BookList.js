import React, {useEffect} from "react";
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
import {removeFavorite, addFavorite, borrowBook} from "../../../actions";
import img from "../../../assets/img/book2.png";

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
    userFavorites,
    userBorrow,
    userinfo,
    borrow,
    // item,
  } = props;
  // useEffect jesli zalogowany to od nowa pobierz listę

  // if (title.length > 5) {
  //   var smalltitle = title.substring(0, 5);
  // }
  const isLiked = userFavorites.findIndex((item2) => item2.id === id);
  const isBorrowed = userBorrow
    .map((item) => item.id)
    .findIndex((item2) => item2 === id);

  useEffect(() => {});

  const smalltitle = title.substring(0, 50);
  const smallauthor = author.substring(0, 50);

  let textButton = "";
  if (isBorrowed < 0 && available >= 1) {
    textButton = "Borrow Book";
  } else if (isBorrowed >= 0 && available >= 1) {
    textButton = "Borrowed";
  } else {
    textButton = "Not Avaiable";
  }

  return (
    <FavoriteItem available={available >= 1 ? 1 : 0}>
      <BookImages>
        <Link to={{pathname: `/book/${id}/${title}`, query: {...props}}}>
          <BookImage src={img} alt={title} />
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
            onClick={() => {
              add(id_user, props);
            }}
            add={
              userFavorites.findIndex((item2) => item2.id === id) >= 0 ? 1 : 0
            }
          />
          <FavoriteHearthBroken
            onClick={() => {
              remove(id_user, props);
            }}
            add={
              userFavorites.findIndex((item2) => item2.id === id) >= 0 ? 1 : 0
            }
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
            available={available >= 1 ? 1 : 0}
            textButton={textButton}
            onClick={() => {
              borrow(userinfo, props);
            }}
          >
            {textButton}
          </BookOrderButtonMobile>
          <BookFavoriteMobile available={available >= 1 ? 1 : 0}>
            {/* jeśli to serce znajduje sie u uzytkownika w mapstatetopropt to daj serce usunięte */}
            {isLiked < 0 ? (
              <RiHeartAddFillIcon
                onClick={() => {
                  add(id_user, props);
                }}
              />
            ) : (
              <IoHeartDislikeSharpIcon
                onClick={() => {
                  remove(id_user, props);
                }}
              />
            )}
          </BookFavoriteMobile>
        </ButtonMobileWrapper>
      </BookContent>
      <BookOrderButton
        isLogin={isLogin}
        available={available >= 1}
        onClick={() => {
          borrow(userinfo, props);
        }}
        textButton={textButton}
      >
        <VerticalText>{textButton}</VerticalText>
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
  userFavorites: PropTypes.array,
  userBorrow: PropTypes.array,
  userinfo: PropTypes.object,
  available: PropTypes.number,
  borrow: PropTypes.func.isRequired,
  item: PropTypes.node,
  isFavorite: PropTypes.node,
};

const mapStateToProps = ({user, userFavorites, userBorrow}) => {
  const {id} = user.userinfo;
  const {userinfo} = user;
  const id_user = id;
  return {
    id_user,
    userinfo,
    userFavorites,
    userBorrow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (user_id, props) => dispatch(removeFavorite(user_id, props)),
    add: (user_id, props) => dispatch(addFavorite(user_id, props)),
    borrow: (user, props) => dispatch(borrowBook(user, props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
