/* @flow */

import React from 'react';
import {browserHistory} from 'react-router';
//css
require('./css/index.css');

type Props = {
	children: any
};

const choiceBtns = {
	SIGNUP: 'SIGNUP',
	LOGIN: 'Login',
}

class Index extends React.Component<Props> {
	_loginClickHandler() {
		browserHistory.push('/dashboard/statistics');
	}

	_buttonChoiceClick(choice) {
		if (choice === choiceBtns.LOGIN) {
			browserHistory.push('/login');
		} else if (choice === choiceBtns.SIGNUP) {
			browserHistory.push('/signup');
		}
	}

	render() {
		const {children, location} = this.props;
		if (location.pathname === '/') {
			browserHistory.push('/login');
		}
		return (
			<div className="main">
				<div className="choiceBtns">
					<a className="waves-effect waves-light btn" onClick={this._buttonChoiceClick.bind(this, choiceBtns.SIGNUP)}><i className="material-icons left">
						cloud</i>Sign-Up
					</a>
					<a className="waves-effect waves-light btn" onClick={this._buttonChoiceClick.bind(this, choiceBtns.LOGIN)}><i className="material-icons left">
						cloud</i>Login
					</a>
				</div>
				<div className="row mainContainer">
				{children}
				</div>
				<div className="login-btn">
					<button
						className="btn waves-effect waves-light"
						onClick={this._loginClickHandler.bind(this)}
						type="submit"
						name="action">
						SEND
							<i className="material-icons right">send</i>
					</button>
				</div>
			</div>
		)
	}
}

module.exports = Index
