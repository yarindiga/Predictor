import { Fragment, useContext, useState } from "react";
import AuthForm from "../Auth/AuthForm";
import AuthContext from "../../store/auth-context";
import classes from "./Form.module.css";

function Form() {
  const authCtx = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);

  function openTheFormHandler() {
    setShowForm(true);
  }

  function closeTheFormHandler() {
    setShowForm(false);
  }
  return (
    <Fragment>
      {!authCtx.isLoggedIn && !showForm && (
        <button className={classes.loginButton} onClick={openTheFormHandler}>
          התחברות
        </button>
      )}
      {!authCtx.isLoggedIn && showForm && (
        <div>
          <AuthForm />
          <button className={classes.loginButton} onClick={closeTheFormHandler}>
            סגור
          </button>
        </div>
      )}
    </Fragment>
  );
}
export default Form;
