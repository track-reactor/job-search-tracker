/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar.js';
import SideBar from './components/sidebar.js';
import DashBoard from './components/dashboard.js';

require('./css/userRoot.css');

type Props = {||};

class UserRoot extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({

    });
  }

	render() {
    const { children } = this.props;
    console.log(children)
		return (
      <div>
        <div className="navbar">
          <NavBar />
        </div>

        <div className="userRootContent">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="userRootBodyContainer">
            {children}
          </div>
        </div>
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large teal">
            <i className="large material-icons">mode_edit</i>
          </a>
          <ul>
            <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
            <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
            <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
            <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
          </ul>
        </div>
      </div>
		)
	}
}

export default UserRoot