import styled, {css} from "styled-components";
import {ImHeart, ImHeartBroken} from "react-icons/im";
import notavailable from "../../../assets/layout/notavailable.png";
import {RiRadioButtonLine, RiHeartAddFill} from "react-icons/ri";
import {IoHeartDislikeSharp} from "react-icons/io5";

export const FavoriteItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  /* margin-left: 20px; */
  border-top: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: 0.15s linear;

  flex-basis: 500px;

  /* stosunek wzrostu dzieci contenera wzgledem siebie */
  /* flex-grow: 1; */

  &:nth-last-child(2) {
    max-width: 750px;
  }

  &:last-child {
    flex-grow: 0;
  }

  ${({available}) =>
    !available &&
    css`
      background-image: url(${notavailable});
      background-position: center;
      background-repeat: no-repeat;
      /* background-size: cover; */
      opacity: 0.5;
    `}

  ${({isLogin}) =>
    !isLogin &&
    css`
      border-right: 1px solid #d1d1d1;
    `}

  &:hover {
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }

  @media screen and (max-width: 1725px) {
    flex-basis: 45%;
  }
  @media screen and (max-width: 1210px) {
    flex-basis: 100%;
  }
  @media screen and (max-width: 564px) {
    border-left: 1px solid #d1d1d1;
  }
  @media screen and (max-width: 480px) {
    align-items: flex-start;
    border-right: 1px solid #d1d1d1;
    border-left: 1px solid #d1d1d1;
    margin-left: 0px;
    height: 100%;
  }
`;

export const BookImages = styled.div`
  max-width: 100px;
  /* height:300px; */
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: relative;

  @media screen and (max-width: 564px) {
    display: none;
  }
`;

export const BookImage = styled.img`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  object-fit: cover;
  width: 100%;
`;

export const BookContent = styled.div`
  padding: 10px 15px;
  /* width:400px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;

  /* height:300px; */
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 0;
  }
`;

export const BookTitle = styled.h1`
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: 700;
  margin-bottom: 15px;
  text-decoration: none;
  color: black !important;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 10px 15px 0 15px;
  }
`;

export const BookGenres = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 480px) {
    flex-direction: row;
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

export const BookAuthor = styled.div`
  font-size: 14px;
  @media screen and (max-width: 480px) {
    padding: 0px 15px 0 15px;
    /* margin-left: 5px; */
  }
`;

export const Available = styled.div`
  margin-top: auto;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const AvailableBook = styled.span`
  width: 100%;
  padding: 5px 10px;
  background-color: #c03822;
  color: white;
  font-size: 10px;
  border-radius: 20px;

  ${({available}) =>
    available &&
    css`
      background-color: #008040;
    `}
`;

export const BookInfo = styled.p`
  color: #d1d1d1;
  font-size: 12px;
`;

export const BookOrderButton = styled.button`
  min-width: 50px;
  height: 100%;
  background-color: #2d3ddf;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: background-color 0.25s linear;
  cursor: pointer;

  ${({isLogin}) =>
    !isLogin &&
    css`
      display: none;
    `}

  ${({available}) =>
    !available &&
    css`
      background-color: #525356;
      cursor: not-allowed;
    `}

  &:hover {
    background-color: #2cbc63;

    ${({available}) =>
      !available &&
      css`
        background-color: #525356;
      `}
  }

  ${({textButton}) =>
    textButton === "Borrowed" &&
    css`
      cursor: not-allowed;
      background-color: green;

      &:hover {
        background-color: green;
        color: white;
        border: 5px solid green;
      }
    `}

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ButtonMobileWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const BookFavoriteMobile = styled.button`
  display: none;

  @media screen and (max-width: 480px) {
    opacity: 1;
    display: block;
    width: 20%;
    background-color: #ff6861;
    cursor: pointer;
    border: 1px solid #d1d1d1;
    border-right: none;
    border-bottom: none;
    height: 50px;
    border-top-right-radius: 10px;
    /* border-bottom-right-radius: 10px; */
    border-top-left-radius: 10px;
    /* border-bottom-left-radius: 10px; */
  }
`;

export const RiHeartAddFillIcon = styled(RiHeartAddFill)`
  font-size: 30px;
`;
export const IoHeartDislikeSharpIcon = styled(IoHeartDislikeSharp)`
  font-size: 30px;
`;

export const BookOrderButtonMobile = styled.button`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    width: 80%;
    height: 50px;
    background-color: #2d3ddf;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 700;
    cursor: pointer;
    border: 1px solid #d1d1d1;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 10px;
    /* border-bottom-right-radius: 10px; */
    border-top-left-radius: 10px;
    /* border-bottom-left-radius: 10px; */
    cursor: pointer;
    margin-top: auto;

    ${({available}) =>
      !available &&
      css`
        background-color: #525356;
        cursor: not-allowed;
      `}

    ${({textButton}) =>
      textButton === "Borrowed" &&
      css`
        cursor: not-allowed;
        background-color: green;

        &:hover {
          background-color: green;
          color: white;
          border: 5px solid green;
        }
      `}
  }
`;

export const VerticalText = styled.p`
  writing-mode: vertical-rl;
`;

export const FavoriteHearthBroken = styled(ImHeartBroken)`
  color: red;
  font-size: 20px !important;
  margin-left: 5px;
  z-index: 999;
  font-size: 30px;
  opacity: 0.7;
  transition: opacity 0.5s linear;
  transition: color 0.5s linear;

  &:hover {
    color: black;
    opacity: 1;
  }

  ${({add}) =>
    !add &&
    css`
      display: none;
    `}

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const FavoriteHearthAdd = styled(ImHeart)`
  color: black;
  font-size: 20px !important;
  margin-left: 5px;
  z-index: 999;
  font-size: 30px;
  opacity: 0.7;
  transition: opacity 0.5s linear;
  transition: color 0.5s linear;

  ${({add}) =>
    add &&
    css`
      display: none;
    `}

  &:hover {
    color: red;
    opacity: 1;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const RiRadioButtonLineIcon = styled(RiRadioButtonLine)`
  display: none;
  @media screen and (max-width: 480px) {
    display: inline;
    color: green;
    font-size: 18px;
    ${({available}) =>
      !available &&
      css`
        color: red;
      `}
  }
`;

// export const FavoriteHearthBroken=styled(ImHeartBroken)`
//     display:none;

//     &:hover {
//         color:red;
//         position:absolute;
//         z-index:9999;
//         right:150px;
//         bottom: 10px;
//         font-size: 40px;
//   }
// `;
