import styled from "styled-components";

export const Aside = styled.aside`
  background-color: ${props => props.theme.secondary};
  min-width: 250px;

  & ul {
    list-style: none;
    padding: 0;
  }

  & > ul {
    padding: 0 0 0 10px;
  }

  & ul li {
    color: ${props => props.theme.textSecondary};
  }

  & > ul > li {
    padding: 16px 0 16px 10px;
  }

  & > ul > li.active {
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.variant};
    border-radius: 12px 0 0 12px;
    font-weight: bold;
  }

  & > ul > li.active > ul {
    padding: 8px 0 8px 18px;
  }

  & > ul > li.active > ul > li {
    padding: 8px 16px;
    margin: 8px 0;
    font-weight: normal;
  }

  & > ul > li.active > ul > li.active {
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.text};
    border-radius: 8px 0 0 8px;
    font-weight: bold;
  }
`;
