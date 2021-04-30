import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bookRequest, cleanErrors} from "../../actions";
import Loader from "../../components/molecules/Loader/Loader";
import PropTypes from "prop-types";
import DetailsBook from "../../components/organisms/DetailsBook/DetailsBook";
import {goTop} from "../../data/function";

const BookDetails = ({location, bookInfo, bookDetails, showErrors, clean}) => {
  const {query} = location;
  const url = location.pathname.split("/");

  useEffect(() => {
    goTop();
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
        <DetailsBook {...query} />
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
          <DetailsBook {...bookDetails} />
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
