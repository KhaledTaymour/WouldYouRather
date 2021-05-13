import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignIn from "components/signIn/SignIn";
import Home from "container/home/Home";
import Question from "container/question/Question";
import NewQuestionPage from "container/newQuestionPage/NewQuestionPage";
import LeaderBoardPage from "container/leaderBoardPage/LeaderBoardPage";
import PrivateRoute from "container/privateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* Switch tag used in order to navigate to ONLY ONE route of the wrapped routes and not compose more than one */}
          <Route exact path="/" component={SignIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/home">
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          </Route>
          <Route path="/add">
            <PrivateRoute>
              <NewQuestionPage />
            </PrivateRoute>
          </Route>
          <Route path="/questions/:id">
            <PrivateRoute>
              <Question />
            </PrivateRoute>
          </Route>
          <Route path="/leaderboard">
            <PrivateRoute>
              <LeaderBoardPage />
            </PrivateRoute>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
