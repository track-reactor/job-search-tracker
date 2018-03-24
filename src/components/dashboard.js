/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
//css

type Props = {||};

class DashBoard extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var ctx = document.getElementById("barChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    
  }

	render() {

		return (
      <div>

        <div className="row">
           <div className="col s12 m5">
             <div className="card-panel white">
               <canvas id="barChart" width="400" height="400"></canvas>
             </div>
           </div>
         </div>

      </div>
		)
	}
}

export default DashBoard