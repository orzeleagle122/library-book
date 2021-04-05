import React from "react";
import {StyledButton} from "./NavbarButton.elements";
import PropTypes from "prop-types";

const NavbarButton = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

NavbarButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavbarButton;
