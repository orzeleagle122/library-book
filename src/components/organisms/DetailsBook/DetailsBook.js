import React from "react";
import PropTypes from "prop-types";
import Heading from "../../atoms/Heading/Heading";
import img from "../../../assets/img/book2.png";
import {
  DetailsWrapper,
  BookImages,
  BookContent,
  HeadingAuthor,
  BookGenres,
  Genres,
  Publisherspan,
  Description,
  ImgBook,
  ButtonBB,
  ButtonsWrapper,
  LikedButton,
  RiHeartAddFillIcon,
  IoHeartDislikeSharpIcon,
} from "./DetailsBook.elements";
import {connect} from "react-redux";
import {
  addFavorite,
  getUserLoginAction,
  removeFavorite,
} from "../../../actions";

const DetailsBook = ({
  title,
  author,
  genres,
  publisher,
  available,
  isLogin,
  id,
  add,
  user_id,
  favoriteBooks,
  getUserLogin,
  remove,
}) => {
  console.log(favoriteBooks);
  console.log(id);

  const isLiked = favoriteBooks.findIndex((item2) => item2.id === id);
  console.log(isLiked);

  return (
    <>
      <DetailsWrapper>
        <BookImages>
          <ImgBook src={img} alt="img" />
        </BookImages>
        <BookContent>
          <Heading>{title}</Heading>
          <HeadingAuthor>{author}</HeadingAuthor>
          <BookGenres>
            {genres.map((item) => (
              <Genres key={item.id}>{item.name}</Genres>
            ))}
          </BookGenres>
          <Publisherspan>Publisher: {publisher}</Publisherspan>
          <br />
          <ButtonsWrapper>
            <ButtonBB isLogin={isLogin} available={available >= 1}>
              Borrow Book
            </ButtonBB>
            <LikedButton isLogin={isLogin}>
              {isLiked < 0 ? (
                <RiHeartAddFillIcon onClick={() => add(user_id, id)} />
              ) : (
                <IoHeartDislikeSharpIcon
                  onClick={() => {
                    remove(user_id, id);
                    // zwracam liste aktualych
                    getUserLogin(localStorage.getItem("loginToken"));
                  }}
                />
              )}
            </LikedButton>
          </ButtonsWrapper>
        </BookContent>
      </DetailsWrapper>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
        suscipit nunc. Etiam sed neque nibh. Nullam in malesuada nisl, nec
        ullamcorper erat. Proin faucibus turpis a libero consectetur, ac posuere
        augue volutpat. Cras suscipit consequat urna, in ultrices tellus porta
        lacinia. Duis massa felis, luctus nec pretium et, aliquet vel ligula.
        Fusce venenatis nunc eget augue fermentum aliquet. Maecenas sem magna,
        tincidunt sit amet laoreet id, fringilla a arcu. Pellentesque ut dapibus
        libero. Sed at est id nunc ultricies ornare ac hendrerit nunc. Ut quis
        est libero. Donec posuere erat a condimentum consequat. Aliquam
        facilisis auctor finibus. Cras lacinia mauris eget hendrerit tempus.
      </Description>
    </>
  );
};

DetailsBook.propTypes = {
  id: PropTypes.number,
  user_id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  publisher: PropTypes.string,
  genres: PropTypes.array,
  favoriteBooks: PropTypes.array,
  isLogin: PropTypes.bool,
  available: PropTypes.number,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  getUserLogin: PropTypes.func.isRequired,
};

const mapStateToProps = ({user}) => {
  const {isLogin} = user;
  const {id, favoriteBooks} = user.userinfo;
  const user_id = id;
  return {
    isLogin,
    user_id,
    favoriteBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (user_id, id) => dispatch(addFavorite(user_id, id)),
    remove: (user_id, book_id) => dispatch(removeFavorite(user_id, book_id)),
    getUserLogin: (token) => dispatch(getUserLoginAction(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsBook);
