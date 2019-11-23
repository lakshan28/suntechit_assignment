import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut, Radar } from "react-chartjs-2";
import "./Pie/Chart";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
          {
            label: "Population",
            data: [90, 60, 69, 63, 85, 96, 50],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)"
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
              text: "Advisor Statistics",
              fontSize: 20
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
