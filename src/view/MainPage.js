import React, {useEffect, useState} from "react";
import {Input} from "../components/atoms/Input/Input";
import Heading from "../components/atoms/Heading/Heading";
import styled from "styled-components";
import {bookPopular} from "../data/bookPopular.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {carouselSettings} from "../data/carouselSettings";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {searchBook, cleanErrors} from "../actions";

import "./slider-arrow.css";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import BookList from "../components/organisms/BookList/BookList";
import PropTypes from "prop-types";

// import ClearErros from '../hoc/ClearErrors';

const BookPopularWrapper = styled.div`
  max-width: 200px;
  min-width: 200px;
  height: 300px;
  /* min-width: 200px;
    min-height:300px; */
  margin-right: 10px;
  margin-bottom: 20px;
`;

const FavoritePageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const MainPage = ({searchbooks, search, isLogin, clean}) => {
  useEffect(() => {
    return () => clean();
  }, []);

  const [searchFormValue, setSearchFormValue] = useState("");

  const handleChangeSearchFormValue = (e) => {
    setSearchFormValue(e.target.value);
    search(e.target.value);
  };

  const map = searchbooks.map((item) => (
    <BookList key={item.id} {...item} isLogin={isLogin} />
  ));

  return (
    <>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <Input
            className="input"
            type="text"
            placeholder="Search title book"
            onChange={handleChangeSearchFormValue}
            value={searchFormValue}
          />
          <label className="container">
            title
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            author
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            genre
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </p>
      </div>

      <FavoritePageWrapper>{map}</FavoritePageWrapper>
      {searchFormValue.length <= 2 && (
        <>
          <div className="notification is-warning">
            <FontAwesomeIcon icon={faExclamationCircle} /> Enter{" "}
            <strong>three</strong> characters to start searching for books.
          </div>

          <Heading>Popular Books</Heading>
          <Slider {...carouselSettings}>
            {bookPopular.map((item) => (
              <>
                <BookPopularWrapper key={item.id}>
                  <Link
                    to={{
                      pathname: `/book/${item.id}/${item.title}`,
                      query: {...item},
                    }}
                  >
                    <img
                      style={{width: "100%"}}
                      src={`/assets/bookImages/${item.id}.jpg`}
                      alt={item.title}
                    />
                    {/* {item.title}*/}
                  </Link>
                </BookPopularWrapper>
              </>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

MainPage.propTypes = {
  searchbooks: PropTypes.array,
  search: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  clean: PropTypes.func.isRequired,
};

const mapStateToProps = ({searchbooks, user}) => {
  const {isLogin} = user;
  return {searchbooks, isLogin};
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (phrase) => dispatch(searchBook(phrase)),
    clean: () => dispatch(cleanErrors()),
  };
};

// export default ClearErros(MainPage);
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
