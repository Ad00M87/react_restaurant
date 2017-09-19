import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuForm from './MenuForm';
import { Advertisement } from 'semantic-ui-react';

class Dashboard extends Component {
  state = { menus: [] };

  componentDidMount() {
    fetch('/api/menus')
      .then( res => res.json() )
      .then( menus => this.setState({ menus }))
  }

  addMenu = (menu) => {
    this.setState({ menus: [menu, ...this.state.menus]});
  }

  render() {
    const { menus } = this.state;
    return(
      <div>
        <MenuForm menu={{}} addMenu={this.addMenu} />
        <ol>
          { menus.map( menu => {
            return(
              <li>
                <Advertisement
                  unit='panorama'
                  style={{ background: 'rgba(104, 105, 104, .5)', padding: '10px', borderRadius: '15px' }}>
                  <Link to={`/menus/${menu.id}`}>{menu.name} - ${menu.price}</Link>
                  <p>{menu.description}</p>
                </Advertisement>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default Dashboard;
