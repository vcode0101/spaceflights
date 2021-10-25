import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';
import Countdown from './Components/Countdown/Countdown';
import Navbar from './Components/Navbar/Navbar';

import Launches from './Pages/Launches';
import SpaceStations from './Pages/SpaceStations';
import Astronauts from './Pages/Astronauts';
import Home from "./Pages/Home";



function App() {

  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="row justify-content-end mb-3">
            <div className="col-md-6 col-sm-12">
              <Navbar />
            </div>
            <div className="col-md-3 col-sm-12">
              <Countdown  />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-md-9">
              <Switch>
                <Route exact path="/launches" component={Launches} />
                <Route exact path="/astronauts" component={Astronauts} />
                <Route exact path="/space-stations" component={SpaceStations} />
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
