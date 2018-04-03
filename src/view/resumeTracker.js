import React from 'react';
import $ from 'jquery';
import {postRequest, getRequest} from '../utils/APIUtils';
import { Modal, Button, Row, Input, Col, Chip, Tag } from 'react-materialize';
import ReactTable from 'react-table';

import 'react-table/react-table.css';
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

    const data = [{
        company: 'Google',
        progress: 60,
        status: 'On-Site Interview',
        position: 'Fullstack Web Developer',
        salary: '146k',
        location: 'Palo Alto'
      },{
        company: 'Amazon',
        progress: 30,
        status: 'Phone Interview #2',
        position: 'Front-end Web Developer',
        salary: '130k',
        location: 'Seattle'
      }, {
        company: 'Facebook',
        progress: 80,
        status: 'On-Site Interview #2',
        position: 'Fullstack Web Developer',
        salary: '120k',
        location: 'Palo Alto'
      }, {
        company: 'Square',
        progress: 70,
        status: 'On-Site Interview #3',
        position: 'Fullstack Web Developer',
        salary: '150k',
        location: 'San Francisco'
      }, {
        company: 'Credit Karma',
        progress: 40,
        status: 'Take Home Challenge',
        position: 'Fullstack Web Developer',
        salary: '110k',
        location: 'San Francisco'
      }, {
        company: 'Linkdin',
        progress: 45,
        status: 'Sent',
        position: 'Fullstack Web Developer',
        salary: '105k',
        location: 'San Francisco'
      }, {
        company: 'InstaCart',
        progress: 15,
        status: 'On-Site Interview #1',
        position: 'Fullstack Web Developer',
        salary: '115k',
        location: 'San Francisco'
      }]

      const columns = [{
        Header: 'Company',
        accessor: 'company' // String-based value accessors!
      }, {
        Header: 'Progress',
        accessor: 'progress',
        Cell: row => (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#dadada',
                      borderRadius: '2px'
                    }}
                  >
                    <div
                      style={{
                        width: `${row.value}%`,
                        height: '100%',
                        backgroundColor: row.value > 66 ? '#85cc00'
                          : row.value > 33 ? '#ffbf00'
                          : '#ff2e00',
                        borderRadius: '2px',
                        transition: 'all .2s ease-out'
                      }}
                    />
                  </div>
                )
      },{
        Header: 'Status',
        accessor: 'status'
      }, {
        Header: 'Position',
        accessor: 'position' // Custom value accessors!
      }, {
        Header: 'Salary',
        accessor: 'salary'
      }, {
        Header: 'Location',
        accessor: 'location'
      }]

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
              <p>test test test test</p>  
            
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


          <ReactTable
            defaultPageSize={10}
            data={data}
            columns={columns}
          />


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