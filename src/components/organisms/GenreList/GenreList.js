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
  sendRemoveListGenre,
  sendNewsListGenre,
} from "../../../actions";
import PropTypes from "prop-types";

const GenreList = ({
  genreList,
  genreRemoved,
  genreNews,
  remove,
  remove2,
  remove3,
  fetch,
  sendRemove,
  sendAdd,
}) => {
  useEffect(() => {
    fetch();
  }, [fetch]);

  const buttonView = genreNews.length >= 1 || genreRemoved.length >= 1;

  const handleSubmitChanges = () => {
    alert("wysylam wszystko :D");
    sendRemove(genreRemoved);
    sendAdd(genreNews);
    fetch();
  };

  return (
    <>
      {buttonView && (
        <>
          <AcceptButton onClick={handleSubmitChanges}>
            Accept the changes
          </AcceptButton>
          <CancelButton>Cancel</CancelButton>
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
              <Genre key={item.id} remove>
                <Title>{item.genre}</Title>
                <DeleteButton onClick={() => remove2(item)}>
                  <RiDeleteBin2FillIcon remove />
                  <VscDebugStepOverIcon remove />
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
            <Title>{item.genre}</Title>
            <DeleteButton onClick={() => remove(item)}>
              <RiDeleteBin2FillIcon />
            </DeleteButton>
          </Genre>
        ))}
      </GenreListWrapper>
    </>
  );
};

GenreList.propTypes = {
  genreList: PropTypes.object,
  genreRemoved: PropTypes.object,
  genreNews: PropTypes.object,
  remove: PropTypes.func.isRequired,
  remove2: PropTypes.func.isRequired,
  remove3: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  sendRemove: PropTypes.func.isRequired,
  sendAdd: PropTypes.func.isRequired,
};

const mapStateToProps = ({genreList, genreRemoved, genreNews}) => {
  return {
    genreList,
    genreRemoved,
    genreNews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (item) => dispatch(removeGenre(item)),
    remove2: (item) => dispatch(removeGenre2(item)),
    remove3: (item) => dispatch(removeGenre3(item)),
    fetch: () => dispatch(fetchGenres()),
    sendRemove: (genreRemoved) => dispatch(sendRemoveListGenre(genreRemoved)),
    sendAdd: (genreNews) => dispatch(sendNewsListGenre(genreNews)),
    // listGenre: ()=>dispatch(listGenre),
    // addGenre: ()=>dispatch(genre)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
