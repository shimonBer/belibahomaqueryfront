import React from 'react';
import './App.css';
import Login from './components/forms/login';
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ReportPicker from './components/forms/reportPicker';

// function PreLogin({ children }) {
//   if (localStorage.getItem("query-auth-token") && location.href !== '/reports') {
//     return <Redirect to="/reports" />;
//   }
//   return children;
// }

function ConnectedRoute(props) {
  if (localStorage.getItem("query-auth-token")) {
    return <Route {...props} />;
  }
  return <Redirect to="/auth" />;
}

function UnConnectedRoute(props) {
  if (!localStorage.getItem("query-auth-token")) {
    return <Route {...props} />;
  }
  return <Redirect to="/reports" />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <UnConnectedRoute exact path="/" component={Login} />
          <ConnectedRoute exact path="/reports" component={ReportPicker} />
          <UnConnectedRoute exact path="/auth" component={Login} />
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
