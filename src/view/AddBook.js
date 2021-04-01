// import {Formik, Field} from "formik";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {addBook, cleanErrors} from "../actions";
import PropTypes from "prop-types";
import {fetchGenres, removeGenre} from "../actions";
import {Input} from "../components/atoms/Input/Input";
import {Textarea} from "../components/atoms/Textarea/Textarea";
import Heading from "../components/atoms/Heading/Heading";
import Button from "../components/atoms/Button/Button";
import styled from "styled-components";

const GenresButton = styled.button`
  margin-right: 10px;
  border: none;
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
const TextareaBook = styled(Textarea)`
  width: 600px;
  margin: 10px;
`;

const BookAdd = ({
  fetch,
  addBooks,
  genreList,
  removeasadd,
  showErrors,
  clean,
}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genres, setGenres] = useState([]);
  const [amount, setAmount] = useState(1);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch();
    return () => clean();
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
    if (e.target.name === "description") {
      setDescription(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooks(title, author, publisher, genres, amount, description);
    setTitle("");
    setAuthor("");
    setPublisher("");
    setDescription("");
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
            <b key={item.id}>{item.name}, </b>
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
              {item.name}
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
          min="1"
        />
        <br />
        <TextareaBook
          placeholder="Description book"
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          maxLength="1999"
        />
        <br />
        <Button type="submit" value="Submit">
          Add book
        </Button>
        {showErrors && (
          <div className="notification is-danger is-light">
            <strong>{showErrors}</strong>
          </div>
        )}
      </form>
    </>
  );
};

BookAdd.propTypes = {
  fetch: PropTypes.func.isRequired,
  addBooks: PropTypes.func.isRequired,
  removeasadd: PropTypes.func.isRequired,
  genreList: PropTypes.array,
  clean: PropTypes.func.isRequired,
  showErrors: PropTypes.node,
};

const mapStateToProps = ({genreList, showErrors}) => {
  return {genreList, showErrors};
};

const mapDispathToProps = (dispatch) => {
  return {
    addBooks: (title, author, publisher, genres, amount, description) =>
      dispatch(addBook(title, author, publisher, genres, amount, description)),
    fetch: () => dispatch(fetchGenres()),
    removeasadd: (item) => dispatch(removeGenre(item)),
    clean: () => dispatch(cleanErrors()),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(BookAdd);
