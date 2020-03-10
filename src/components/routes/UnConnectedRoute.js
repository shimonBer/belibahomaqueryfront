import React from 'react';
import { Redirect, Route } from "react-router-dom";

export default function UnConnectedRoute(props) {
    if (!localStorage.getItem("query-auth-token")) {
      return <Route {...props} />;
    }
    return <Redirect to="/reports" />;
  }