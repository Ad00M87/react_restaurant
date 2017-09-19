import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import ProtectedRoute from './components/ProtectedRoute';
import { Container } from 'semantic-ui-react';

const App = () => (
  <div style={{ background: 'white'}}>
    <NavBar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <ProtectedRoute path='/dashboard' component={Dashboard} />
          <ProtectedRoute path='/menus/:id' component={Menu} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
  </div>
)

export default App;
