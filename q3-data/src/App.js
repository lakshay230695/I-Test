import React, { useEffect } from 'react';
import './App.css';
import Ar from './Ar';
import Vr from './Vr';
import ReactGa from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
//implementation of Google Analytics
  useEffect(() => {
    ReactGa.initialize('ENTER YOUR TRACKER CODE HERE')
    //to report page views
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])


  return (
    <div className="App">
      <header className="App-header">
      Q3-Data <br /> <br />
      <Router>
      <a href="./Ar">Augmented Reality</a>
      <a href="./Vr">Virtual Reality</a>
        <Switch>
          <Route path="/vr"> <Vr /></Route>
          <Route path="/ar"> <Ar /> </Route>
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
