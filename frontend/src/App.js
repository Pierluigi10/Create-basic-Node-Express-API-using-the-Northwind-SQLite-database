import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TopTen from "./components/TopTen";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">     
            <Home />
          </Route>
          <Route path="/top-ten">     
          <TopTen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
