import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* when we visit the / path we see the home page */}
            <Route path="/">
            <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
