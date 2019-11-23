import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import "./Char.css";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Completed", "In Progress", "Canceled", "Delayed"],
        datasets: [
          {
            label: "Population",
            data: [47.3, 25.0, 20, 13.1],
            backgroundColor: ["#02F0C7", "#3ABEFF", "#935CCB", "#707070"]
          }
        ]
      }
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  render() {
    return (
      <div className="dought-chart">
        <Doughnut
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Tasks",
              fontSize: 20,
              position: "top"
            },
            legend: {
              display: true,
              position: "right"
            },
            layout: {
              bottom: 100
            }
            // maintainAspectRatio: false
          }}
        />
        <div className="margin">
          <p>hjvjhgjh</p>
        </div>
      </div>
    );
  }
}

export default Chart;
