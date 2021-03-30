import {Formik, Field} from "formik";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {addBook} from "../actions";
import PropTypes from "prop-types";
import {fetchGenres} from "../actions";
import {Input} from "../components/atoms/Input/Input";

const BookAdd = ({addBooks, fetch, genreList}) => {
  useEffect(() => {
    fetch();
  }, []);
  return (
    <Formik
      initialValues={{
        title: "",
        author: "",
        publisher: "",
        genres: {},
        checkbox: false,
        amount: "",
      }}
      onSubmit={({title, author, publisher, genres, amount}) => {
        addBooks(title, author, publisher, genres, amount);
      }}
    >
      {({
        values,
        // errors,
        // touched,
        handleChange,
        handleBlur,
        handleSubmit,
        // isSubmitting,
        /* and other goodies */
      }) => {
        return (
          <form className="box" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <Input
                  className="input"
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Author</label>
              <div className="control">
                <Input
                  className="input"
                  type="text"
                  name="author"
                  placeholder="Author"
                  value={values.author}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Publisher</label>
              <div className="control">
                <Input
                  className="input"
                  type="text"
                  name="publisher"
                  placeholder="Publisher"
                  value={values.publisher}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            {/* <div className="field">
              <label className="label">Genres</label>
              <div className="control">
                <Input
                  className="input"
                  type="text"
                  name="genres"
                  placeholder="Book types"
                  value={values.genres}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div> */}
            <div role="group" aria-labelledby="checkbox-group">
              {genreList.map((item) => (
                <label key={item.id}>
                  <Field
                    type="checkbox"
                    name="genres"
                    value={(item.id, item.genre)}
                  />
                  {item.genre}
                </label>
              ))}
            </div>

            <div className="field">
              <label className="label">Amount</label>
              <div className="control">
                <Input
                  className="input"
                  type="number"
                  name="amount"
                  placeholder="how many"
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <button className="button is-primary" type="submit">
              Add book
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

BookAdd.propTypes = {
  addBooks: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  genreList: PropTypes.array.isRequired,
};

const mapStateToProps = ({genreList}) => {
  return {
    genreList,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    addBooks: (title, author, publisher, genres, amount) =>
      dispatch(addBook(title, author, publisher, genres, amount)),
    fetch: () => dispatch(fetchGenres()),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(BookAdd);
