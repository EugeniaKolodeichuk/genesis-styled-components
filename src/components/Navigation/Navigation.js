/* import { NavLink } from "react-router-dom"; */
/* import styles from '../Navigation/Navigation.module.css'; */
import { StyledNavigation, StyledNavLink } from "../../styled/Navigation";

const Navigation = () => (
  <StyledNavigation>
    <StyledNavLink exact to="/">
      Home
    </StyledNavLink>
    <StyledNavLink to="/movies">Movies</StyledNavLink>
  </StyledNavigation>
);

export default Navigation;
