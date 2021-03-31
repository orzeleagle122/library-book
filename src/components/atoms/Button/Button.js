import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const ButtonWrapper = styled.button`
  height: 68px;
  width: 256px;
  padding: 10px 20px;
  background-color: #2d3ddf;
  color: white;
  font-weight: 700;
  font-size: 20px;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const Button = ({children}) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
