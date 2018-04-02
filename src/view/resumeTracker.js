import React from 'react';
import $ from 'jquery';
import {postRequest, getRequest} from '../utils/APIUtils';
import { Modal, Button, Row, Input, Col, Chip, Tag } from 'react-materialize';

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

  componentDidMount() {

  }

  _onInputChange(value, key) {
    let stateObj = { [key]:value };
    this.setState(stateObj)
  }

  _onSubmitClick(e) {
    e.preventDefault();
    let payLoad = {
      company: this.state.company,
      inputStatus: this.state.inputStatus
    }
    // console.log('Success POST! Data: ', payLoad);
    // postRequest('/login', payLoad, function(err, data) {
    //   console.log(data);
    // })
    getRequest('/checker', (err, data) => {
      console.log(data)
    })
  }

  render() {
    const { company, inputStatus, tableUser, tableStatus } = this.state;
    console.log(this.state)

    return (
      <div>
        <div className="dashboard">
          <div className="progress-title">Progress Tracker</div>

          <Row>
            <Col s={12}>
              <Chip>
                <i className="progress-img tiny material-icons circle green">timelapse</i>
                pending within 10 Days
              </Chip>
              <Chip>
                <i className="progress-img tiny material-icons circle yellow">timelapse</i>
                pending within 20 Days
              </Chip>
              <Chip>
                <i className="progress-img tiny material-icons circle red">timelapse</i>
                pending within 30 Days
              </Chip>
            </Col>
          </Row>

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

          <Modal
            header='ADD NEW JOB'
            fixedFooter
            trigger={<Button>Add New Job Search</Button>}
            actions={<Button onClick={this._onSubmitClick.bind(this)}>Send</Button>}>
            <div className="table-input">
              <Row>
                  <Input 
                    s={6} 
                    label="Company" 
                    value={company}
                    onChange={(e) => {this._onInputChange.call(this, e.target.value, 'inputUser')}}
                  />
                  <Input 
                    s={6} 
                    label="Position" 
                  />
                  <Input 
                    s={6} 
                    label="Status" 
                    value={inputStatus}
                    onChange={(e) => {this._onInputChange.call(this, e.target.value, 'inputStatus')}}
                  />
                  <Input s={6} label="Salary" />
                  <Input s={6} label="Location" />
                  <Input s={6} label="Link" />
                  <Input s={6} label="Contact" />
                  <Input s={6} label="Referral" />
              </Row>

              
            </div>
          </Modal>

          <div className="table-username">{tableUser}</div>
          <div className="table-status">{tableStatus}</div>

        </div>
      </div>
    )
  }
}

export default ResumeTracker