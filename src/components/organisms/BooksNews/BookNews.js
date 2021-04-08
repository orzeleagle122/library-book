import React, {useEffect, useState} from "react";
import {
  BookNewsWrapper,
  TheBestBook,
  ListBookWrapper,
  Book,
  BookWrapper,
  BookImg,
  TinyTittle,
  GenresWrapper,
  Genre,
  ButtonView,
  TinyAuthor,
  ButtonWrapper,
} from "./BookNews.elements";
import {connect} from "react-redux";
// import PropTypes from "prop-types";
import axios from "axios";
import {routers} from "../../../data/routers";
// import {Link} from "react-router-dom";

const BookNews = () => {
  const [randomBook, setRandomBook] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/book/search/random", {
        params: {number: 8},
      })
      .then((payload) => {
        setRandomBook(payload.data);
      });
  }, []);

  return (
    <>
      <BookNewsWrapper>
        <TheBestBook>tutaj bedzie promowana książka :D </TheBestBook>
        <ListBookWrapper>
          {randomBook.slice(0, 8).map((item) => (
            <Book key={item.id}>
              <BookWrapper>
                <BookImg>
                  <img src={`/assets/bookImages/book2.png`} alt={item.title} />
                </BookImg>
                <TinyTittle>{item.title}</TinyTittle>
                <TinyAuthor>{item.author}</TinyAuthor>
                <GenresWrapper>
                  {item.genres.map((item2) => (
                    <Genre key={item2.id}>{item2.name}</Genre>
                  ))}
                </GenresWrapper>

                <ButtonWrapper>
                  <ButtonView asto={routers.book}>View book</ButtonView>
                </ButtonWrapper>
              </BookWrapper>
            </Book>
          ))}
        </ListBookWrapper>
      </BookNewsWrapper>
    </>
  );
};

const mapDispathToProps = () => {
  return {};
};

export default connect(null, mapDispathToProps)(BookNews);
