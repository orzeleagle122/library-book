import React, {useEffect, useState} from "react";
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
  RecomendedWrapper,
} from "./DetailsBook.elements";
import {connect} from "react-redux";
import {
  addFavorite,
  getUserLoginAction,
  removeFavorite,
} from "../../../actions";
import OneBook from "../../molecules/OneBook/OneBook";
import axios from "axios";

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
  description,
}) => {
  const isLiked = favoriteBooks.findIndex((item2) => item2.id === id);
  console.log(isLiked);

  const [recommended, setRecommended] = useState([]);

  const recommendedBook = () => {
    axios
      .get("http://localhost:8080/api/book/search/random", {
        params: {number: 3},
      })
      .then((payload) => {
        setRecommended(payload.data);
      });
  };

  useEffect(() => {
    recommendedBook();
  }, []);

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
              {available >= 1 ? "Borrow Book" : "Not available"}
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
      <Description>{description}</Description>
      <Heading>Recommended:</Heading>
      <RecomendedWrapper>
        {recommended.map((item) => (
          <OneBook key={item.id} {...item} recommendedBook={recommendedBook} />
        ))}
      </RecomendedWrapper>
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
  description: PropTypes.string,
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
