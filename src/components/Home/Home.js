import { Fragment, useEffect, useState } from "react";
import RoundsFilter from "./RoundsFilter";
import Game from "./Game";
import classes from "./Home.module.css";
import Form from "../Auth/Form";

const Home = () => {
  const [filteredRound, setFilteredRound] = useState("1");
  function filterChangeHandler(selectedRound) {
    setFilteredRound(selectedRound);
  }

  const currentRound = 2; //need to be changed every round
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(
        "https://the-predictor-5c342a-default-rtdb.firebaseio.com/predictor.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedGames = [];

      for (const key in responseData) {
        loadedGames.push({
          id: key,
          token: responseData[key].token,
          round: responseData[key].round,
          home: responseData[key].home,
          away: responseData[key].away,
          scoredHome: responseData[key].scoredHome,
          scoredAway: responseData[key].scoredAway,
        });
      }

      setGames(loadedGames);
      setIsLoading(false);
    };

    fetchGames().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.GamesLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.GamesError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const gamesList = games.map((game) => (
    <Game
      key={game.id}
      id={game.id}
      token={game.token}
      round={game.round}
      home={game.home}
      away={game.away}
      scoredHome={game.scoredHome}
      scoredAway={game.scoredAway}
      filter={filteredRound}
      currentRound={currentRound}
    />
  ));

  return (
    <Fragment>
      <Form />
      <section className={classes.game}>
        <RoundsFilter
          selected={filteredRound}
          onChangeFilter={filterChangeHandler}
        />
        <ul>{gamesList}</ul>
      </section>
    </Fragment>
  );
};

export default Home;
