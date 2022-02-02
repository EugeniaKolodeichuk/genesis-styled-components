import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const StyledListOrder = styled.ul`
  margin-left: 0;
  padding: 0;
  list-style: none;
  counter-reset: li;
`;

export const StyledItemsOrder = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5em;
  border: 3px solid #bdbdbd;
  padding: 0.6em;
  border-radius: 4px;
  background: #fefefe8c;
  color: #231f20;

  &:before {
    position: absolute;
    top: -0.7em;
    padding-left: 0.4em;
    padding-right: 0.4em;
    font-size: 16px;
    font-weight: bold;
    color: #2196f3;
    background: #fefefe;
    border-radius: 50%;
    counter-increment: li;
    content: counter(li);
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
`;
