import React, {useEffect, useState} from "react";
import {Input} from "../../components/atoms/Input/Input";
import Heading from "../../components/atoms/Heading/Heading";
import styled from "styled-components";
import {bookPopular} from "../../data/bookPopular.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {carouselSettings} from "../../data/carouselSettings";
import Loader from "../../components/molecules/Loader/Loader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {searchBook, cleanErrors, clearBookSearchList} from "../../actions";
import "./slider-arrow.css";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import BookList from "../../components/organisms/BookList/BookList";
import PropTypes from "prop-types";
import BookNews from "../../components/organisms/BooksNews/BookNews";
import img from "../../assets/img/book2.png";

const BookPopularWrapper = styled.div`
  max-width: 200px;
  min-width: 200px;
  height: 300px;
  margin-right: 10px;
  margin-bottom: 20px;
`;

const FavoritePageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MainPage = ({searchbooks, search, isLogin, clean}) => {
  const [searchFormValue, setSearchFormValue] = useState("");
  useEffect(() => {
    return () => clean();
  }, [searchFormValue]);

  const handleChangeSearchFormValue = (e) => {
    setSearchFormValue(e.target.value);
    let timeout = true;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(phrase, 2000);
    function phrase() {
      return search(e.target.value);
    }
  };

  const loader = searchFormValue.length >= 3 && searchbooks.length === 0;

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
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </p>
      </div>
      {loader && <Loader />}
      <FavoritePageWrapper>
        {searchbooks.map((item) => (
          <BookList key={item.id} {...item} isLogin={isLogin} />
        ))}
      </FavoritePageWrapper>
      {searchFormValue.length <= 2 && (
        <>
          {!searchFormValue.length === 0 && (
            <div className="notification is-warning">
              <FontAwesomeIcon icon={faExclamationCircle} />
              Enter <strong>three</strong> characters to start searching for
              books.
            </div>
          )}
          <Heading>Premieres and news</Heading>
          <BookNews />
          <Slider {...carouselSettings}>
            {bookPopular.map((item) => (
              <BookPopularWrapper key={item.id}>
                <Link
                  // to={{
                  //   pathname: `/book/${item.id}/${item.title}`,
                  //   query: {...item},
                  // }}
                  to="/"
                >
                  <img style={{width: "100%"}} src={img} alt="Book Awers" />
                </Link>
              </BookPopularWrapper>
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
  cleanSearch: PropTypes.func.isRequired,
};

const mapStateToProps = ({searchbooks, user}) => {
  const {isLogin} = user;
  return {searchbooks, isLogin};
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (phrase) => dispatch(searchBook(phrase)),
    clean: () => dispatch(cleanErrors()),
    cleanSearch: () => dispatch(clearBookSearchList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
