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
import {addFavorite, removeFavorite, borrowBook} from "../../../actions";
import OneBook from "../../molecules/OneBook/OneBook";
import axios from "axios";
import {goTop} from "../../../data/function";
import {API} from "../../../actions";

const DetailsBook = (props) => {
  const {
    title,
    author,
    genres,
    publisher,
    available,
    isLogin,
    id,
    add,
    user_id,
    userFavorites,
    remove,
    description,
    borrow,
    userinfo,
    userBorrow = [],
  } = props;

  const isLiked = userFavorites.findIndex((item2) => item2.id === id);
  const isBorrowed = userBorrow
    .map((item) => item.id)
    .findIndex((item2) => item2 === id);

  const [recommended, setRecommended] = useState([]);

  const recommendedBook = () => {
    axios
      .get(API + "/book/search/random", {
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
    goTop();
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
                borrow(userinfo, props);
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
                <RiHeartAddFillIcon
                  onClick={() => {
                    add(userinfo.id, props);
                  }}
                />
              ) : (
                <IoHeartDislikeSharpIcon
                  onClick={() => {
                    remove(user_id, props);
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
  userinfo: PropTypes.object,
  userFavorites: PropTypes.array,
  userBorrow: PropTypes.array,
  isLogin: PropTypes.bool,
  available: PropTypes.number,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  getUserLogin: PropTypes.func.isRequired,
  borrow: PropTypes.func.isRequired,
  description: PropTypes.string,
};

const mapStateToProps = ({user, userFavorites, userBorrow}) => {
  const {isLogin, userinfo} = user;
  const {id} = user.userinfo;
  const user_id = id;
  return {
    isLogin,
    user_id,
    userFavorites,
    userinfo,
    userBorrow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (user_id, props) => dispatch(addFavorite(user_id, props)),
    remove: (user_id, props) => dispatch(removeFavorite(user_id, props)),
    borrow: (user, props) => dispatch(borrowBook(user, props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsBook);
