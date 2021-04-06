import React from "react";
import PropTypes from "prop-types";
import Heading from "../../atoms/Heading/Heading";
import img from "../../../assets/img/book2.png";
import {
  DetailsWrapper,
  BookImages,
  BookContent,
  HeadingAuthor,
  BookGenres,
  Genres,
  Publisherspan,
  Description,
  ImgBook,
  ButtonBB,
  ButtonsWrapper,
  LikedButton,
  RiHeartAddFillIcon,
} from "./DetailsBook.elements";
import {connect} from "react-redux";

const DetailsBook = ({
  title,
  author,
  genres,
  publisher,
  available,
  isLogin,
}) => {
  console.log(isLogin);
  return (
    <>
      <DetailsWrapper>
        <BookImages>
          <ImgBook src={img} alt="img" />
        </BookImages>
        <BookContent>
          <Heading>{title}</Heading>
          <HeadingAuthor>{author}</HeadingAuthor>
          <BookGenres>
            {genres.map((item) => (
              <Genres key={item.id}>{item.name}</Genres>
            ))}
          </BookGenres>
          <Publisherspan>Publisher: {publisher}</Publisherspan>
          <br />
          <ButtonsWrapper>
            <ButtonBB isLogin={isLogin} available={available >= 1}>
              Borrow Book
            </ButtonBB>
            <LikedButton>
              {/* jeśli jest polajkowany to wyswietlic dislike :) */}
              <RiHeartAddFillIcon />
            </LikedButton>
          </ButtonsWrapper>
        </BookContent>
      </DetailsWrapper>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
        suscipit nunc. Etiam sed neque nibh. Nullam in malesuada nisl, nec
        ullamcorper erat. Proin faucibus turpis a libero consectetur, ac posuere
        augue volutpat. Cras suscipit consequat urna, in ultrices tellus porta
        lacinia. Duis massa felis, luctus nec pretium et, aliquet vel ligula.
        Fusce venenatis nunc eget augue fermentum aliquet. Maecenas sem magna,
        tincidunt sit amet laoreet id, fringilla a arcu. Pellentesque ut dapibus
        libero. Sed at est id nunc ultricies ornare ac hendrerit nunc. Ut quis
        est libero. Donec posuere erat a condimentum consequat. Aliquam
        facilisis auctor finibus. Cras lacinia mauris eget hendrerit tempus.
      </Description>
    </>
  );
};

DetailsBook.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  publisher: PropTypes.string,
  genres: PropTypes.array,
  isLogin: PropTypes.bool,
  available: PropTypes.number,
};

const mapStateToProps = ({user}) => {
  const {isLogin} = user;
  return {
    isLogin,
  };
};

export default connect(mapStateToProps)(DetailsBook);
