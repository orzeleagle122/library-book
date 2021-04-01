import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bookRequest, cleanErrors} from "../actions";
import Heading from "../components/atoms/Heading/Heading";
import Loader from "../components/molecules/Loader/Loader";
import PropTypes from "prop-types";

const BookDetails = ({location, bookInfo, bookDetails, showErrors, clean}) => {
  const {query} = location;
  const url = location.pathname.split("/");

  useEffect(() => {
    if (!query) {
      bookInfo(url[2], url[3]);
    }
    return () => clean();
  }, []);

  // po odmontowaniu compomentu wywolaj akcje czyszczenia bookdetails
  // dodać setTimeOut i sprawdzić loader

  if (query) {
    return (
      <>
        after Search form <br />
        <Heading>{query.title}</Heading>
        {query.author}
        <br />
      </>
    );
  }

  if (showErrors) {
    return <>404: {bookDetails.message}</>;
  }

  return (
    <>
      {bookDetails.id >= 1 ? (
        <>
          after Refresh <br />
          <Heading>{bookDetails.title} </Heading>
          <h3>{bookDetails.author}</h3>
          {bookDetails.amount},{bookDetails.id}
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
};

BookDetails.propTypes = {
  location: PropTypes.any,
  bookInfo: PropTypes.func.isRequired,
  bookDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  author: PropTypes.string,
  clean: PropTypes.func.isRequired,
  showErrors: PropTypes.node,
};

const mapStateToProps = ({bookDetails, showErrors}) => {
  return {
    bookDetails,
    showErrors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bookInfo: (id, title) => dispatch(bookRequest(id, title)),
    clean: () => dispatch(cleanErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
