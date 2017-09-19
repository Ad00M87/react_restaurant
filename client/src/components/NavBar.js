import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../fakeAuth';
import { Menu } from 'semantic-ui-react';

const NavBar = ({ history }) => (
  <Menu compact>
  <nav>
    <Menu.Item>
    <NavLink exact to='/' activeStyle={styles.active}>Home</NavLink>
    </Menu.Item>
    <Menu.Item>
    <NavLink to='/about' activeStyle={styles.active}>About</NavLink>
    </Menu.Item>
    { isAuthenticated() ?
      <div><Menu.Item>
        <NavLink activeStyle={styles.active} to='/dashboard'>Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item>
        <button onClick={ () => {
          logout();
          history.push('/login');
        }}>
        Logout
        </button>
      </Menu.Item></div>
      :
      <Menu.Item>
      <NavLink activeStyle={styles.active} to='/login'>Login</NavLink>
      </Menu.Item>
    }
  </nav>
  </Menu>
)

const styles = {
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'green',
  }
}

export default withRouter(NavBar);
