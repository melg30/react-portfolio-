import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

// NavBar on top => used to click between "pages"
// /game => Game
// /login => Login
// /score => Score
// ANYWHERE ELSE => Home

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          {/* you can only match ONE route inside */}
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route exact path="/portfolio" component={Portfolio} />
          {/* take home for anything else */}
          <Route component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
