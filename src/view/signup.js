import {browserHistory} from 'react-router';
import React from 'react';
import {postRequest} from '../utils/APIUtils';
import { Modal, Button } from 'react-materialize';

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
      errorMessage: '',
    }
  }

  _onInputChange(value, key) {
    let stateObj = { [key]:value };

    if (key === 'confirmPassword') {
      let password = this.state.password
      if (value === '') {
        stateObj.confirmPasswordError = false;
      } else if (password !== value) {
        stateObj.confirmPasswordError = true;
      } else {
        stateObj.confirmPasswordError = false;
      }
    }
    this.setState(stateObj)
  }

  _onModalCloseClick() {
    let emptyCheck = (this.state.userName === '' || this.state.password === '' || this.state.confirmPassword === '')
    if (!emptyCheck && !this.state.confirmPasswordError) {
      let payLoad = {
        username: this.state.userName,
        password: this.state.password
      }

      postRequest('/login', payLoad, (err, data) => {
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

    // browserHistory.push('/login');
  }

  _signupClickHandler() {
    //-----------Check and POST Req-----------
    let emptyCheck = (this.state.userName === '' || this.state.password === '' || this.state.confirmPassword === '')
    if (!emptyCheck && !this.state.confirmPasswordError) {
      let payLoad = {
        username: this.state.userName,
        password: this.state.password
      }

      postRequest('/signup', payLoad, (err, data) => {
        if (data.success) {
          $('#success-signup').modal('open');
        } else {
          this.setState({
            errorMessage: 'Username Already Exist!'
          })
        }
      })
    }

    //-------------DEV Testing---------------
    // $('#success-signup').modal('open')
  }

	render() {
    const { userName, password, confirmPassword, confirmPasswordError } = this.state;
    console.log(this.state)
    
		return (
      <div>

        <Modal
          id="success-signup"
          header="Thank you for Signing Up!"
          actions={<Button onClick={this._onModalCloseClick.bind(this)}>LOGIN</Button>}>
          Welcome {this.state.userName}! Best of luck on your job search!
        </Modal>

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
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">enhanced_encryption</i>
            <input
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {this._onInputChange.call(this, e.target.value, 'confirmPassword')}}
              type="password"
              className={confirmPasswordError ? 'validate error' : 'validate'}>
            </input>
            <label htmlFor="userName">Confirm Password</label>
          </div>
        </div>

        <div className="signin-btn">
          <button
            className="btn waves-effect waves-light"
            onClick={this._signupClickHandler.bind(this)}
            type="submit"
            name="action">
            SIGN-UP
              <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
		)
	}
}

module.exports = Signup
