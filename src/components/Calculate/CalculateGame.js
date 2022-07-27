function Calculate(props) {
  const resultHome = props.resultHome;
  const resultAway = props.resultAway;
  const predictHome = props.predictHome;
  const predictAway = props.predictAway;
  const points = 0;
  if (resultHome === "notYet" || resultAway === "notYet") {
    return 0;
  }
  //Predict the correct winner/loser or draw- +3 points
  //Predict the correct goal difference- +1 points
  if (predictHome > predictAway) {
    if (resultHome > resultAway) {
      points += 3;
    }
    if (predictHome - predictAway === resultHome - resultAway) {
      points += 1;
    }
  } else if (predictHome === predictAway) {
    if (resultHome === resultAway) {
      points += 4;
    }
  } else if (predictHome < predictAway) {
    if (resultHome < resultAway) {
      points += 3;
    }
    if (predictHome - predictAway === resultHome - resultAway) {
      points += 1;
    }
  }
  //Predict the correct score- +1 points
  if (predictHome === resultHome && predictAway === resultAway) {
    points += 1;
  }

  return points;
}

export default Calculate;
