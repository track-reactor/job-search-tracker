/* @flow */

import {browserHistory} from 'react-router';
import React from 'react';
import {postRequest} from '../utils/APIUtils';

//css
require('../css/login.css');

type Props = {||};

class Login extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      errorMessage: ''
    }
  }

  _onInputChange(value, key) {
    let stateObj = { [key]:value };
    this.setState(stateObj)
  }

  _loginClickHandler() {
    // ------------User Check--------------
    let emptyCheck = (this.state.userName === '' || this.state.password === '')
    if (!emptyCheck) {
      let payLoad = {
        username: this.state.userName,
        password: this.state.password
      }

      postRequest('/login', payLoad, (err, data) => {
        console.log('LOGIN-----data: ', data)
        if (err) {
          this.setState({
            errorMessage: 'Incorrect Username or Password'
          })
        }
        if (data.success) {
          this.setState({
            errorMessage: ''
          })
          browserHistory.push('/dashboard/statistics');
        } else {
          this.setState({
            errorMessage: 'Incorrect Username or Password'
          })
        }
      })
    }

    // -----------DEV Testing--------------
    // browserHistory.push('/dashboard/statistics');
  }

	render() {
    const { userName, password } = this.state;
		return (
		  <div>
        <p className="errorMessage">{this.state.errorMessage}</p>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">account_circle</i>
            <input
              id="userName"
              value={userName}
              onChange={(e) => {this._onInputChange.call(this, e.target.value, 'userName')}}
              type="text"
              className="validate">
            </input>
            <label htmlFor="userName">User Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">lock</i>
            <input
              id="password"
              value={password}
              onChange={(e) => {this._onInputChange.call(this, e.target.value, 'password')}}
              type="password"
              className="validate">
            </input>
            <label htmlFor="userName">Password</label>
          </div>
        </div>
        <div className="login-btn">
          <button
            className="btn waves-effect waves-light"
            onClick={this._loginClickHandler.bind(this)}
            type="submit"
            name="action">
            LOGIN
              <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
		)
	}
}

module.exports = Login
