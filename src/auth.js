/* @flow */

import React from 'react';
import {browserHistory} from 'react-router';
import constants from './constants/constants';
//css
require('./css/index.css');

type Props = {
	children: any
};

class Auth extends React.Component<Props> {

	componentWillMount() {
		if (this.props.location.pathname === '/') {
			browserHistory.push('/login');
		}
	}

	_buttonChoiceClick(choice) {
		if (choice === constants.choiceBtns.LOGIN) {
			browserHistory.push('/login');
		} else if (choice === constants.choiceBtns.SIGNUP) {
			browserHistory.push('/signup');
		}
	}

	render() {
		const {children, location} = this.props;
		return (
			<div className="main">
				<div className="header">JobSearch Tracker</div>
				<div className="choiceBtns">
					<a className="waves-effect waves-light btn" onClick={this._buttonChoiceClick.bind(this, constants.choiceBtns.LOGIN)}><i className="material-icons left">
						cloud</i>Login
					</a>
					<a className="waves-effect waves-light btn" onClick={this._buttonChoiceClick.bind(this, constants.choiceBtns.SIGNUP)}><i className="material-icons left">
						cloud</i>Sign-Up
					</a>
				</div>
				<div className="row mainContainer">
				{children}
				</div>
			</div>
		)
	}
}

module.exports = Auth
