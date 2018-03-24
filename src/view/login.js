/* @flow */

import React from 'react';

//css
require('../css/login.css');

type Props = {||};

class Login extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
  }

  _onInputChange(value, key) {
    let stateObj = { [key]:value };
    this.setState(stateObj)
  }

	render() {
    const { userName, password } = this.state;
    console.log('LOGIN: ', this.state)
		return (
		  <div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="userName"
              value={userName}
              onChange={(e) => {this._onInputChange.call(this, e.target.value, 'userName')}}
              type="text"
              className="validate">
            </input>
            <label for="userName">User Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              value={password}
              onChange={(e) => {this._onInputChange.call(this, e.target.value, 'password')}}
              type="password"
              className="validate">
            </input>
            <label for="userName">Password</label>
          </div>
        </div>  
      </div>
		)
	}
}

module.exports = Login
