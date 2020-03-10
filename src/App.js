import React from 'react';
import './App.css';
import Login from './components/forms/login';
import Register from './components/forms/register';
import { Switch, BrowserRouter as Router } from "react-router-dom";
import ReportPicker from './components/forms/reportPicker';
import ConnectedRoute from './components/routes/ConnectedRoute';
import UnConnectedRoute from './components/routes/UnConnectedRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <UnConnectedRoute exact path="/" component={Login} />
          <ConnectedRoute exact path="/reports" component={ReportPicker} />
          <UnConnectedRoute exact path="/login" component={Login} />
          <UnConnectedRoute exact path="/register" component={Register} />

        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
