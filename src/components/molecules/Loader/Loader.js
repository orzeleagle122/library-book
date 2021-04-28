import React from "react";
import {Book, BookPage, LoaderWrapper} from "./Loader.elements";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Loader = ({loader}) => {
  return (
    <>
      {!loader && (
        <LoaderWrapper>
          <Book>
            <BookPage />
            <BookPage />
            <BookPage />
          </Book>
        </LoaderWrapper>
      )}
    </>
  );
};

Loader.propTypes = {
  loader: PropTypes.bool.isRequired,
};

const mapStateToProps = ({loader}) => {
  return {
    loader,
  };
};

export default connect(mapStateToProps, null)(Loader);
