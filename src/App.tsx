import React from "react";

import { Container, MenuIcon } from "./App.styled";
import { NavBar } from "./components/NavBar";

export const App: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <ul>
          <li className="active">
            <MenuIcon>
              <i className="material-icons">home</i>
              Comptes
            </MenuIcon>
            <ul>
              <li className="active">
                <div>Julien</div>
                <div>N **** 1234</div>
              </li>
              <li>
                <div>Compte de cheques</div>
                <div>N **** 5678</div>
              </li>
              <li>
                <div>Livret A</div>
                <div>N **** 9876</div>
              </li>
              <li>
                <div>MultiHorizons</div>
                <div>N **** 0000</div>
              </li>
            </ul>
          </li>
          <li>
            <MenuIcon>
              <i className="material-icons">pie_chart</i>
              Budget
            </MenuIcon>
          </li>
          <li>
            <MenuIcon>
              <i className="material-icons">all_inbox</i>
              Messages
            </MenuIcon>
          </li>
          <li>
            <MenuIcon>
              <i className="material-icons">extension</i>
              Extensions
            </MenuIcon>
          </li>
        </ul>
      </NavBar>
    </Container>
  );
};
