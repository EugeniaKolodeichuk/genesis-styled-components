import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border: 3px solid #2196f3;
  padding: 0.6em;
  border-radius: 4px;
  margin: 10px 20px;
  text-align: center;
  font-size: 20px;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    background: #2196f3;
    box-shadow: 0 15px 20px #2196f3;
    color: white;
    transform: translateY(-7px);
    border: none;
  }
`;

export const StyledImage = styled.img`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StyledListNoorder = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledItemsNoorder = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 1.5em;
  border: 3px solid #bdbdbd;
  padding: 0.6em;
  border-radius: 4px;
  background: #fefefe8c;
  color: #231f20;
  max-width: 100vw;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 20px;

  font-weight: 500;
  color: #2a363b;

  &.active {
    color: #2196f3;
  }
`;
