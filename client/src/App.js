import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
			  {
				  //<Route path='/auth' component={Auth} />
			  }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
