import React from "react";
import {StyledHeading} from "./Heading.elements";
import PropTypes from "prop-types";

const Heading = (props) => {
  return <StyledHeading {...props}>{props.children}</StyledHeading>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
