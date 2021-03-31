import styled, {css} from "styled-components";
import {ImHeart, ImHeartBroken} from "react-icons/im";

export const FavoriteItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;
  border-top: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: 0.15s linear;

  /* flex-basis: 500px; */

  /* stosunek wzrostu dzieci contenera wzgledem siebie */
  flex-grow: 1;

  &:nth-last-child(2) {
    max-width: 750px;
  }

  &:last-child {
    flex-grow: 0;
  }

  ${({isLogin}) =>
    !isLogin &&
    css`
      border-right: 1px solid #d1d1d1;
    `}

  &:hover {
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
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

  @media screen and (max-width: 480px) {
    width: 100px;
    height: auto;
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

export const BookAuthor = styled.span`
  font-size: 14px;
`;

export const Available = styled.div`
  color: blue;
  margin-top: auto;
`;

export const BookInfo = styled.p`
  color: #d1d1d1;
  font-size: 12px;
`;

export const BookOrderButton = styled.button`
  width: 64px;
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

  ${({isLogin}) =>
    !isLogin &&
    css`
      display: none;
    `}

  &:hover {
    background-color: #2cbc63;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const BookOrderButtonMobile = styled.button`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;
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
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-top: auto;
  }
`;

export const VerticalText = styled.p`
  writing-mode: vertical-rl;
`;

export const FavoriteHearthBroken = styled(ImHeartBroken)`
  color: black;
  font-size: 20px !important;
  margin-left: 5px;
  z-index: 999;
  font-size: 30px;
  opacity: 0.7;
  transition: opacity 0.5s linear;
  transition: color 0.5s linear;

  &:hover {
    color: red;
    opacity: 1;
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

  &:hover {
    color: red;
    opacity: 1;
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
