"use client";
import { Button, createTheme, Select } from "@mantine/core";
import buttonClass from "./Button.module.css";
import selectClass from "./Select.module.css";

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: buttonClass,
    }),
    Select: Select.extend({
      classNames: selectClass,
    }),
  },
});
export default theme;
