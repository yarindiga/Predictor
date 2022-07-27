import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import LeaguesPage from "./pages/LeaguesPage";
import PrizesPage from "./pages/PrizesPage";
import RulesPage from "./pages/RulesPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/leagues">
          <LeaguesPage />
        </Route>
        <Route path="/prizes">
          <PrizesPage />
        </Route>
        <Route path="/rules">
          <RulesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
