import React from "react";
import {StyledHeading} from "./Heading.elements";
import PropTypes from "prop-types";

const Heading = (props) => {
  return (
    <StyledHeading {...props}>
      <span>
        <h1>{props.children}</h1>
      </span>
    </StyledHeading>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
