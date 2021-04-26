import styled from "styled-components";

export const StyledHeading = styled.h1`
  font-size: 40px;
  margin-top: 36px;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  position: relative;
  text-align: center;

  &:after {
    content: "";
    display: block;
    width: 250px;
    height: 7px;
    background: #2d3ddf;
    right: 145px;
    top: 50%;
    position: absolute;
  }

  &:before {
    content: "";
    display: block;
    width: 250px;
    height: 7px;
    background: #2d3ddf;
    left: 145px;
    top: 50%;
    position: absolute;
  }
`;
