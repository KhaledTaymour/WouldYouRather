import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignIn from "components/signIn/SignIn.jsx";
import Home from "container/home/Home";
import NewQuestionPage from "container/newQuestionPage/NewQuestionPage";
import LeaderBoardPage from "container/leaderBoardPage/LeaderBoardPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* Switch tag used in order to navigate to ONLY ONE route of the wrapped routes and not compose more than one */}
          <Route path="/signin" component={SignIn} />
          <Route path="/home" component={Home} />
          <Route path="/add" component={NewQuestionPage} />
          {/* <Route path="/questions/:id" component={NewQuestion} /> */}
          <Route path="/leaderboard" component={LeaderBoardPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
