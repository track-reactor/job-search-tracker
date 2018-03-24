/* @flow */

import React from 'react';
import { Link } from 'react-router';
//css

require('../css/sidebar.css');

type Props = {||};

class SideBar extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({

    });
  }


	render() {

		return (
        <ul className="collection">
            <li className="collection-item avatar">
              <Link to="/dashboard/statistics">
                <i className="material-icons circle blue">insert_chart</i>
                <span className="title">Statistics</span>
              </Link>
            </li>
            <li className="collection-item avatar">
              <Link to="/dashboard/tracker">
                <i className="material-icons circle">assignment_turned_in</i>
                <span className="title">Progress Tracker</span>
              </Link>
            </li>
            <li className="collection-item avatar">
              <Link to="/dashboard/statistics">
                <i className="material-icons circle green">library_add</i>
                <span className="title">Insert New</span>
              </Link>
            </li>
            <li className="collection-item avatar">
              <Link to="/dashboard/zhen">
                <i className="material-icons circle black">child_care</i>
                <span className="title">Zhen's Tab</span>
              </Link>
            </li>
            <li className="collection-item avatar">
              <Link to="/dashboard/settings">
                <i className="material-icons circle red">settings</i>
                <span className="title">Settings</span>
              </Link>
            </li>
          </ul>
		)
	}
}

export default SideBar