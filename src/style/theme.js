"use client";
import { Button, createTheme, Select } from "@mantine/core";
import buttonClass from "./Button.module.css";

const theme = createTheme({
  fontFamily: "Kanit",
  components: {
    Button: Button.extend({
      classNames: buttonClass,
    }),
    Select: Select.extend({
      styles: {
        input: {
          borderRadius: "0.5rem",
          opacity: 1,
          height: "44px",
        },
      },
    }),
  },
});
export default theme;
