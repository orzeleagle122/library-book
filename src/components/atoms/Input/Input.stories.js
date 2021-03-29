import React from "react";
import Input from "./Input";
import {storiesOf} from "@storybook/react";

storiesOf("Atoms/Input", module).add("Primary", () => (
  <Input>Hello Patrick</Input>
));
