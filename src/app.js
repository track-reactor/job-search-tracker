/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
const {
	browserHistory,
  IndexRoute,
  Route,
  Router,
} = require('react-router');
import Auth from './auth';
import Login from './view/login';
import Signup from './view/signup';
import UserRoot from './userRoot';
import Statistics from './view/statistics';
import ResumeTracker from './view/resumeTracker';
import Zhen from './view/zhen';
import Settings from './view/settings';

class App extends React.Component<Props> {
	render() {
		return (
			<Router history={browserHistory}>
					<Route path="/" component={Auth}>
						<Route path="login" component={Login} />
						<Route path="signup" component={Signup}/>
					</Route>
					<Route path="dashboard" component={UserRoot}>
						<Route path='statistics' component={Statistics} />
						<Route path='tracker' component={ResumeTracker} />
						<Route path='zhen' component={Zhen} />
						<Route path='settings' component={Settings} />
					</Route>
			</Router>
		)
	}
}

const dom = document.getElementById('App')
if (dom === null) {
	//Error
	console.error("dom does not exist")
} else {
	ReactDOM.render(<App />, dom);
}
