import React from 'React';
import $ from 'jquery';

require('../css/resumeTracker.css');

class ResumeTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUser: '',
      inputStatus: '',
      tableUser: '',
      tableStatus: ''
    }
  }

  _onInputChange(value, key) {
    let stateObj = { [key]:value };
    this.setState(stateObj)
  }

  _onSubmitClick(e) {
    e.preventDefault();
    let payLoad = {
      inputUser: this.state.inputUser,
      inputStatus: this.state.inputStatus
    }
    console.log('Success POST! Data: ', payLoad);
    $.ajax({
      type:'POST',
      url:'/',
      data: JSON.stringify(payLoad),
      contentType: 'application/json',
      success: (data) => {
        console.log('Success POST! Data: ', data);
        // this.setState({
        //   tableUser: data.userName,
        //   tableStatus: data.Status
        // })
      },
      error: (error) => {
        console.log('Failed GET! Error: ', error);
      } 
    })
  }

  render() {
    const { inputUser, inputStatus, tableUser, tableStatus } = this.state;
    console.log(this.state)

    return (
      <div>
        <div className="dashboard">
          <div className="progress-title">Progress Tracker</div>

          <div className="row boxCard">
            <div className="col s12 m4">
              <div className="card-panel teal">
                <i className="tiny material-icons circle green">timelapse</i>
                <span className="white-text">Application pending within 10 Days</span>
                <br/>
                
                <i className="tiny material-icons circle yellow">timelapse</i>
                <span className="white-text">Application pending within 20 Days</span>
                <br/>
                
                <i className="tiny material-icons circle red">timelapse</i>
                <span className="white-text">Application pending within 30 Days</span>
              </div>
            </div>
            <div className="col s6 m4">
              <div className="card-panel teal">
                <i className="tiny material-icons circle green">timelapse</i>
                <span className="white-text">Application pending within 10 Days</span>
                <br/>
                
                <i className="tiny material-icons circle yellow">timelapse</i>
                <span className="white-text">Application pending within 20 Days</span>
                <br/>
                
                <i className="tiny material-icons circle red">timelapse</i>
                <span className="white-text">Application pending within 30 Days</span>
              </div>
            </div>
            <div className="col s6 m4">
              <div className="card-panel teal">
                <i className="tiny material-icons circle green">timelapse</i>
                <span className="white-text">Application pending within 10 Days</span>
                <br/>
                
                <i className="tiny material-icons circle yellow">timelapse</i>
                <span className="white-text">Application pending within 20 Days</span>
                <br/>
                
                <i className="tiny material-icons circle red">timelapse</i>
                <span className="white-text">Application pending within 30 Days</span>
              </div>
            </div>
          </div>

          <div className="table-input">
            <p>----ADD DATA----</p>
            <form>
              Add User Name: 
              <input 
                type="text" 
                value={inputUser}
                onChange={(e) => {this._onInputChange.call(this, e.target.value, 'inputUser')}}>
              </input>
              Add Status: 
              <input 
                type="text" 
                value={inputStatus}
                onChange={(e) => {this._onInputChange.call(this, e.target.value, 'inputStatus')}}>
              </input> 
              <button onClick={this._onSubmitClick.bind(this)}>Send</button>
            </form>
          </div>

          <div className="table-username">{tableUser}</div>
          <div className="table-status">{tableStatus}</div>

        </div>
      </div>
    )
  }
}

export default ResumeTracker