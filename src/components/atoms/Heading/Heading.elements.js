import styled from "styled-components";

export const StyledHeading = styled.div`
  display: block;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 900;
  margin-top: 40px;
  margin-bottom: 40px;

  span {
    position: relative;
    display: inline-block;
  }

  span:before,
  span:after {
    content: "";
    position: absolute;
    top: 55%;
    width: 70%;
    height: 5px;
    background: black;
    background: #2d3ddf;
  }

  span:before {
    right: 100%;
    margin-right: 15px;
  }
  span:after {
    left: 100%;
    margin-left: 15px;
  }

  h1 {
    font-size: 40px;
    margin-top: 36px;
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    position: relative;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1000px) {
      font-size: 25px;
    }
  }

  /* &:after {
    flex: 1;
    content: "";
    display: block;
    width: 20%;
    height: 7px;
    background: #2d3ddf;
    right: 145px;
    top: 50%;
    position: absolute;
  }

  &:before {
    flex: 1;
    content: "";
    display: block;
    width: 20%;
    height: 7px;
    background: #2d3ddf;
    left: 145px;
    top: 50%;
    position: absolute;
  } */
`;
