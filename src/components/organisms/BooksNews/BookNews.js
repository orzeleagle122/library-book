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
  ImgBestBook,
  StyledLink,
} from "./BookNews.elements";
import {connect} from "react-redux";
// import PropTypes from "prop-types";
import axios from "axios";
// import {routers} from "../../../data/routers";

import Heading from "../../atoms/Heading/Heading";

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

  console.log(randomBook[0]);

  return (
    <>
      <BookNewsWrapper>
        <TheBestBook>
          <ImgBestBook src={`/assets/bookImages/book2.png`} alt="alt" />
          {randomBook.slice(0, 1).map((item) => (
            <>
              <Heading>{item.title}</Heading>
              <Heading>{item.author}</Heading>
              <GenresWrapper>
                {item.genres.map((item2) => (
                  <Genre key={item2.id}>{item2.name}</Genre>
                ))}
              </GenresWrapper>
            </>
          ))}
        </TheBestBook>
        <ListBookWrapper>
          {randomBook.slice(0, 8).map((item) => (
            <Book key={item.id}>
              {/* <Link to={`/book/${item.id}/${item.title}`}> */}
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
                  <StyledLink to={`/book/${item.id}/${item.title}`}>
                    <ButtonView>View book</ButtonView>
                  </StyledLink>
                </ButtonWrapper>
              </BookWrapper>
              {/* </Link> */}
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
