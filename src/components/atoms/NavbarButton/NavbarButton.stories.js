import React from "react";
import NavbarButton from "./NavbarButton";
import {storiesOf} from "@storybook/react";

storiesOf("Atoms/NavbarButton", module).add("Primary", () => (
  <NavbarButton>Hello Patrick</NavbarButton>
));
