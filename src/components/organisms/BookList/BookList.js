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
    // item,
  } = props;
  // useEffect jesli zalogowany to od nowa pobierz listę
  // console.log(props);

  // if (title.length > 5) {
  //   var smalltitle = title.substring(0, 5);
  // }

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
            {/* {smalltitle} */}
            {/* {title.length < 10 ? {title} : `${title}...`} */}
            {/* {title.substring(0, 5)} */}
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
              {/* {console.log(id)}
              {console.log(item)} */}

              {/* {id !== item.id && ( */}
              <>
                <FavoriteHearthAdd
                  onClick={() => {
                    add(id_user, props);
                  }}
                />
              </>
              {/* )} */}
            </>
          )}
          {/* {!borrowed && (
            <RiRadioButtonLineIcon available={available >= 1 ? true : false} />
          )} */}
        </BookTitle>
        <Link to={{pathname: `/book/${id}/${title}`, query: {...props}}}>
          <BookAuthor>{author}</BookAuthor>
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
            <RiHeartAddFillIcon />
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
  available: PropTypes.number,
  getUserLogin: PropTypes.func.isRequired,
  item: PropTypes.node,
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
