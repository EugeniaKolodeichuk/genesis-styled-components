import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
  margin-right: auto;
  font-size: 36px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.color};

  &.active {
    color: #2196f3;
  }
`;
