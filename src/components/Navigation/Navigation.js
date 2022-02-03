import { StyledNavigation, StyledNavLink } from "./StyledNavigation";
import { ThemeToggle } from "../Theme/ThemeToggle";

const Navigation = () => (
  <>
    <StyledNavigation>
      <StyledNavLink exact to="/">
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </StyledNavigation>
    <ThemeToggle />
  </>
);

export default Navigation;
