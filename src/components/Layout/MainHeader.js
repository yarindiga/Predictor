import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./MainHeader.module.css";

function MainHeader() {
  const authCtx = useContext(AuthContext);

  function logoutHandler() {
    authCtx.logout();
  }

  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="https://sport1images.maariv.co.il/image/upload/f_auto,fl_lossy,c_thumb,g_north,w_300,h_200/677768"
      />
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              משחקים
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/leagues">
              ליגות
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/prizes">
              פרסים
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/rules">
              חוקים
            </NavLink>
          </li>
          {authCtx.isLoggedIn && (
            <li>
              <button onClick={logoutHandler} to="/home">
                התנתקות
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
