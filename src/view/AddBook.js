import {Formik} from "formik";
import React from "react";
import {connect} from "react-redux";
import {addBook} from "../actions";
import PropTypes from "prop-types";

const BookAdd = ({addBooks}) => {
  return (
    <Formik
      initialValues={{
        title: "",
        author: "",
        publisher: "",
        genres: "",
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
                <input
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
                <input
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
                <input
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
            <div className="field">
              <label className="label">Genres</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="genres"
                  placeholder="Book types"
                  value={values.genres}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Amount</label>
              <div className="control">
                <input
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
};

const mapDispathToProps = (dispatch) => {
  return {
    addBooks: (title, author, publisher, genres, amount) =>
      dispatch(addBook(title, author, publisher, genres, amount)),
  };
};

export default connect(null, mapDispathToProps)(BookAdd);
