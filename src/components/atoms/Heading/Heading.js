import React from "react";
import {StyledHeading} from "./Heading.elements";
import PropTypes from "prop-types";

const Heading = ({children}) => {
  return <StyledHeading>{children}</StyledHeading>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
