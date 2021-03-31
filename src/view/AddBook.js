// import {Formik, Field} from "formik";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {addBook} from "../actions";
import PropTypes from "prop-types";
import {fetchGenres, removeGenre} from "../actions";
import {Input} from "../components/atoms/Input/Input";
import Heading from "../components/atoms/Heading/Heading";
import Button from "../components/atoms/Button/Button";
import styled from "styled-components";

const GenresButton = styled.button`
  margin-right: 10px;
  border: 0;
  padding: 5px 20px;
  cursor: pointer;
  background-color: #ebedff;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
`;

const GenresDiv = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const InputBook = styled(Input)`
  width: 400px;
  margin: 10px;
`;

const BookAdd = ({fetch, addBooks, genreList, removeasadd}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genres, setGenres] = useState([]);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    fetch();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "author") {
      setAuthor(e.target.value);
    }
    if (e.target.name === "publisher") {
      setPublisher(e.target.value);
    }
    if (e.target.name === "amount") {
      setAmount(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooks(title, author, publisher, genres, amount);
    setTitle("");
    setAuthor("");
    setPublisher("");
    setAmount(1);
    setGenres([]);
    fetch();
  };

  return (
    <>
      <Heading>Add Book</Heading>
      <form onSubmit={handleSubmit}>
        <InputBook
          placeholder="Title"
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <br />
        <InputBook
          placeholder="Author"
          type="text"
          name="author"
          value={author}
          onChange={handleChange}
        />
        <br />
        <InputBook
          placeholder="Publisher"
          type="text"
          name="publisher"
          value={publisher}
          onChange={handleChange}
        />
        <br />
        <GenresDiv>
          Genres:{" "}
          {genres.map((item) => (
            <>{item.genre}, </>
          ))}
          <br />
          {genreList.map((item) => (
            <GenresButton
              key={item.id}
              type="button"
              onClick={() => {
                removeasadd(item);
                setGenres((prevState) => [...prevState, item]);
              }}
            >
              {item.genre}
            </GenresButton>
          ))}
          <br />
        </GenresDiv>
        <InputBook
          placeholder="amount eg. 20"
          type="number"
          name="amount"
          value={amount}
          onChange={handleChange}
        />
        <br />
        <Button type="submit" value="Submit">
          Add book
        </Button>
      </form>
    </>
  );
};

BookAdd.propTypes = {
  fetch: PropTypes.node,
  addBooks: PropTypes.func.isRequired,
  removeasadd: PropTypes.func.isRequired,
  genreList: PropTypes.array,
};

const mapStateToProps = ({genreList}) => {
  return {genreList};
};

const mapDispathToProps = (dispatch) => {
  return {
    addBooks: (title, author, publisher, genres, amount) =>
      dispatch(addBook(title, author, publisher, genres, amount)),
    fetch: () => dispatch(fetchGenres()),
    removeasadd: (item) => dispatch(removeGenre(item)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(BookAdd);
