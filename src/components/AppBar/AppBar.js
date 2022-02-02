import Navigation from "../Navigation/Navigation";
/* import styles from "../AppBar/AppBar.module.css"; */
import { StyledAppBar } from "../../styled/AppBar";

function AppBar() {
  return (
    <StyledAppBar>
      <Navigation />
    </StyledAppBar>
  );
}

export default AppBar;
