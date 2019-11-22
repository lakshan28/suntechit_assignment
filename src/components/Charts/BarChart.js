import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut, Radar } from "react-chartjs-2";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
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
      <div>
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Largest Cities In Massachusetts",
              fontSize: 10
            },
            legend: {
              display: true,
              position: "right"
            }
            //   maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default BarChart;
