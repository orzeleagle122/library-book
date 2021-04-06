import styled, {css} from "styled-components";
import Button from "../../atoms/Button/Button";
import {RiHeartAddFill} from "react-icons/ri";

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const BookImages = styled.div`
  min-width: 300px;
  margin-right: 30px;
  @media screen and (max-width: 800px) {
    margin-right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    margin-right: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const LikedButton = styled.button`
  background-color: #ff6861;
  cursor: pointer;
  height: 58px;
  width: 58px;
  margin-top: 20px;
  border-radius: 10px;
  border: #ff6861;
  transition: background-color 0.5s ease-in-out, color 0.25s ease-in-out;

  &:hover {
    background-color: white;
    color: #7f001d;
    border: 5px solid #7f001d;
  }
`;

export const BookContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ImgBook = styled.img`
  width: 100%;
  @media screen and (max-width: 800px) {
    width: 50%;
  }
  @media screen and (max-width: 480px) {
    width: 250px;
  }
`;

export const RiHeartAddFillIcon = styled(RiHeartAddFill)`
  font-size: 30px;
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
