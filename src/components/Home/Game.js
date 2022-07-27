import classes from "./Game.module.css";
import useInput from "../../hooks/use-input";
import { Fragment, useState, useEffect } from "react";
import Calculate from "../Calculate/CalculateGame";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

function Game(props) {
  const userCtx = useContext(AuthContext);
  const userToken = userCtx.token;

  const {
    value: predictHomeScored,
    isValid: scoredHomeIsValid,
    valueChangeHandler: scoredHomeChangedHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: predictAwayScored,
    isValid: scoredAwayIsValid,
    valueChangeHandler: scoredAwayChangedHandler,
  } = useInput((value) => value.trim() !== "");

  // const [prediction, setprediction] = useState([]);
  // const [savePrediction, setSavePrediction] = useState(false);

  let predictionIsValid = false;

  if (scoredHomeIsValid && scoredAwayIsValid) {
    predictionIsValid = true;
  }

  function submitPrediction(event) {
    event.preventDefault();
    if (!predictionIsValid) {
      return;
    }

    const predictionData = {
      token: userToken,
      home: props.home,
      round: props.filter,
      scoredHome: predictHomeScored,
      away: props.away,
      scoredAway: predictAwayScored,
    };
    fetch(
      "https://the-predictor-5c342a-default-rtdb.firebaseio.com/predictor.json",
      {
        method: "POST",
        body: JSON.stringify(predictionData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // const points = (
    //   <Calculate
    //     resultHome={props.scoredHome}
    //     resultAway={props.scoredAway}
    //     predictHome={predictHomeScored}
    //     predictAway={predictAwayScored}
    //   />
    // );
    // console.log(points);
  }

  return (
    <Fragment>
      {props.filter === props.round.toString() && props.token === "admin" && (
        <div className={classes.game}>
          <div className={classes.team}>
            <h2> {props.away}</h2>
            {props.round < props.currentRound && (
              <div>
                <div className={classes.score}> {props.scoredAway}</div>
                <div className={classes.score}> {props.scoredHome}</div>
              </div>
            )}
            {props.round >= props.currentRound && userToken === props.token && (
              <div>
                <button className={classes.save} onClick={submitPrediction}>
                  שמור
                </button>
              </div>
            )}

            {props.round >= props.currentRound && userToken !== props.token && (
              <div>
                <input
                  type="number"
                  id="scoredAway"
                  value={predictAwayScored}
                  onChange={scoredAwayChangedHandler}
                  className={classes.prediction}
                  min="0"
                  max="9"
                  step="1"
                />
                <input
                  type="number"
                  id="scoredHome"
                  value={predictHomeScored}
                  onChange={scoredHomeChangedHandler}
                  className={classes.prediction}
                  min="0"
                  max="9"
                  step="1"
                />
                <button className={classes.save} onClick={submitPrediction}>
                  שמור
                </button>
              </div>
            )}

            <h2> {props.home} </h2>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Game;
