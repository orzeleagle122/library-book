import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import {Link} from "react-router-dom";

export const BookNewsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 100px;
  max-width: 2140px;
  position: relative;
`;

export const TheBestBook = styled.div`
  flex-basis: 400px;
  background-color: #1172c4;
  color: white;

  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  @media screen and (max-width: 1021px) {
    display: none;
  }
`;

export const ListBookWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const TheBestBookWrapperInfo = styled.div`
  padding-left: 25px;
  padding-right: 25px;
`;

export const Book = styled.div`
  max-width: 300px;
  flex: 1 0 21%;

  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  @media screen and (max-width: 2044px) {
    &:nth-last-child(8) {
      display: none;
    }
    &:nth-last-child(7) {
      display: none;
    }
  }

  @media screen and (max-width: 1643px) {
    &:nth-last-child(6) {
      display: none;
    }
    &:nth-last-child(5) {
      display: none;
    }
  }

  @media screen and (max-width: 1021px) {
    &:nth-last-child(6) {
      display: block;
    }
    &:nth-last-child(5) {
      display: block;
    }
  }

  @media screen and (max-width: 946px) {
    /* &:nth-last-child(6) {
      display: block;
    } */
    /* &:nth-last-child(5) {
      display: none;
    } */
  }
`;

export const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 35px;
  /* height: 100%; */
`;

export const BookImg = styled.div`
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TinyTittle = styled.p`
  height: 50px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  overflow: hidden;
  margin-bottom: 15px;
`;

export const TinyAuthor = styled.p`
  height: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
`;

export const GenresWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
`;

export const Genre = styled.div`
  background-color: black;
  padding: 5px 10px;
  font-size: 12px;
  color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 10px 10px;
  width: 100%;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
`;

export const ButtonView = styled(Button)`
  height: 38px;
  width: 100%;
  padding: 5px 10px;
`;

export const ImgBestBook = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const StyledLink = styled(Link)`
  /* display: block; */
  width: 100%;
`;
