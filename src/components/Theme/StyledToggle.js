import styled from "styled-components";
import { ReactComponent as MoonIcon } from "../../static/moon.svg";
import { ReactComponent as SunIcon } from "../../static/sun.svg";
import { LightTheme } from "./StyledThemes";

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  padding-left: auto;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 6rem;
  height: 3rem;
`;

export const StyledSunIcon = styled(SunIcon)`
  height: auto;
  width: 2rem;
  transition: all 0.3s linear;
  transform: ${(props) =>
    props.theme === LightTheme ? "translateY(0)" : "translateY(100px)"};
`;

export const StyledMoonIcon = styled(MoonIcon)`
  height: auto;
  width: 2rem;
  transition: all 0.3s linear;
  transform: ${(props) =>
    props.theme === LightTheme ? "translateY(-100px)" : "translateY(0)"};
`;
