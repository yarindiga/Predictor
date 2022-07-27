import { Fragment } from "react";
import PrivateLeagues from "./PrivateLeagues";
import PublicLeagues from "./PublicLegues";

function Leagues() {
  return (
    <Fragment>
      <div>
        <h3>ליגות פרטיות</h3>
        <PrivateLeagues />
      </div>
      <div>
        <h3>ליגות ציבוריות</h3>
        <PublicLeagues />
      </div>
    </Fragment>
  );
}

export default Leagues;
