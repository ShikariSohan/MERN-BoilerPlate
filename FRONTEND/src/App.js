import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import AuthProvider from "./context/AuthProvider";
export default function App() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </AuthProvider>
    );
}
