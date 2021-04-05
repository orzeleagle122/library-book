import styled, {css} from "styled-components";
import Button from "../../atoms/Button/Button";

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BookImages = styled.div`
  width: 300px;
  margin-right: 30px;
  @media screen and (max-width: 480px) {
    margin-right: 0px;
  }
`;

export const BookContent = styled.div``;
export const ImgBook = styled.img`
  width: 100%;
`;

export const HeadingAuthor = styled.h2`
  margin-bottom: 20px;
`;

export const BookGenres = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Genres = styled.div`
  background-color: black;
  padding: 5px 10px;
  font-size: 12px;
  color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 10px 10px;
`;

export const Publisherspan = styled.span`
  font-size: 15px;
`;

export const ButtonBB = styled(Button)`
  margin-bottom: 10px;

  ${({isLogin}) =>
    !isLogin &&
    css`
      display: none !important;
    `}

  ${({available}) =>
    !available &&
    css`
      background-color: #525356;
    `}
`;

export const Description = styled.div``;
