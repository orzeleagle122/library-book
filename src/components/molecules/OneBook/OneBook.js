import React from "react";
import {
  Book,
  BookWrapper,
  BookImg,
  TinyTittle,
  TinyAuthor,
  GenresWrapper,
  ButtonWrapper,
  StyledLink,
  Genre,
  ButtonView,
} from "./OneBook.elements";
import {bookRequest} from "../../../actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {goTop} from "../../../data/function";
import img from "../../../assets/img/book2.png";

const OneBook = (props) => {
  const {bookInfo, recommendedBook} = props;
  return (
    <>
      <Book key={props.id}>
        <BookWrapper>
          <BookImg>
            <img src={img} alt="Book Awers" />
          </BookImg>
          <TinyTittle>{props.title}</TinyTittle>
          <TinyAuthor>{props.author}</TinyAuthor>
          <GenresWrapper>
            {props.genres.map((item2) => (
              <Genre key={item2.id}>{item2.name}</Genre>
            ))}
          </GenresWrapper>

          <ButtonWrapper>
            <StyledLink
              to={`/book/${props.id}/${props.title}`}
              onClick={() => {
                bookInfo(props.id, props.title);
                recommendedBook();
                goTop();
              }}
            >
              <ButtonView>View book</ButtonView>
            </StyledLink>
          </ButtonWrapper>
        </BookWrapper>
      </Book>
    </>
  );
};

OneBook.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  genres: PropTypes.array,
  bookInfo: PropTypes.func.isRequired,
  recommendedBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    bookInfo: (id, title) => dispatch(bookRequest(id, title)),
  };
};

export default connect(null, mapDispatchToProps)(OneBook);
