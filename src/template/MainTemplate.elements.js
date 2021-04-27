import styled from "styled-components";
import img from "../assets/layout/main_img.jpg";

import {FaBookMedical, FaBookReader} from "react-icons/fa";
import {GiCardExchange} from "react-icons/gi";

export const MainTemplateWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const GridContainer = styled.div`
  background-color: ${({footer}) => (footer ? "#2D3DDF" : "white")};

  z-index: 99;
  position: relative;
  bottom: -25px;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: flex-start;
  min-height: ${({footer}) => (footer ? "50px" : "100vh")};
  flex-wrap: nowrap;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: ${({footer}) => (footer ? "0px" : "50px")};
  border-bottom-right-radius: ${({footer}) => (footer ? "0px" : "50px")};

  margin-right: auto;
  margin-left: auto;
  max-width: 1600px;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: 1774px) {
    margin-left: 87px;
    margin-right: 0;
    width: calc(100% - 87px);
  }

  @media screen and (max-width: 480px) {
    margin-left: 0px;
    width: 100%;

    margin-bottom: ${({footer}) => (footer ? "80px" : "inherit")};
    margin-top: ${({footer}) => (footer ? "10px" : "inherit")};
    border-bottom-left-radius: ${({footer}) => (footer ? "50px" : "50px")};
    border-bottom-right-radius: ${({footer}) => (footer ? "50px" : "50px")};
  }
`;

export const MainContent = styled.div`
  padding: ${({footer}) => (footer ? "20px 0" : "43px 40px")};
  width: 100%;

  @media screen and (max-width: 790px) {
    font-size: ${({footer}) => (footer ? "10px" : "inherit")};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 335px;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  /* background-image: url(${img});
    background-color: #2d3ddf;
    background-size: cover;
 background-blend-mode: multiply; */
`;

export const ImageTextContainer = styled.div`
  /* max-width: 480px; */
  height: 149px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 155px;
  left: 145px;

  @media screen and (max-width: 480px) {
    /* max-width: 100px; */
    top: 80px;
    left: 25px;
    padding-top: 10px;
  }
`;

export const HeaderOne = styled.h1`
  font-size: 34px;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const SpanText = styled.span`
  font-size: 14px;
  color: white;
  font-weight: 700;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover !important;
  height: 100vh;
  position: fixed;
`;

export const StyledButton = styled.button`
  border: 2px solid white;
  padding: 10px 30px;
  background: transparent;
  font-size: 14px;
  color: white;
  margin-top: 15px;
  font-weight: 700;
  border-radius: 12px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  cursor: pointer;

  &:hover {
    background: white;
  }
`;

export const SuccessMessage = styled.div`
  position: fixed;
  left: 50%;
  top: 5%;
  transform: translate(-50%, 0);
  /* width: 400px; */
  z-index: 99999;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SuccessMessageHeader = styled.div`
  width: 100%;
  border-radius: 20px;
  /* padding: 10px 70px; */
`;

export const AdminWrapper = styled.div`
  position: absolute;
  left: 50%;
  height: 50px;
  transform: translate(-50%, 0);
  background-color: #2d3ddf;
  z-index: 100;
  color: white;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  gap: 40px;
  top: 335px;

  &.extraClass {
    font-size: 20px !important;
    pointer-events: auto !important;
    &:hover {
      visibility: visible !important;
      opacity: 1 !important;
    }
  }
`;

export const FaBookMedicalIcon = styled(FaBookMedical)`
  font-size: 24px;
  text-decoration: none;
  color: white;
`;
export const GiCardExchangeIcon = styled(GiCardExchange)`
  font-size: 24px;
  text-decoration: none;
  color: white;
`;
export const FaBookReaderIcon = styled(FaBookReader)`
  font-size: 24px;
  text-decoration: none;
  color: white;
`;

export const Footer = styled.p`
  color: white;
`;

export const Afoot = styled.a`
  color: white;
  text-decoration: none;

  letter-spacing: 1px;
  text-decoration: underline;
  &:visited,
  &:link {
    text-decoration: none;
    color: white;
    letter-spacing: 1.5px;
    text-decoration: underline;
  }
`;
