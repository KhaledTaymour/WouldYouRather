import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignIn from "components/signIn/SignIn.jsx";
import Home from "container/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* Switch tag used in order to navigate to ONLY ONE route of the wrapped routes and not compose more than one */}
          <Route path="/signin" component={SignIn} />
          <Route path="/Home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
