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
  TheBestBookWrapperInfo,
} from "./BookNews.elements";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Loader from "../../molecules/Loader/Loader";
import {requestStart, requestEnd} from "../../../actions";
import {API} from "../../../actions";
import img from "../../../assets/img/book2.png";
// import {routers} from "../../../data/routers";
// import $ from "jquery";

const BookNews = ({reqStart, reqEnd}) => {
  const [randomBook, setRandomBook] = useState([]);

  const recommendedBook = () => {
    reqStart();
    axios
      .get(API + "/book/search/random", {
        params: {number: 8},
      })
      .then((payload) => {
        setRandomBook(payload.data);
      })
      .finally(() => {
        reqEnd();
      });
  };

  useEffect(() => {
    recommendedBook();
  }, []);

  const TABS = [...document.querySelectorAll("#tabs li")];
  const CONTENT = [...document.querySelectorAll("#tab-content p")];
  const ACTIVE_CLASS = "is-active";

  function initTabs() {
    TABS.forEach((tab) => {
      tab.addEventListener("click", () => {
        let selected = tab.getAttribute("data-tab");
        updateActiveTab(tab);
        updateActiveContent(selected);
      });
    });
  }

  function updateActiveTab(selected) {
    TABS.forEach((tab) => {
      if (tab && tab.classList.contains(ACTIVE_CLASS)) {
        tab.classList.remove(ACTIVE_CLASS);
      }
    });
    selected.classList.add(ACTIVE_CLASS);
  }

  function updateActiveContent(selected) {
    CONTENT.forEach((item) => {
      if (item && item.classList.contains(ACTIVE_CLASS)) {
        item.classList.remove(ACTIVE_CLASS);
      }
      let data = item.getAttribute("data-content");
      if (data === selected) {
        item.classList.add(ACTIVE_CLASS);
      }
    });
  }

  initTabs();

  return (
    <>
      <div className="tabs is-medium" id="tabs">
        <ul>
          <li
            className="is-active"
            data-tab="1"
            onClick={() => {
              recommendedBook();
            }}
          >
            <a>Books</a>
          </li>
          <li
            data-tab="2"
            onClick={() => {
              recommendedBook();
            }}
          >
            <a>Foreign-language books</a>
          </li>
          <li
            data-tab="3"
            onClick={() => {
              recommendedBook();
            }}
          >
            <a>E-books</a>
          </li>
          <li
            data-tab="4"
            onClick={() => {
              recommendedBook();
            }}
          >
            <a>Audiobooks</a>
          </li>
          <li
            data-tab="5"
            onClick={() => {
              recommendedBook();
            }}
          >
            <a>Music</a>
          </li>
          <li
            data-tab="6"
            onClick={() => {
              recommendedBook();
            }}
          >
            <a>Games and toys</a>
          </li>
          <li
            data-tab="7"
            onClick={() => {
              recommendedBook();
            }}
          >
            <a>Papermaker</a>
          </li>
        </ul>
      </div>

      <BookNewsWrapper>
        <Loader />
        {/* {loader && <Loader />} */}
        <TheBestBook thebest="thebest">
          <ImgBestBook src={img} alt="alt" />
          {randomBook.slice(0, 1).map((item) => (
            <TheBestBookWrapperInfo key={item.id}>
              <TinyTittle>{item.title}</TinyTittle>
              <TinyAuthor>{item.author}</TinyAuthor>
              <GenresWrapper>
                {item.genres.map((item2) => (
                  <Genre key={item2.id} thebest>
                    {item2.name}
                  </Genre>
                ))}
              </GenresWrapper>
              <ButtonWrapper>
                <StyledLink to={`/book/${item.id}/${item.title}`}>
                  <ButtonView>View book</ButtonView>
                </StyledLink>
              </ButtonWrapper>
            </TheBestBookWrapperInfo>
          ))}
        </TheBestBook>
        <ListBookWrapper>
          {randomBook.slice(0, 10).map((item) => (
            <Book key={item.id}>
              {/* <Link to={`/book/${item.id}/${item.title}`}> */}
              <BookWrapper>
                <BookImg>
                  <img src={img} alt="Book Awers" />
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

BookNews.propTypes = {
  reqStart: PropTypes.func.isRequired,
  reqEnd: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispatch) => {
  return {
    reqStart: () => dispatch(requestStart()),
    reqEnd: () => dispatch(requestEnd()),
  };
};

export default connect(null, mapDispathToProps)(BookNews);
