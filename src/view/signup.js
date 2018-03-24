import React from 'react';

//css
require('../css/signup.css');

type Props = {||};

class Signup extends React.Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      password: '',
      confirmPassword: '',
      confirmPasswordError: false,
    }
  }

  _onInputChange(value, key) {
    let stateObj = { [key]:value };

    if (key === 'confirmPassword') {
      let password = this.state.password
      if (password !== value) {
        stateObj.confirmPasswordError = true;
      } else {
        stateObj.confirmPasswordError = false;
      }
    }
    this.setState(stateObj)
  }

	render() {
    const { userName, password, confirmPassword, confirmPasswordError } = this.state;
    console.log(this.state)
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
      <div className="row">
        <div className="input-field col s12">
          <input
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {this._onInputChange.call(this, e.target.value, 'confirmPassword')}}
            type="password"
            className={confirmPasswordError ? 'validate error' : 'validate'}>
          </input>
          <label for="userName">Confirm Password</label>
        </div>
      </div>
      </div>
		)
	}
}

module.exports = Signup
