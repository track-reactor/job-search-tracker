/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
//css

require('../css/navBar.css');

type Props = {||};

class NavBar extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({

    });
  }

	render() {
    // var elem = document.querySelector('.sidenav');
    // var instance = M.Sidenav.init(elem, options);

		return (
      <nav>
         <div className="nav-wrapper teal">
          <a href="#!" className="main-header brand-logo">
            <i className="large material-icons">assignment</i>
            JobSearch Tracker
          </a>
         <ul id="nav-mobile" className="right">
           <li><a>User</a></li>
         </ul>
         </div>
       </nav>
		)
	}
}

export default NavBar