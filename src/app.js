/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
const {
	browserHistory,
  IndexRoute,
  Route,
  Router,
} = require('react-router');
import Index from './index';
import Login from './view/login';
import Signup from './view/signup';

type Props = {||};

class App extends React.Component<Props> {
	render() {
		return (
			<Router history={browserHistory}>
					<Route path="/" component={Index}>
						<Route path="login" component={Login} />
						<Route path="signup" component={Signup}/>
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
