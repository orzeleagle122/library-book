import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const ButtonWrapper = styled.button`
  height: 58px;
  width: 156px;
  padding: 5px 10px;
  background-color: #2d3ddf;
  color: white;
  font-weight: 700;
  font-size: 15px;
  margin-top: 20px;
  border-radius: 10px;
  border: #2d3ddf;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
    border: 5px solid #2d3ddf;
  }
`;

const Button = (props) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
