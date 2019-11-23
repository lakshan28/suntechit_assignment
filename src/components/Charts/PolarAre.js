import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut, Radar } from "react-chartjs-2";

class PolarAre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Page Views", "Leads", "Clients"],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)"
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
      <div className="radar-chart">
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "User Statistics",
              fontSize: 20
            },
            legend: {
              display: true,
              position: "right"
            }
            //maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default PolarAre;
