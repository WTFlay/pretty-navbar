import React from "react";

import { Aside } from './NavBar.styled';

const theme = {
  main: "#5ab7d2",
  secondary: "#1b4157",
  variant: "#163b4d",
  text: "#fff",
  textSecondary: "#7d9aa9"
};

export const NavBar: React.FC = ({ children }) => {
  return (
    <Aside theme={theme}>
      {children}
    </Aside>
  );
};
