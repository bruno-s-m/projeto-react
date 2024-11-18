import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
