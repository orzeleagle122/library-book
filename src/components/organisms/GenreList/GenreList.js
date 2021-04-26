import React, {useEffect} from "react";
import Heading from "../../atoms/Heading/Heading";
import {
  GenreListWrapper,
  Genre,
  AcceptButton,
  DeleteButton,
  Title,
  RiDeleteBin2FillIcon,
  CancelButton,
  VscDebugStepOverIcon,
} from "./GenreList.elements";
import {connect} from "react-redux";
import {
  removeGenre,
  removeGenre2,
  removeGenre3,
  fetchGenres,
  removeaddfetchGenre,
} from "../../../actions";
import PropTypes from "prop-types";
import Loader from "../../molecules/Loader/Loader";

const GenreList = ({
  genreList,
  genreRemoved,
  genreNews,
  remove,
  remove2,
  remove3,
  fetch,
  removeaddfetch,
  showErrors,
}) => {
  useEffect(() => {
    fetch();
  }, []);

  const buttonView = genreNews.length >= 1 || genreRemoved.length >= 1;

  const handleSubmitChanges = () => {
    removeaddfetch(genreRemoved, genreNews);
  };

  return (
    <>
      <Loader />
      {buttonView && (
        <>
          <AcceptButton onClick={handleSubmitChanges}>
            Accept the changes
          </AcceptButton>
          <CancelButton onClick={() => alert("nie podpięte do zrobienia")}>
            Cancel
          </CancelButton>
        </>
      )}

      {genreNews.length >= 1 && (
        <>
          <Heading>The list of genres prepared for add:</Heading>
          <GenreListWrapper>
            {genreNews.map((item) => (
              <Genre key={item} news>
                <Title>{item}</Title>
                <DeleteButton onClick={() => remove3(item)}>
                  <RiDeleteBin2FillIcon />
                </DeleteButton>
              </Genre>
            ))}
          </GenreListWrapper>
        </>
      )}

      {genreRemoved.length >= 1 && (
        <>
          <Heading>The list of genres prepared for removal:</Heading>
          <GenreListWrapper>
            {genreRemoved.map((item) => (
              <Genre key={item.id} remove="true">
                <Title>{item.name}</Title>
                <DeleteButton onClick={() => remove2(item)}>
                  <RiDeleteBin2FillIcon remove="true" />
                  <VscDebugStepOverIcon remove="true" />
                </DeleteButton>
              </Genre>
            ))}
          </GenreListWrapper>
        </>
      )}

      <Heading>List of available genre:</Heading>

      <GenreListWrapper>
        {genreList.map((item) => (
          <Genre key={item.id}>
            <Title>{item.name}</Title>
            <DeleteButton onClick={() => remove(item)}>
              <RiDeleteBin2FillIcon />
            </DeleteButton>
          </Genre>
        ))}
        {showErrors}
      </GenreListWrapper>
    </>
  );
};

GenreList.propTypes = {
  genreList: PropTypes.array,
  genreRemoved: PropTypes.array,
  genreNews: PropTypes.array,
  remove: PropTypes.func.isRequired,
  remove2: PropTypes.func.isRequired,
  remove3: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  removeaddfetch: PropTypes.func.isRequired,
  showErrors: PropTypes.array,
};

const mapStateToProps = ({genreList, genreRemoved, genreNews, showErrors}) => {
  return {
    genreList,
    genreRemoved,
    genreNews,
    showErrors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (item) => dispatch(removeGenre(item)),
    remove2: (item) => dispatch(removeGenre2(item)),
    remove3: (item) => dispatch(removeGenre3(item)),
    fetch: () => dispatch(fetchGenres()),
    removeaddfetch: (genreRemoved, genreNews) =>
      dispatch(removeaddfetchGenre(genreRemoved, genreNews)),
    // listGenre: ()=>dispatch(listGenre),
    // addGenre: ()=>dispatch(genre)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
