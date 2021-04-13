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
  borrowBook,
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
  borrow,
  userinfo,
  // borrows,
}) => {
  const isLiked = favoriteBooks.findIndex((item2) => item2.id === id);
  // console.log(borrows);
  // const bor = borrows.book;
  // console.log(bor);
  // const isBorrowed = book.findIndex((item2) => item2.id === id);
  const isBorrowed = userinfo.borrows
    .map((item) => item.book.id)
    .findIndex((item2) => item2 === id);

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

  let textButton = "";
  if (isBorrowed < 0 && available >= 1) {
    textButton = "Borrow Book";
  } else if (isBorrowed >= 0 && available >= 1) {
    textButton = "Borrowed";
  } else {
    textButton = "Not Avaiable";
  }

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
            <ButtonBB
              onClick={() => {
                borrow(userinfo, id);
                getUserLogin(localStorage.getItem("loginToken"));
              }}
              isLogin={isLogin}
              available={available >= 1}
              textButton={textButton}
            >
              {/* {isBorrowed < 0 ? "niewypozyczona " : "wypozyczona "} */}

              {/* {isBorrowed < 0 ? "Borrow Book" : "Borrowed "}
              {available >= 1 ? "Available" : "Not available"} */}
              {textButton}
            </ButtonBB>
            <LikedButton isLogin={isLogin}>
              {isLiked < 0 ? (
                <RiHeartAddFillIcon onClick={() => add(userinfo.id, id)} />
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
  userinfo: PropTypes.array,
  favoriteBooks: PropTypes.array,
  // borrows: PropTypes.array,
  isLogin: PropTypes.bool,
  available: PropTypes.number,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  getUserLogin: PropTypes.func.isRequired,
  borrow: PropTypes.func.isRequired,
  description: PropTypes.string,
};

const mapStateToProps = ({user}) => {
  const {isLogin, userinfo} = user;
  const {
    id,
    favoriteBooks,
    // borrows
  } = user.userinfo;
  const user_id = id;
  return {
    isLogin,
    user_id,
    favoriteBooks,
    userinfo,
    // borrows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (user_id, id) => dispatch(addFavorite(user_id, id)),
    remove: (user_id, book_id) => dispatch(removeFavorite(user_id, book_id)),
    getUserLogin: (token) => dispatch(getUserLoginAction(token)),
    borrow: (user, book) => dispatch(borrowBook(user, book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsBook);
