/* @flow */

import React from 'react';
import { Link } from 'react-router';
import { Button, SideNav, SideNavItem, Icon } from 'react-materialize';
//css

require('../css/sidebar.css');

type Props = {||};

class SideBar extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      
    });
  }

  componentDidMount() {
    $('.sidenav').sideNav();
  }

	render() {

		return (
      <div>
        <SideNav
          trigger={<Button>SIDE NAV DEMO</Button>}
          options={{ 
            closeOnClick: true
          }}
        >
          <SideNavItem href='#!icon' icon='account_circle'>UserName</SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Navigation</SideNavItem>
          <Link to="/dashboard/statistics">
            <SideNavItem href='#!icon' icon='insert_chart'>Statistics</SideNavItem>
          </Link>
          <Link to="/dashboard/tracker">
            <SideNavItem href='#!icon' icon='assignment_turned_in'>Progress Tracker</SideNavItem>
          </Link>
          <Link to="/dashboard/zhen">
            <SideNavItem href='#!icon' icon='child_care'>Zhen's Tab</SideNavItem>
          </Link>
          <Link to="/dashboard/settings">
            <SideNavItem href='#!icon' icon='settings'>Settings</SideNavItem>
          </Link>
        </SideNav>
      </div>        
		)
	}
}

export default SideBar