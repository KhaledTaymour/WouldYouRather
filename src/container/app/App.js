import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignIn from "components/signIn/SignIn";
import Home from "container/home/Home";
import Question from "container/question/Question";
import NewQuestionPage from "container/newQuestionPage/NewQuestionPage";
import LeaderBoardPage from "container/leaderBoardPage/LeaderBoardPage";
import PrivateRoute from "container/privateRoute/PrivateRoute";
import FourOhFour from "container/fourOhFour/FourOhFour";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* Switch tag used in order to navigate to ONLY ONE route of the wrapped routes and not compose more than one */}
          <Route exact path="/" component={SignIn} />
          <Route path="/signin" component={SignIn} />

          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/add">
            <NewQuestionPage />
          </PrivateRoute>
          <PrivateRoute path="/questions/:id">
            <Question />
          </PrivateRoute>
          <PrivateRoute path="/leaderboard">
            <LeaderBoardPage />
          </PrivateRoute>

          <Route path="/404" component={FourOhFour} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
