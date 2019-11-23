import React, { Component } from "react";
import "./Dashboard.css";

import Sidebar from "../sidebar/Sidebar";
import Chart from "../Charts/Pie/Chart";
import PolarAre from "../Charts/PolarAre";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import Calenda from "../Scheduled/calendar/Calenda";
import Team from "../Scheduled/Team/Team";
import TodoList from "../Scheduled/TodoList/TodoList";
import ScheduledMettings from "../Scheduled/ScheduledMettings/ScheduledMettings";
import Activity from "../Scheduled/Activity/Activity";
import Congrats from "../Charts/CongratsBar/Congrats";
import Visionary from "../Charts/CongratsBar/Visionary";
import SearchBar from "../Charts/CongratsBar/SearchBar";
import Map from "../Charts/map/Map";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        {
          //Side
        }
        <div className="side-bar12">
          <Sidebar />
        </div>

        <div className="row2">
          <div className="main-search-area">
            <SearchBar />
          </div>

          {
            //********2nd row ***** */}
          }
          <div className="second-row">
            <div className="row3">
              <div className="row-1">
                <div className="congrats-bar">
                  <Congrats />
                </div>
                <div className="stars">
                  <Visionary />
                </div>
              </div>
              <div className="row-1">
                <div className="doughnut">
                  <Chart />
                </div>
                <div className="radar">
                  <PolarAre />
                </div>
              </div>
              <div className="row-2">
                <div className="bar-chart">
                  <BarChart />
                </div>
              </div>
              <div className="row-3">
                <div className="bar-chart">
                  <LineChart />
                </div>
              </div>
              <div className="row-4">
                <Map />
              </div>
              <div className="row-5"></div>
            </div>
            {
              //********3 rd row*******
            }
            <div className="row4">
              <div className="row-11">
                <Calenda />
              </div>
              <div className="row-22">
                <Team />
              </div>
              <div className="row-33">
                <TodoList />
              </div>
              <div className="row-44">
                <ScheduledMettings />
              </div>
              <div className="row-55">
                <Activity />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
